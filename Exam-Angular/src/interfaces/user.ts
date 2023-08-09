import { IUser } from "./user-id";

export interface User {
    username:string;
    email: string;
    userId: IUser;
    posts: any; //string[] | IPost;
    created_at: string;
    updated_at: string;
    _id: string;
    _v: number;
}