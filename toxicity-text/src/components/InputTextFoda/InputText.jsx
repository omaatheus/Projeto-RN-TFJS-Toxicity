import { TextInput, StyleSheet } from "react-native"

export default InputText = ({ ValorText, setValorText }) => {
    return (
        <TextInput
            style={styles.input}
            value={ValorText}
            onChangeText={setValorText}
            placeholder="Digite aqui"
        />
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        width: '100%',
        marginTop: 20,
        alignSelf: 'left',
        fontFamily: 'Arial',
        color: '#fff',
        padding: 20,
        flex: 0.5
    },
})