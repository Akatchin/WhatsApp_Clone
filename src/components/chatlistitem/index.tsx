import { ChatList, ChatItemLine, ChatItemLines, ChatListAvatar, ChatListDate, ChatListLastMsg, ChatListName, ChatListMessage } from "./styled";

export const ChatListItem = ({onClick, active, data}: any) => {

    return (
        <ChatList className={`chatListItem ${active? 'active': ''}`} onClick={onClick}>
            <ChatListAvatar src={data.image}/>
            <ChatItemLines>
                <ChatItemLine>
                    <ChatListName>{data.title}</ChatListName>
                    <ChatListDate>22:00</ChatListDate>
                </ChatItemLine>
                <ChatItemLine>
                    <ChatListLastMsg>
                        <ChatListMessage>
                            Opa, tudo bem?
                        </ChatListMessage>
                    </ChatListLastMsg>
                </ChatItemLine>
            </ChatItemLines>
        </ChatList>
    )
}