import {useRef} from "react";

import { 
    Chat, Body,
    Footer, Header, 
    HeaderInfo, Avatar, 
    UserName, ChatButton, 
    HeaderButtons, ChatPre, 
    InputArea, ChatPos, 
    Input, EmojiArea,
} from "./styled"

import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';

import EmojiPicker from "emoji-picker-react";
import { useSelector } from "react-redux";
import { chatActive } from "../../redux/sliceActive";
import { useState, useEffect } from "react";
import { Message } from "../messageItem";
import { propsType } from "../../type";


export const ChatWindow = ({auth}: propsType) => {
    
    const body = useRef<HTMLInputElement| null>(null)

    const [emojiOpen, setEmojiOpen] = useState(false)
    const [text, setText] = useState("")
    const [listening, setListening] = useState(false)

    const [list, setList] = useState([
        {author: "1234", body: "bla bla bla bla"},
        {author: "1234", body: "bla bla bla bla"},
        {author: "123", body: "bla bla bla"}
    ])

    useEffect(() => {
        if(body.current !== null) {
            if(body.current.scrollHeight > body.current.offsetHeight) {
                body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight        
        }
        }
    }, [list])

    const handleMicClick = () => {    
    
    let recognition = null

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

    if(SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition()
    }
    console.log(recognition)
        if(recognition !== null){
            recognition.onstart = () => {
                setListening(true)
            }
            recognition.onend = () => {
                setListening(false)
            }
            recognition.onresult = (e) => {
                setText(e.results[0][0].transcript)
                console.log(text)
            }
            recognition.start()
         }
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true)
    }

    const handleCloseEmoji = () => {
        setEmojiOpen(false)
    }
    
    const handleSendClick = () => {
        setList([])
    }

    const { user } = useSelector(chatActive)

    return (
        <Chat>
            <Header>
                <HeaderInfo>
                    <Avatar src={user.avatar} />
                    <UserName>
                        Thiago
                    </UserName>
                </HeaderInfo>
                <HeaderButtons>
                    <ChatButton>
                        <SearchIcon style={{ color: "#919191" }} />
                        <AttachFileIcon style={{ color: "#919191" }} />
                        <MoreVertIcon style={{ color: "#919191" }} />
                    </ChatButton>
                </HeaderButtons>

            </Header>
            <Body ref={body}>
                {
                list.map((item, key) => (
                    <Message
                        key={key}
                        data={item}
                        user={auth}
                    />
                ))}
            </Body>
            <EmojiArea style={{height: emojiOpen ? '200px': '0'}}>
                <EmojiPicker
                    style={{width: 'auto'}}
                    onEmojiClick={(e) => setText(text+e.emoji)}
                    searchDisabled
                    skinTonesDisabled
                />
                </EmojiArea>
            <Footer>
                <ChatPre>
                    <ChatButton
                        onClick={handleOpenEmoji}>
                        <InsertEmoticonIcon style={{ color: emojiOpen? "#009688" : "#919191" }} /> 
                    </ChatButton>
                    <ChatButton
                        onClick={handleCloseEmoji}
                        style={{width: emojiOpen ? "40px" : "0"}}    
                    >
                        <CloseIcon style={{ color: "#919191" }} /> 
                    </ChatButton>
                </ChatPre>
                <InputArea>
                    <Input 
                    type="text"
                    placeholder="Digite uma mensagem"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    />
                </InputArea>
                <ChatPos>
                    {text === '' && 
                    <ChatButton onClick={handleMicClick}>
                        <MicIcon style={{ color: listening ? "#126ECE" : "#919191" }} />
                    </ChatButton>
                    }
                    {text !== "" &&
                    <ChatButton onClick={handleSendClick}>
                        <SendIcon style={{ color: "#919191" }} />
                    </ChatButton>
                    }
                </ChatPos>
            </Footer>
        </Chat>
    )
}