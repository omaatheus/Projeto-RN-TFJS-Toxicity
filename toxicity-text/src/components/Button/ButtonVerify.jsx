import { Text, TouchableOpacity, StyleSheet } from 'react-native'
export default ButtonVerify = ({loading, onPress}) => {

  return (
    <TouchableOpacity style={styles.button} onPress={onPress} disabled={loading}>
        <Text style={styles.textButton}>
          { //if para caso esteja carregando, exibir a mensagem "verificando" e caso não tenha nada, exibir para Verificar
            loading ? (
              <>Verificando...</>
            ) : (
              <>Verificar</>
            )
          }
        </Text>
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
    button: {
        width: "100%",            
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 40,
        paddingHorizontal: 10,      
        paddingVertical: 16,
        alignItems: 'center',     
        backgroundColor: '#98272D',
        borderRadius: 25,
    },
    textButton: {
        fontSize: 20,             
        fontFamily: "Arial",
        fontWeight: 'bold',
        color: '#fff',
    },
  })


