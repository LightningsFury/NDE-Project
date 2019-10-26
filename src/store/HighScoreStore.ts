import { LocalStorageWorker } from "../store/StorageHelper";

// a class that extends the LocalStorageWorker and independantly manages the the storage of a user's high score which mimics the behaviour of database tables in SQL.
export class HighScoreStore extends LocalStorageWorker {
  private readonly partialKey: string = "highScore";
  private key: string;
  constructor(private score: number, private username: string) {
    super()
    // creates the key using the username
    this.key = `${this.partialKey}-${this.username}`;
  }
  private highScore: number | undefined;
  // if the previous high score exists, turn it into an integer, else make it 0. 
  // Then, if the current high score is higher than the previous high score (which it will be if it didn't exist and became 0)
  // replace the local storage key with the new value and return it
  public readonly getHighScore = (): number | undefined => {
    const previousHighScore = this.get(this.key);
    if (previousHighScore) this.highScore = parseInt(previousHighScore);
    else this.highScore = 0;

    if (this.score > (this.highScore as number)) {
      this.add(this.key, JSON.stringify(this.score));
      this.highScore = this.score;
    }

    return this.highScore;
  };
}
