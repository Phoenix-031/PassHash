import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';

import { colors } from '../../style/colors';

const ViewPassword = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ViewPassword</Text>
    </SafeAreaView>
  );
};

export default ViewPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    backgroundColor: colors.dark_bg,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
    paddivngHorizontal: 20,
  },
});
