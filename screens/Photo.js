import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

const Photo = ({ navigation }) => {
  return (
    <View style={styles.body}>
      <ReactNativeZoomableView
        maxZoom={2}
        minZoom={1}
        zoomStep={0.5}
        initialZoom={1}
        bindToBorders={true}
      >
        <Image
          style={styles.image}
          source={{ uri: navigation.getParam('photoURI') }}
        />
      </ReactNativeZoomableView>
    </View>
  );
};

Photo.navigationOptions = { title: 'Photo' };

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
});

export default Photo;
