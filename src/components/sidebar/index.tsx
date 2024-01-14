import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { ChatListItem } from '../chatlistitem';


import { useEffect, useState } from 'react';

import { 
        Header, 
        HeaderButton, 
        HeaderButtons, 
        Image, 
        Search, 
        SearchArea, 
        SearchInput,
        SideArea,
        ChatArea
    } from "./styles"

import { useDispatch, useSelector } from 'react-redux';
import { chatActive, enable } from '../../redux/sliceActive';
import { chatAuth, userAuth } from '../../redux/sliceAuth';
import { NewChat } from '../newchat';

export const SideBar = () => {

    const [chatlist, setChatList] = useState([
        {chatId: 1, title: "Fulano", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmVZ8DOOE0zspKF0OQf02HuVrna3NKt-tBA&usqp=CAU" },
        {chatId: 2, title: "Fulano", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmVZ8DOOE0zspKF0OQf02HuVrna3NKt-tBA&usqp=CAU" },
        {chatId: 3, title: "Fulano", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmVZ8DOOE0zspKF0OQf02HuVrna3NKt-tBA&usqp=CAU" }
    ])

    const [author, setAuthor] = useState({
        id: 1234,
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmVZ8DOOE0zspKF0OQf02HuVrna3NKt-tBA&usqp=CAU" ,
        name: "Thiago Henrique"
    })

    const [showNewChat, setShowNewChat] = useState(false)
    const handleNewChat = () => {
        setShowNewChat(true)
    }

    const {authData} = useSelector(chatAuth)
    const {user} = useSelector(chatActive)

    const dispatch = useDispatch()

    const activeChat = (key: object) => {
        dispatch(enable(key))
    }

    useEffect(() => {
        dispatch(userAuth(author))
    },[])
    

    return(
        <SideArea>
            <NewChat
                chatlist={""}
                user={user}
                show={showNewChat}
                setShow={setShowNewChat} 
            />
            <Header>
                <Image src={authData.avatar}/>
                <HeaderButtons>
                    <HeaderButton>
                        <DonutLargeIcon style={{color: '#919191'}}/>
                    </HeaderButton>
                    <HeaderButton onClick={handleNewChat}>
                        <ChatIcon style={{color: '#919191'}}/>
                    </HeaderButton>
                    <HeaderButton>
                        <MoreVertIcon style={{color: '#919191'}}/>
                    </HeaderButton>
                </HeaderButtons>
            </Header>
            <Search>
                <SearchArea>
                    <SearchIcon fontSize='small' style={{color: '#919191'}}/>
                    <SearchInput type='search' placeholder='Procurar ou começar uma nova conversa'/>
                </SearchArea>
            </Search>
            <ChatArea>
            {chatlist.map((item, key) => (
                <ChatListItem
                    key={key}
                    data={item} 
                    active={user.chatId == chatlist[key].chatId}
                    onClick={() => activeChat(chatlist[key])}
                />
            ))}
            </ChatArea>
        </SideArea>
    )
}