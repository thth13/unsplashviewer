import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const ListItem = ({ data, navigation }) => {
  handlePress = photoURI => {
    navigation.navigate('Photo', { photoURI });
  };

  return (
    <TouchableOpacity
      onPress={() => handlePress(data.urls.regular)}
      style={{ backgroundColor: 'transparent' }}
    >
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={{ uri: data.urls.small }}
        />
        <View style={styles.itemText}>
          <View style={styles.textBlock}>
            <Text style={styles.text}>Author name: </Text>
            <Text>{data.user.name}</Text>
          </View>
          {data.description && (
            <View style={styles.textBlock}>
              <Text style={styles.text}>Description: </Text>
              <Text>{data.description}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    borderRadius: 0,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#d6d7da',
    marginBottom: 20,
  },
  itemText: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 15,
    marginTop: 5
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  text: {
    fontWeight: 'bold',
  },
  textBlock: {
    maxWidth: 150,
    marginRight: 50
  }
});

export default ListItem;