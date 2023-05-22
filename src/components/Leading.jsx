import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { colors } from '../style/colors';

const Leading = ({ icon }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: colors.light_bg,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'white',
      }}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
        }}
      >
        {icon}
      </Text>
    </View>
  );
};

export default Leading;

const styles = StyleSheet.create({});
