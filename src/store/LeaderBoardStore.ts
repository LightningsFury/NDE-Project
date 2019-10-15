import { LocalStorageWorker } from "../store/StorageHelper";
import { User } from "../interfaces/user";

export class LeaderBoardStore {
  private readonly key: string = "leaderBoard";
  private store: LocalStorageWorker;
  constructor(private readonly currentUser: User) {
    this.store = new LocalStorageWorker();
  }
  public readonly register = () => {
    this.defaultStore();
    const currentLeaderBoard: User[] = JSON.parse(
      this.store.get(this.key) || "[]"
    );
    const isUserExistant = LeaderBoardStore.getUserIndex(
      currentLeaderBoard,
      this.currentUser
    );
    if (typeof isUserExistant === "number") {
      const index = isUserExistant;
      currentLeaderBoard[index] = this.currentUser;
    } else currentLeaderBoard.push(this.currentUser);
    return this.store.add(this.key, JSON.stringify(currentLeaderBoard));
  };
  // if the user already exists in the leaderboards, return the index where it exists; else return false;
  private static getUserIndex(lb: User[], currentUser: User): number | boolean {
    let index: boolean | number = false;
    console.log(lb);
    lb.forEach((v: User, i: number) => {
      console.log(v.username, currentUser.username);
      if (index) return;
      if (v.username === currentUser.username) return (index = i);
    });
    return index;
  }
  public readonly getUsers = (): User[] =>
    JSON.parse(this.store.get(this.key) as string);
  private readonly defaultStore = () => {
    if (!this.store.get(this.key)) this.store.add(this.key, JSON.stringify([]));
  };
}
