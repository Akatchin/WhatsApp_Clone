import { MessageLine, MessageItem, MessageText, MessageDate } from "./styled"

type DataObject = {
    data: {
        author: string,
        body: string
    },
    user: {
        id: string;
        avatar: string,
        name: string
    }
}

export const Message = ({data, user}: DataObject) => {

    console.log(data)

    return (
        <MessageLine style={{justifyContent: user.id === data.author ? "flex-end" : "flex-start" }} >
            <MessageItem style={{backgroundColor: user.id === data.author ? "#DCF8C6" : "#FFF" }}>
                <MessageText>
                    {data.body}
                </MessageText>
                <MessageDate>
                    19:00
                </MessageDate>
            </MessageItem>
        </MessageLine>
    )
}