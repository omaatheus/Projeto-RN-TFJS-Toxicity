import { Text, View, FlatList, StatusBar } from 'react-native'; 
import styles from '../../components/styles/Home/Home'; 
import { useState } from 'react'; 
import { toxicityClassifier } from '../../lib/Tensorflow/Toxicity'; 
import enciclopedia from '../../lib/utils/enciclopedia'; 
import ButtonVerify from '../../components/Button/ButtonVerify'; 
import { ListItem } from '../../components/FlatListMelhor/ListFlat'; 
import InputText from '../../components/InputTextFoda/InputText'; 


export default function Home() {

  const [EstaVerificando, setEstaVerificando] = useState(false); 
  const [warnMessage, setWarnMessage] = useState("Verifique a agressividade do seu texto 😆");
  const [valorText, setValorText] = useState('');
  const [itens, setItens] = useState([]);

  //função para adicionar um novo item à lista
  const addItem = async () => {
    setEstaVerificando(true); //inicia a verificação de toxicidade
    const predictions = await toxicityClassifier(valorText);


    const labelMaisProvavel = { //encontra a predição de maior probabilidade (excluindo toxicidade geral)
      label: null,
      probabilidade: 0
    };

    predictions.forEach(prediction => { //ignora a predição geral de toxicidade
      if (prediction.label == "toxicity") { 
        return; 
      }

      const probPredTrue = prediction.results[0].probabilities[1]; //probabilidade da predição ser verdadeira

      if (probPredTrue > labelMaisProvavel.probabilidade) {
        labelMaisProvavel.label = prediction.label;
        labelMaisProvavel.probabilidade = probPredTrue;
      }
    });

    //define a mensagem de aviso com base na predição mais provável
    if (labelMaisProvavel.probabilidade > 0.01) { //se a probabilidade for alta o suficiente
      setWarnMessage(enciclopedia[labelMaisProvavel.label]); //usa a mensagem do dicionário
    } else {
      setWarnMessage("Seu texto não é tóxico. ✨"); //mensagem para texto não tóxico
    }


    //adiciona o texto à lista se não for vazio
    if (valorText.trim() !== '') {
      setItens([...itens, valorText]); //desestrutura e cria uma nova lista com o novo item
      setValorText(''); //limpa o input de texto
    }

    setEstaVerificando(false);
  };


  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" /> 

      <FlatList 
        data={itens}
        renderItem={({ item }) => <ListItem item={item} />} 
        keyExtractor={(item) => item} 
        ListHeaderComponent={
          <View>
            <Text style={styles.textEmptyList}>{warnMessage}</Text> 
          </View> 
        }
      />

      <View style={styles.inputContainer}> 
        <InputText 
          style={styles.input}
          valorText={valorText}
          setValorText={setValorText}
          placeholder="Digite aqui..."
        />
      </View>

      <ButtonVerify onPress={addItem} EstaVerificando={EstaVerificando} />
    </View>
  );
}
