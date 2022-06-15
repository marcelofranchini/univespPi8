import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';

const Header: React.FC = () => {
  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');
  return (
    <SafeAreaView> 
      <Appbar.Header style={styles.container}>
        <Appbar.Content title="Marcelo" subtitle={'Franchini'} />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fdda0d',
  },
});
