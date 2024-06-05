import { Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import styles from '../../components/styles/Home/Home';
import { useState, useEffect } from 'react';
import { toxicityClassifier } from '../../lib/Tensorflow/Toxicity';

export default function Home() {
    
    const [text, setText] = useState('');
    const [toxicityLevel, setToxicityLevel] = useState(null);

    function TextClassifier() {
        if (text.trim() === '') { //se o texto estiver vazio após remover espaços em branco
            setToxicityLevel(null); //reinicia o nível de toxicidade para null
            return;
        }

        toxicityClassifier(text).then(predictions => { //chama a função, que retornará uma promessa
            const toxicPredictions = predictions.filter(p => p.results[0].match); //filtra as previsões consideradas tóxicas

            if (toxicPredictions.length > 0) { //se houver pelo menos uma previsão tóxica
                const mostToxicLabel = toxicPredictions.reduce((prev, current) => //encontra a previsão mais tóxica
                    prev.results[0].probabilities[1] > current.results[0].probabilities[1] ? prev : current
                ).label; //obtém a taxa da previsão mais tóxica         
                
                setToxicityLevel(mostToxicLabel === 'severe_toxicity' ? 'extremamente ofensivo' : 'ofensivo');
            } else {
                setToxicityLevel('nao_ofensivo');
            }
        });
    }

    

    return (
        <View style={styles.container}>

            {toxicityLevel === null && <Text style={styles.toxicText}>Verifique a agressividade de seu texto</Text>}
            {toxicityLevel === 'extremamente ofensivo' && <Text style={styles.toxicText}>Conteúdo extremamente tóxico</Text>}
            {toxicityLevel === 'ofensivo' && <Text style={styles.safeText}>Conteúdo ofensivo</Text>}
            {toxicityLevel === 'nao_ofensivo' && <Text style={styles.safeText}>Conteúdo não ofensivo</Text>}

            <TextInput
                style={styles.input}
                value={text}
                onChangeText={setText}
                placeholder="Digite aqui..."
                placeholderTextColor="#fff"
            />

            <TouchableOpacity onPress={() => TextClassifier(text)}>
            <Text style={[styles.button, {textAlign: 'center', textAlignVertical: 'center'}]}>Verificar</Text>
            </TouchableOpacity>


        </View>

    );
}
