import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#270343',
        alignItems: 'center',
        justifyContent: 'space-between', // espaço entre os elementos
        paddingVertical: 20,
    },
    resultContainer: {
        flex: 1,
        justifyContent: 'center', // centralizar texto no eixo vertical
        alignItems: 'center', // centralizar texto no eixo horizontal
    },

    toxicitytext: {
      color: 'white',
      fontSize: 33,
      fontWeight: 'bold', // texto em negrito
      marginHorizontal: 20, // espaçamento das bordas laterais
      marginTop: 130,
    },
    toxicText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold', // texto em negrito
      marginHorizontal: 20, // espaçamento das bordas laterais
      marginTop: 10,
    },

    input: {
      color:'white',
      width: '90%',
      padding: 30,
      borderWidth: 1,
      borderRadius: 30,
      marginBottom: -250,
      backgroundColor: '#4B0082',
    },

    button: {
      color:'white',
      backgroundColor: '#b53337', // Cor rosada
      width: 370,
      padding: 20,
      borderRadius: 30,
      fontSize: 15,
      fontWeight: 'bold',
      },
      
    safeText: {
        color: 'white',
        fontSize: 18,
    },
    resultText: {
        color: 'white', // cor do texto de resultado
        fontSize: 18,
    },
});

export default styles;
