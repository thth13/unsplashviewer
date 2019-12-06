import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import store from './store';
import Home from './screens/Home';
import Photo from './screens/Photo';

const MainNavigator = createStackNavigator({
  Home: Home,
  Photo: Photo,
});

const Navigation = createAppContainer(MainNavigator);

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App;