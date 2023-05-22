import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import { colors } from '../../style/colors';

import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: '80%',
          marginBottom: 20,
        }}
      >
        <Text style={styles.textStyle}>Email</Text>
        <TextInput style={styles.textInput} />
      </View>
      <View
        style={{
          width: '80%',
          marginBottom: 20,
        }}
      >
        <Text style={styles.textStyle}>Master Password</Text>
        <TextInput style={styles.textInput} />
      </View>
      <View
        style={{
          width: '80%',
          marginBottom: 20,
        }}
      >
        <Text style={styles.textStyle}>Retype Password</Text>
        <TextInput style={styles.textInput} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.textInput}>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    backgroundColor: colors.dark_bg,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddivngHorizontal: 20,
  },
  textStyle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    marginTop: 10,
  },
});
