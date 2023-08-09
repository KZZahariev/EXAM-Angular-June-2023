import { IUser } from './user-id';

export interface Announcement {
//   announcementName: string;
  from: string;
  to: string;
  price: number;
  date: string;
  seats: number;
  description: string;
  subscribers: string;
  userId: IUser;
  posts: any; //string[] | IPost;
  created_at: string;
  updated_at: string;
  _id: string;
  _v: number;
}
