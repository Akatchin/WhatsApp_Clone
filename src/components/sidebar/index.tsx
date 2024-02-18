import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { ChatListItem } from '../chatlistitem';

import { useState } from 'react';

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
import { loginData } from '../../redux/sliceLogin';
import { NewChat } from '../newchat';
import Login from '../../login';

export const SideBar = () => {

    const [chatlist, setChatList] = useState([
        
    ])

    const [showNewChat, setShowNewChat] = useState(false)
    const [thisLogin, setThisLogin] = useState(false)
    const handleNewChat = () => {
        setShowNewChat(true)
    }

    const {user} = useSelector(chatActive)
    const {userLogged} = useSelector(loginData)

    const dispatch = useDispatch()

    const activeChat = (key: object) => {
        dispatch(enable(key))
        setChatList([])
    }

    if(thisLogin !== true) {
        return (
            <Login onReceive={setThisLogin}/>
        )
    }
    else {
        return (
            <SideArea>
                <NewChat
                    chatlist={""}
                    user={user}
                    show={showNewChat}
                    setShow={setShowNewChat}
                />
                <Header>
                    <Image src={userLogged.avatar}/>
                    <HeaderButtons>
                        <HeaderButton>
                            <DonutLargeIcon style={{ color: '#919191' }} />
                        </HeaderButton>
                        <HeaderButton onClick={handleNewChat}>
                            <ChatIcon style={{ color: '#919191' }} />
                        </HeaderButton>
                        <HeaderButton>
                            <MoreVertIcon style={{ color: '#919191' }} />
                        </HeaderButton>
                    </HeaderButtons>
                </Header>
                <Search>
                    <SearchArea>
                        <SearchIcon fontSize='small' style={{ color: '#919191' }} />
                        <SearchInput type='search' placeholder='Procurar ou começar uma nova conversa' />
                    </SearchArea>
                </Search>
                <ChatArea>
                    {chatlist.map((item, key) => (
                        <ChatListItem
                            key={key}
                            data={item}
                            active={user.id == chatlist[key]/*.chatId*/}
                            onClick={() => activeChat(chatlist[key])}
                        />
                    ))}
                </ChatArea>
            </SideArea>
        )
    }
    }
