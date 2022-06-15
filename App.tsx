import React from 'react';
import Home from './src/pages/Home';
import {Provider as PaperProvider} from 'react-native-paper';
import Header from './src/components/Header';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const App: React.FC = () => {
  MaterialCommunityIcon.loadFont();

  return (
    <PaperProvider>
      <Header />
      <Home />
    </PaperProvider>
  );
};

export default App;
