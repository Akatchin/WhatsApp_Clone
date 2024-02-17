import "./styles.css"
import { auth, provider, addUsers } from "../firebaseConfig"
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth"
import { useDispatch } from "react-redux";
import { setLoginData  } from "../redux/sliceLogin";

const Login = ({ onReceive }) => {

    type DataType = {
        user: {
            uid: string,
            displayName: string,
            avatar: string,
            providerData: [{uid: string}]
        },
        
    }

    const dispatch = useDispatch()

    const handleLoginData = (result: DataType) => {
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential?.accessToken;
        fetch(`https://graph.facebook.com/${result.user.providerData[0].uid}/picture?type=large&access_token=${accessToken}`)
            .then((response) => response.blob())
            .then((blob) => URL.createObjectURL(blob))
            .then((avatarProfile) => {
                const newUser = {
                    id: result.user.uid,
                    name: result.user.displayName,
                    avatar: avatarProfile
                }
                addUsers(newUser)
                dispatch(setLoginData(newUser))
            })
    
        onReceive(true)
    }

    const fbData = () => {
        signInWithPopup(auth, provider).then((result: any) => {
            handleLoginData(result)
        })
    }

    return (
        <button onClick={() => fbData()}>Logar com facebook</button>
    )
}


export default Login






