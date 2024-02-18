import { SetStateAction } from "react"
import { OperationType, User } from "firebase/auth";

interface UserCredential {
    operationType: (typeof OperationType)[keyof typeof OperationType];
    providerId: string | null;
    user: User;
}

type propsType = {
    auth: {
        id: number,
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
        providerData: [{uid: string}]
    },
    credential: UserCredential
}

type userType = {
    id: string,
    avatar: string,
    name: string
}

export {propsType, receive, DataType, userType}