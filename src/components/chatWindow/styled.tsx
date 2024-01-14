import styled from "styled-components"

export const Chat = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const Header = styled.div`
    height: 60px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Body = styled.div`
    flex: 1;
    overflow-y: auto;
    background-color: #E5DDD5;
    background-size: cover;
    backgrounnd-position: center;
    background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
    padding: 20px 30px;
    
    &::-webkit-scrollbar {
        width: 6px;
        height: 6px; 
     }
     &::-webkit-scrollbar-thumb {
         background-color: rgba(0, 0, 0, 0.2);
     }
`;

export const EmojiArea = styled.div`
    height: 200px;
    overflow-y: hidden;
    transition: all ease 0.3s;

    &.aside.emoji-picker-react{
        width: auto;
        background: none;

    }
    &.emoji-picker-react .emoji-group:before {
        background: none;
    }
`;

export const Footer = styled.div`
    height: 62px;
    display: flex;
    align-items: center;
`;

export const ChatPre = styled.div`
    display: flex;
    magin: 0 15px;
`;

export const ChatPos = styled.div`
    display: flex;
    margin: 0 15px;
`;

export const InputArea = styled.div`
    flex: 1;
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    border: 0;
    outline: 0;
    background-color: #FFF;
    border-radius: 20px;
    font-size: 15px;
    color: #4A4A4A;
    padding-left: 15px;
`;

export const HeaderInfo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 15px;
    margin-right: 15px;
`;

export const UserName = styled.div`
    font-size: 17px;
    color: #000;
`;

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 35px;
  justify-content: center;
`;

export const ChatButton = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
    transition: all ease 0.3s;
`;
