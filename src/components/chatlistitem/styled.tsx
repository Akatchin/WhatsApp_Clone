import styled from "styled-components"

export const ChatList = styled.div`
    &.chatListItem.active {
        background-color: #F5F5F5;
    }
    display: flex;
    cursor: pointer;
    align-items: center;
    height: 70px;
    &:hover {
       background-color: #F5F5F5 
    }
`;

export const ChatListAvatar = styled.img`
    width: 50x;
    height: 50px;
    border-radius: 50%;
    margin-left: 15px;
`;

export const ChatItemLines = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid #EEE;
    padding-right: 15px;
    margin-left: 15px;

    flex-wrap: wrap;
    min-width: 0;
`;

export const ChatItemLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const ChatListName = styled.div`
    font-size: 17px;
    color: #000;
`;

export const ChatListDate = styled.div`
    font-size: 12px;
    color: #999;
`;

export const ChatListLastMsg = styled.div`
    font-size: 14px;
    color: #999;
    display: flex;
    width: 100%;
`;

export const ChatListMessage = styled.p`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0;
`;