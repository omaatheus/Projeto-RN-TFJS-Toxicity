import * as toxicity from '@tensorflow-models/toxicity';

export const toxicityClassifier = async (text) => { 
  const threshold = 0.67;
  const toxicityLabels = [
    "identity_attack",
    "insult",
    "obscene",
    "severe_toxicity",
    "sexual_explicit",
    "threat",
    "toxicity",
  ];

  const model = await toxicity.load(threshold);
  console.log(model)
  const sentences = [text]; 
  console.log(sentences);

  return model.classify(sentences); //retorna a promessa diretamente
};

