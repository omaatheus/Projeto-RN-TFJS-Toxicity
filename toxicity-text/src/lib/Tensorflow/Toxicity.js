import * as toxicity from '@tensorflow-models/toxicity';


export const toxicityLabels = [
  "identity_attack",
  "insult",
  "obscene",
  "severe_toxicity",
  "sexual_explicit",
  "threat",
  "toxicity",
];

export async function toxicityClassifier(sentenca) {
  const threshold = 0.9;
  const model = await toxicity.load(threshold, toxicityLabels)
  const sentences = [sentenca];
  const predictions = await model.classify(sentences)
  return predictions
  
}