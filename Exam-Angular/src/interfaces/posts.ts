import { Announcement } from "./announcement";
import { IUser } from "./user-id";

export interface IPost {
  _id: string;
  from: string;
  to: string;
  price: number;
  date: string;
  seats: string;
  description: string;
  likes: string[];
  userId: IUser;
  announcementId: Announcement;
  created_at: string;
  updatedAt: string;
  __v: number;
}