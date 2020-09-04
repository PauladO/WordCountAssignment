import { WordFrequency } from './WordFrequency';

export class WordFrequencyAnalyzer {
  /**
   * Calculates the frequency of the given word in the text.
   * @param text the provided text
   * @param word the word of which to find the frequency
   */
  public calculateFrequencyForWord(text: string, word: string): number {
    const textArray: string[] = this.getStringArray(text);

    const matches = textArray.filter((sequence: string) => {
      return sequence.toLowerCase() === word.toLowerCase();
    });

    return matches.length;
  }

  /**
   * Calculates the frequency of the most common word in the text.
   * @param text the provided text
   */
  public calculateHighestFrequency(text: string): number {
    const mostFrequentWordArray = this.calculateMostFrequentNWords(text, 1);

    return mostFrequentWordArray[0].getFrequency();
  }

  /**
   * Gets WordFrequency objects, with word and frequency, for an n number of most common words in the text
   * @param text the provided text
   * @param n the number of most common words to be returned as a WordFrequency object
   */
  public calculateMostFrequentNWords(text: string, n: number): WordFrequency[] {
    const wordFrequencies = this.getWordFrequencies(text);
    const sorted = wordFrequencies.sort((a: WordFrequency, b: WordFrequency) =>
                        a.getFrequency() > b.getFrequency() ? -1 : a.getFrequency() < b.getFrequency() ? 1 : 0);

    return sorted.splice(0, n);
  }

  /**
   * Splits the provided text into an array of lower case words
   * @param text the provided text
   */
  private getStringArray(text: string): string[] {
    return text.split(/\W+/).map((word: string) => word.toLowerCase());
  }

  /**
   * Returns an array of unique lower case words from the text
   * @param text the provided text
   */
  private getUniqueWords(text: string): string[] {
    return this.getStringArray(text)
              .filter((word: string, index: number, self: string[]) => {
                return self.indexOf(word) === index;
              });
  }

  /**
   * Returns an array of WordFrequency objects for each unique word in the text,
   * with word and frequency
   * @param text the provided text
   */
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
}
