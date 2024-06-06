import styles from "../styles/Home/Home"
import { TouchableOpacity, Text } from "react-native"

export default function ButtonVerify(props) {
    return (

        <TouchableOpacity onPress={props.onPress}>
            <Text style={[styles.button, { textAlign: 'center', textAlignVertical: 'center' }]}>
                Verificar
            </Text>
        </TouchableOpacity>
    )
}