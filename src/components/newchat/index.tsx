import { useEffect, useState } from "react";
import { NewChatBackButton, NewChatHead, NewChatHeadTitle, NewChatItem, NewChatItemImg, NewChatItemName, NewChatList, NewChatMain } from "./styled"
import { newChatType } from "../../type";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const NewChat = ({user, chatlist, show, setShow}: newChatType) => {

    const [list, setList] = useState([
        {id: 123, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmVZ8DOOE0zspKF0OQf02HuVrna3NKt-tBA&usqp=CAU", name: "Thiago"},
        {id: 123, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmVZ8DOOE0zspKF0OQf02HuVrna3NKt-tBA&usqp=CAU", name: "Thiago"},
        {id: 123, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmVZ8DOOE0zspKF0OQf02HuVrna3NKt-tBA&usqp=CAU", name: "Thiago"},
        {id: 123, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmVZ8DOOE0zspKF0OQf02HuVrna3NKt-tBA&usqp=CAU", name: "Thiago"},
        {id: 123, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmVZ8DOOE0zspKF0OQf02HuVrna3NKt-tBA&usqp=CAU", name: "Thiago"},
        {id: 123, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmVZ8DOOE0zspKF0OQf02HuVrna3NKt-tBA&usqp=CAU", name: "Thiago"},
        {id: 123, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmVZ8DOOE0zspKF0OQf02HuVrna3NKt-tBA&usqp=CAU", name: "Thiago"}
    ])


    const handleClose = () => {
        setShow(false)
        user
        chatlist
    }

    useEffect(() => {
        setList([
            {id: 123, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmVZ8DOOE0zspKF0OQf02HuVrna3NKt-tBA&usqp=CAU", name: "Thiago"},
            {id: 123, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmVZ8DOOE0zspKF0OQf02HuVrna3NKt-tBA&usqp=CAU", name: "Thiago"},
            {id: 123, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmVZ8DOOE0zspKF0OQf02HuVrna3NKt-tBA&usqp=CAU", name: "Thiago"},
            {id: 123, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmVZ8DOOE0zspKF0OQf02HuVrna3NKt-tBA&usqp=CAU", name: "Thiago"},
            {id: 123, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmVZ8DOOE0zspKF0OQf02HuVrna3NKt-tBA&usqp=CAU", name: "Thiago"},
            {id: 123, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmVZ8DOOE0zspKF0OQf02HuVrna3NKt-tBA&usqp=CAU", name: "Thiago"},
            {id: 123, avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmVZ8DOOE0zspKF0OQf02HuVrna3NKt-tBA&usqp=CAU", name: "Thiago"}
        ])
    })

    return (
        <NewChatMain style={{left: show? 0: -415}}>
            <NewChatHead>
                <NewChatBackButton onClick={handleClose}>
                    <ArrowBackIcon style={{color: "#FFF"}}/>
                </NewChatBackButton>
                <NewChatHeadTitle>Nova conversa</NewChatHeadTitle>
            </NewChatHead>
            <NewChatList>  
                {list.map((item, key) => (
                    <NewChatItem key={key}>
                        <NewChatItemImg src={item.avatar} alt=""/>
                        <NewChatItemName>{item.name}</NewChatItemName>
                    </NewChatItem>
                ))}
            </NewChatList>
        </NewChatMain>
    )
} 