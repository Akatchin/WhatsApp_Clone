import "./styles.css"
import { auth, provider, addUsers } from "../firebaseConfig"
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth"
import { useDispatch } from "react-redux";
import { setLoginData  } from "../redux/sliceLogin";
import { receive } from "../type";

const Login = ({ onReceive }: receive) => {

    const dispatch = useDispatch()

    const handleLoginData = (result: any) => {
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
            onReceive(true)
        }
    )
}


    const fbData = () => {
        signInWithPopup(auth, provider).then((result) => {
            handleLoginData(result)
        })
    }

    return (
        <button onClick={() => fbData()}>Logar com facebook</button>
    )
}



export default Login






