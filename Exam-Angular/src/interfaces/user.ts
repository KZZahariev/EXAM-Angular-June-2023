import { IUser } from "./user-id";

export interface User {
    username:string;
    email: string;
    userId: IUser;
    announcements: any//IUser
    created_at: string;
    updated_at: string;
    _id: string;
    _v: number;
}