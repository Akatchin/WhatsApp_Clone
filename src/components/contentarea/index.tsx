import { ChatH1, ChatH2, ChatIntro, Content, Image } from "./styles"
import { useSelector } from "react-redux";
import { chatActive } from "../../redux/sliceActive";
import { ChatWindow } from "../chatWindow";
import { chatAuth } from "../../redux/sliceAuth";

export const ContentArea = () => {
    const {user} = useSelector(chatActive)
    const {authData} = useSelector(chatAuth)
    
    return (
        <Content>
            {user.chatId !== undefined &&
                <ChatWindow
                    auth={authData}
            />
            }
            {user.chatId === undefined &&
                <ChatIntro>
                    <Image src="https://whatsapp-clone-web.netlify.app/static/media/intro-connection-light.5690d473.jpg"/>
                        <ChatH1>Mantenha seu celular conectado</ChatH1>
                    <ChatH2>
                        O WhatsApp contecta ao seu telefone para sincronizar suas mensagens.<br/>
                        Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.
                    </ChatH2>
                </ChatIntro>
            }
        </Content>
    )
}