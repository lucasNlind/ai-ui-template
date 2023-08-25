import { ChatBubbleAuthor } from "../../../enums/chat-bubble-author.enum";

export type Message = {
    id: string;
    content: string;
    author: ChatBubbleAuthor;
}