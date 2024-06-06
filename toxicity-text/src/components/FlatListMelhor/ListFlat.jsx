import { View, Text, StyleSheet } from 'react-native'


export const ListItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.textItem}>{item}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginVertical: 5, 
    borderRadius: 25,

  },
  textItem: {
    marginTop: 10,
    color: '#c0c0c0',
    marginLeft: 10,
    fontSize: 18,
  },
})