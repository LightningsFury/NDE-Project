import { LocalStorageWorker } from "../store/StorageHelper";
import { User } from "../interfaces/user";

// the store for the array of users which is used for the leader board.
export class LeaderBoardStore extends LocalStorageWorker {
  private readonly key: string = "leaderBoard";
  constructor(private readonly currentUser: User) {
    super()
  }
  // if the user is not already of the leader board, put them in
  public readonly register = () => {
    this.defaultStore();
    const currentLeaderBoard: User[] = JSON.parse(
      this.get(this.key) || "[]"
    );
    const isUserExistant = LeaderBoardStore.getUserIndex(
      currentLeaderBoard,
      this.currentUser
    );
    if (typeof isUserExistant === "number") {
      const index = isUserExistant;
      currentLeaderBoard[index] = this.currentUser;
    } else currentLeaderBoard.push(this.currentUser);
    return this.add(this.key, JSON.stringify(currentLeaderBoard));
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
  // the value in the database is a string, so it is turned into an array by parsing it
  public readonly getUsers = (): User[] =>
    JSON.parse(this.get(this.key) as string);
  private readonly defaultStore = () => {
    if (!this.get(this.key)) this.add(this.key, JSON.stringify([]));
  };
}
