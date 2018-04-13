import { Message } from "./Messages.interface";

export class ChatRoom {

    public chatName: string;
    public numberOfUsers: number;
    private _messages: Array<Message>;
    
    constructor(chatName:string, numberOfUsers?:number) {
        this._messages = [];
        this.chatName = chatName || "New Room";
    }

    get messages(){
        return this._messages;
    }

    addMessage(message:Message) {
        console.log(message);
        this._messages.push(message);
    }

}