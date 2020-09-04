import { Router } from 'express';
import { WordFrequencyAnalyzer } from '../WordFrequencyAnalyzer';

const wordFrequencyRouter = Router();
const wordFrequencyAnalyzer = new WordFrequencyAnalyzer();

wordFrequencyRouter.get('/', (request, response) => {
  return response.json("OK");
});

wordFrequencyRouter.post('/getHighestFrequency', (request, response) => {
  const frequency = wordFrequencyAnalyzer.calculateHighestFrequency(request.body.text)
  return response.json(frequency);
});

wordFrequencyRouter.post('/getMostFrequentNWords', (request, response) => {
  const mostFrequentWords = wordFrequencyAnalyzer.calculateMostFrequentNWords(request.body.text, request.body.n)
  return response.json(mostFrequentWords);
});

wordFrequencyRouter.post('/getFrequencyForWord', (request, response) => {
  const frequency = wordFrequencyAnalyzer.calculateFrequencyForWord(request.body.text, request.body.word)
  return response.json(frequency);
});

export default wordFrequencyRouter;
