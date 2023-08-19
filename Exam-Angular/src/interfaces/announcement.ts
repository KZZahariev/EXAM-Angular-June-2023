import { IUser } from './user-id';

export interface Announcement {
  from: string;
  to: string;
  price: number;
  date: string;
  seats: number;
  description: string;
  subscribers: string;
  userId: IUser;
  created_at: string;
  updated_at: string;
  _id: string;
  _v: number;
}
