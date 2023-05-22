import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { colors } from '../../style/colors';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [pass, setPass] = useState('');

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.dark_bg,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 20,
        }}
      >
        Master Password
      </Text>
      <TextInput
        style={{
          height: 50,
          width: '90%',
          borderColor: 'gray',
          borderWidth: 1,
          color: 'white',
          borderRadius: 10,
          marginTop: 20,
          fontFamily: 'Poppins-SemiBold',
          fontSize: 15,
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
        autoFocus={true}
        defaultValue="Password"
        value={pass}
        onChangeText={(text) => setPass(text)}
      />

      <TouchableOpacity
        style={{
          backgroundColor: colors.primary,
          paddingHorizontal: 20,
          paddingVertical: 10,
          marginTop: 20,
          borderRadius: 10,
          paddingVertical: 10,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        onPress={() => navigation.navigate('Root')}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'center',
            fontFamily: 'Poppins-SemiBold',
            fontSize: 15,
            fontWeight: '300',
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
