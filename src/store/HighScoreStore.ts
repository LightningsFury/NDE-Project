import { LocalStorageWorker } from "../store/StorageHelper";

export class HighScoreStore {
  private readonly partialKey: string = "highScore";
  private key: string;
  private store: LocalStorageWorker;
  constructor(private score: number, private username: string) {
    this.store = new LocalStorageWorker();
    this.key = `${this.partialKey}-${this.username}`;
  }
  private highScore: number | undefined;
  public readonly getHighScore = (): number | undefined => {
    const previousHighScore = this.store.get(this.key);
    if (previousHighScore) this.highScore = parseInt(previousHighScore);
    else this.highScore = 0;

    if (this.score > (this.highScore as number)) {
      this.store.add(this.key, JSON.stringify(this.score));
      this.highScore = this.score;
    }

    return this.highScore;
  };
}
