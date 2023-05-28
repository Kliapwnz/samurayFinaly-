export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCounter: number
}
export type ProfilePageType = {
    posts: PostType[]
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type SidebarType = {}

export type RootStatType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}


export let state: RootStatType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hello! This is my first post", likesCounter: 6},
            {id: 2, message: "How are you, guys?", likesCounter: 12},
            {id: 3, message: "I try to learn js!", likesCounter: 88},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Evgeniy"},
            {id: 2, name: "Anastasiya"},
            {id: 3, name: "Yuri"},
            {id: 4, name: "Elena"},
            {id: 5, name: "Kristina"},
            {id: 6, name: "Kevin"},
        ],
        messages: [
            {id: 1, message: "Hi!"},
            {id: 2, message: "Do you play football?"},
            {id: 3, message: "How long?"},
        ]
    },
    sidebar: {}
}