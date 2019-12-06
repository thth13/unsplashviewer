import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { loadPhotos } from '../actions/photos';

import ListItem from '../components/ListItem';

const Home = ({ photos, loadPhotos, navigation }) => {
  useEffect(() => loadPhotos(), []);

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        renderItem={({ item }) => <ListItem data={item} navigation={navigation}/>}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
};

Home.navigationOptions = { title: 'Home' };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 1,
    width: '100%',
  },
});

const mapStateToProps = state => ({
  photos: state.photos,
});

export default connect(mapStateToProps, { loadPhotos })(Home);
