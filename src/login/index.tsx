import api from "../api"
import "./styles.css"

export const Login = () => {
    const handleFacebookLogin = async () => {
        const result = await api.fbPopup;
        if(result) {

        } else {
            alert("Erro!")
        }
    }

    return (
        <div className="login">
            <button onClick={handleFacebookLogin}>Logar com Facebook</button>
        </div>
    )
}