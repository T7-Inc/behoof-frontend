import { IUser } from './IUser';

export interface IReview {
  id: number;
  user: IUser;
  date: string;
  rating: number;
  text: string;
}
