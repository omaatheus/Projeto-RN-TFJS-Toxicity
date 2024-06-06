import styles from "../styles/Home/Home"
import { TextInput } from "react-native"

export default function InputText(props) {
    return (

        
<TextInput
        style={styles.input}
        value={props.text}
        onChangeText={props.setText}
        placeholder={props.placeholder}
        placeholderTextColor="#fff"
      />
    )
}
