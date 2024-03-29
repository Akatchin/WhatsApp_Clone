import styled from "styled-components";

export const NewChatMain = styled.div`
    width: 35%;
    max-width: 415px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #DDD;
    transition: all ease 0.5s;
`;

export const NewChatHead = styled.div`
    display: flex;
    background-color: #00BFA5;
    align-items: center;
    padding: 60px 15px 15px 15px;
`;

export const NewChatList = styled.div`
    flex: 1;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 6px;
        height: 6px; 
     }
     &::-webkit-scrollbar-thumb {
         background-color: rgba(0, 0, 0, 0.2);
     }
`;

export const NewChatBackButton = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const NewChatHeadTitle = styled.div`
    font-size: 19px;
    height: 40px;
    line-height: 40px;
    flex: 1;
    font-weight: bold;
    color: #FFF;
    margin-left: 20px;
`;

export const NewChatItem = styled.div`
     display: flex;
     align-items: center;
     padding: 15px;
     cursor: pointer;
     &:hover {
        background-color: #F5F5F5;
     }
`;

export const NewChatItemImg = styled.img`
     width: 50px;
     height: 50px;
     border-radius: 50%;
     margin-right: 15px;
`;

export const NewChatItemName = styled.div`
     font-size: 17px;
     color: #000;
`;