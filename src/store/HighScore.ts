import { LocalStorageWorker } from '../store/StorageHelper'

export class HighScoreStore {
    private readonly key: string = 'highScore';
    private store: LocalStorageWorker;
    constructor(private score: number) {
        this.store = new LocalStorageWorker();
    };
    private highScore: number | undefined
    public readonly getHighScore = (): number | undefined  => {
        const previousHighScore = this.store.get(this.key);
        if (previousHighScore) this.highScore = parseInt(previousHighScore);
        else this.highScore = 0;
        
        if (this.score > (this.highScore as number)) {
            this.store.add(this.key, JSON.stringify(this.score));
            this.highScore = this.score;
        }

        return this.highScore
    }
}