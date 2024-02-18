import { SetStateAction } from "react"
import { OperationType, User } from "firebase/auth";

type propsType = {
    auth: {
        id: string,
        avatar: string,
        name: string
    },
}

type receive = {
    onReceive : SetStateAction
}

type DataType = {
    user: {
        uid: string,
        displayName: string,
        avatar: string,
        providerData: [{uid: string}], 
    },
   
}

type userType = {
    id: string,
    avatar: string,
    name: string
}

type newChatType = {
    user: {
        id: string,
        name: string,
        avatar: string
    }, 
    chatlist: string, 
    show: SetStateAction, 
    setShow: SetStateAction
}

export {propsType, receive, DataType, userType, newChatType}