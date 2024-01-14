import styled from "styled-components"

export const SideArea = styled.div`
    width: 35%;
    max-width: 415px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #DDD;
`;

export const Header = styled.header`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
`;

export const Image = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
`;

export const HeaderButtons = styled.div`
    display: flex;
`;

export const HeaderButton = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const Search = styled.div`
    background-color: #F6F6F6;
    border-bottom: 1px solid #EEE;
    padding: 5px 15px
`;

export const SearchArea = styled.div`
    background-color: #FFF;
    height: 40px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 0 10px;
`;

export const SearchInput = styled.input`
    flex: 1;
    border: 0;
    outline: 0;
    background-color: transparent;
    margin-left: 10px;
`;

export const ChatArea = styled.div`
    flex: 1;
    background-color: #FFF;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 6px;
        height: 6px; 
     }
     &::-webkit-scrollbar-thumb {
         background-color: rgba(0, 0, 0, 0.2);
     }
`;
