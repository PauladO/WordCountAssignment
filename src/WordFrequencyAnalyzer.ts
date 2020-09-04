import { WordFrequency } from "./WordFrequency";

export class WordFrequencyAnalyzer {
  public calculateHighestFrequency(text: string): number {
    const mostFrequentWordArray = this.calculateMostFrequentNWords(text, 1);

    return mostFrequentWordArray[0].getFrequency();
  }

  public calculateFrequencyForWord(text: string, word: string): number {
    const textArray: string[] = this.getStringArray(text);

    const matches = textArray.filter((sequence: string) => {
      return sequence.toLowerCase() === word.toLowerCase();
    });

    return matches.length;
  }

  public calculateMostFrequentNWords(text: string, n: number): WordFrequency[] {
    const wordFrequencies = this.getWordFrequencies(text);
    const sorted = wordFrequencies.sort((a: WordFrequency, b: WordFrequency) => a.getFrequency() > b.getFrequency() ? -1 : a.getFrequency() < b.getFrequency() ? 1 : 0);
    
    return sorted.splice(0, n);
  }

  private getWordFrequencies(text: string): WordFrequency[] {
    if (text.length === 0) {
      throw new Error('String cannot be empty');
    }

    const uniqueWords = this.getUniqueWords(text);
    const frequencies: WordFrequency[] = [];

    uniqueWords.forEach((word: string) => {
      frequencies.push(
        new WordFrequency(
            word,
            this.calculateFrequencyForWord(text, word)
          )
        );
    });

    return frequencies;
  }

  private getStringArray(text: string): string[] {
    return text.split(/\W+/).map((word: string) => word.toLowerCase());
  }

  private getUniqueWords(text: string): string[] {
    return this.getStringArray(text)
              .filter((word: string, index: number, self: string[]) => {
                return self.indexOf(word) === index;
              });
  }
}