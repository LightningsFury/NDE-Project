import { LocalStorageWorker } from "../store/StorageHelper";
import { User } from "../interfaces/user";

export class LeaderBoardStore {
  private readonly key: string = "leaderBoard";
  private store: LocalStorageWorker;
  constructor(private readonly currentUser: User) {
    this.store = new LocalStorageWorker();
  }
  private readonly register = () => {
    this.defaultStore();
    const currentLeaderBoard: User[] = JSON.parse(
      this.store.get(this.key) || "[]"
    );
    const isUserExistant = currentLeaderBoard.some(
      (v: User) => v.username === this.currentUser.username
    );
  };
  private readonly defaultStore = () => {
    if (!this.store.get(this.key)) this.store.add(this.key, JSON.stringify([]));
  };
}
