import { WordFrequencyAnalyzer } from '../src/WordFrequencyAnalyzer';
import { testText1, testText2, testText3 } from './testText';
import { WordFrequency } from '../src/WordFrequency';

describe('WordFrequencyAnalyzer', () => {
  const wordFrequencyAnalyzer = new WordFrequencyAnalyzer();

  describe('calculateFrequencyForWord', () => {
    it('returns the correct word count for the given word in the text', () => {
      let frequency: number = wordFrequencyAnalyzer.calculateFrequencyForWord(testText1, 'motorcycles');

      expect(frequency).toBe(1);

      frequency = wordFrequencyAnalyzer.calculateFrequencyForWord(testText1, 'the');
      expect(frequency).toBe(29);

      frequency = wordFrequencyAnalyzer.calculateFrequencyForWord(testText1, 'this');
      expect(frequency).toBe(6);

      frequency = wordFrequencyAnalyzer.calculateFrequencyForWord(testText1, 'film');
      expect(frequency).toBe(3);

      frequency = wordFrequencyAnalyzer.calculateFrequencyForWord(testText1, 'can');
      expect(frequency).toBe(12);
    });
  });

  describe('calculateMostFrequentNWords', () => {
    it('returns an array of WordFrequency objects for the n most frequent words in testText1', () => {
      let wordFrequencies: WordFrequency[] = wordFrequencyAnalyzer.calculateMostFrequentNWords(testText1, 3);
      
      expect(wordFrequencies[0].getWord()).toBe('you');
      expect(wordFrequencies[0].getFrequency()).toBe(42);

      expect(wordFrequencies[1].getWord()).toBe('i');
      expect(wordFrequencies[1].getFrequency()).toBe(33);

      expect(wordFrequencies[2].getWord()).toBe('the');
      expect(wordFrequencies[2].getFrequency()).toBe(29);
    });

    it('returns an array of WordFrequency objects for the n most frequent words in testText3', () => {
      let wordFrequencies: WordFrequency[] = wordFrequencyAnalyzer.calculateMostFrequentNWords(testText3, 3);
      
      expect(wordFrequencies[0].getWord()).toBe('word');
      expect(wordFrequencies[0].getFrequency()).toBe(3);

      expect(wordFrequencies[1].getWord()).toBe('text');
      expect(wordFrequencies[1].getFrequency()).toBe(2);

      expect(wordFrequencies[2].getWord()).toBe('test');
      expect(wordFrequencies[2].getFrequency()).toBe(1);
    });

    it('returns only the number of unique words when a number higher than that is given', () => {
      let wordFrequencies: WordFrequency[] = wordFrequencyAnalyzer.calculateMostFrequentNWords(testText3, 4);

      expect(wordFrequencies.length).toBe(3);
    });
  });

  describe('calculateHighestFrequency', () => {
    it('returns the frequency of the most frequent word', () => {
      let highestFrequency: number = wordFrequencyAnalyzer.calculateHighestFrequency(testText3);

      expect(highestFrequency).toBe(3);

      highestFrequency = wordFrequencyAnalyzer.calculateHighestFrequency(testText1);
      expect(highestFrequency).toBe(42);
    });

    it('throws error if no string is provided', () => {

      try {
        wordFrequencyAnalyzer.calculateHighestFrequency('');
        // Fail test if above expression doesn't throw anything.
        expect(true).toBe(false);
      } catch (e) {
          expect(e.message).toBe('String cannot be empty');
      }
    });
  });
});
