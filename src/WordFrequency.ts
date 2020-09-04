export class WordFrequency {

    constructor(private word: string, private frequency: number) { }

    public getWord(): string {
        return this.word;
    }

    public getFrequency(): number {
        return this.frequency;
    }
}