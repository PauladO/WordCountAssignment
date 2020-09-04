export class WordFrequency {

    constructor(private word: string, private frequency: number) { }

    public getFrequency(): number {
        return this.frequency;
    }

    public getWord(): string {
        return this.word;
    }
}