import { Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import styles from '../../components/styles/Home/Home';
import { useState } from 'react';
import { toxicityClassifier } from '../../lib/Tensorflow/Toxicity';
import mensagensDeAvisoDicionario from '../../lib/utils/mensagensDeAvisoDicionario';

export default function Home() {
  const [text, setText] = useState('');
  const [toxicityResults, setToxicityResults] = useState([]);
  const [textHistory, setTextHistory] = useState([]);

  const TextClassifier = async () => {
    if (text.trim() !== '') {
      const predictions = await toxicityClassifier(text);
      const toxicPredictions = predictions.filter(p => p.results[0].match);

      const results = toxicPredictions.map(prediction => ({
        label: prediction.label,
        message: mensagensDeAvisoDicionario[prediction.label] || 'Conteúdo potencialmente problemático.'
      }));

      setToxicityResults(results);
      setTextHistory([text, ...textHistory]);
    }
  };

  return (
    <View style={styles.container}>
      {/* mensagem condicional exibirá caso não houver resultados */}
      {toxicityResults.length === 0 ? (
        <Text style={styles.toxicitytext}>Verifique a agressividade de seu texto</Text>
      ) : (


        console.log("toxicityResults:", toxicityResults),
        console.log("textHistory:", textHistory),


        <>
          {/* lista os resultados da classificação, apenas se houver resultados */}
          <FlatList 
            data={toxicityResults}
            renderItem={({ item }) => <Text style={styles.toxicText}>{item.message}</Text>}
            keyExtractor={(item, index) => index.toString()}
          />

          {/* lista o histórico de textos digitados, entretanto apenas se houver resultados */}
          <FlatList 
            data={textHistory}
            renderItem={({ item }) => <Text style={styles.historyItem}>{item}</Text>}
            keyExtractor={(item, index) => index.toString()}
          />
        </>
      )}

      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Digite aqui..."
        placeholderTextColor="#fff"
      />

      <TouchableOpacity onPress={TextClassifier}>
        <Text style={[styles.button, { textAlign: 'center', textAlignVertical: 'center' }]}>
          Verificar
        </Text>
      </TouchableOpacity>
    </View>
  );
}