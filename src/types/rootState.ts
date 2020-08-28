import { Repo } from './repo';

export interface RootState {
  repos: {
    data: Repo[];
    error: string | null;
    loading: boolean;
  };
}
