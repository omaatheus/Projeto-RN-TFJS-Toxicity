import { StatusBar } from 'expo-status-bar';
import {Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../../components/styles/Home/Home';
import { useState } from 'react';

export default function Home() {
    const [model, setModel] = useState()

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>{model}</Text>

            <TextInput 
            placeholder='Digite aq'
            value={model}
            onChangeText={setModel}
            >
            </TextInput>

            <TouchableOpacity><Text>Botao Clicavel</Text></TouchableOpacity>

        </View>
    );
}
