import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

import HomeScreen from './src/screens/home-screen';
import {withAuthenticator} from 'aws-amplify-react-native';
import {Auth} from 'aws-amplify';


const App = () => {

  return (
    <>
      <HomeScreen out={() => {Auth.signOut()}}/>
    </>
  );
};

export default withAuthenticator(App);
// export default App;
