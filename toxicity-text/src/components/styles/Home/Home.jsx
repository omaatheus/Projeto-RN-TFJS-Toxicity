import { StyleSheet } from "react-native";
import screenHeight from '../../../constants/dimensions/Dimensions'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#270343', 
    paddingTop: 128,
    padding: 10,
    paddingHorizontal: 16,
  
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center', 
  },
  
  inputContainer: {
    backgroundColor: '#280D3E', 
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  
    width: "100%", 
    height: screenHeight * 0.15,
  
    flexDirection: 'column', 
    alignItems: 'flex-start',
  },
  textEmptyList: {
    fontFamily: 'Arial', 
    fontWeight: "bold",
    fontSize: 36,
    color: '#fff', 
  },
});

export default styles;
