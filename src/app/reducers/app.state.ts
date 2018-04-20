import { User } from '../login/app.model';

export interface AppState {
  readonly user: User[];
}