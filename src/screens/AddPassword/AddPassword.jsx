import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import React from 'react';
import { useState } from 'react';

import { colors } from '../../style/colors';

import Ionicons from 'react-native-vector-icons/Ionicons';

const AddPassword = () => {
  const fields = [
    {
      name: 'Email',
      value: '',
    },
    {
      name: 'Password',
      value: '',
    },
    {
      name: 'Username',
      value: '',
    },
    {
      name: 'Website',
      value: '',
    },
  ];

  const [fieldlist, setFields] = useState(fields);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [website, setWebsite] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: '80%',
          justifyContent: 'flex-end',
          flexDirection: 'row',
        }}
      >
        <TouchableOpacity
          onPress={() => console.log('askjf')}
          style={{
            borderColor: 'white',
            borderWidth: 1,
            paddingVertical: 8,
            paddingHorizontal: 8,
            borderRadius: 100,
          }}
        >
          <Ionicons name="save-outline" size={25} color="white" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: '90%',
        }}
      >
        <FlatList
          data={fields}
          renderItem={({ item }) => (
            <View
              style={{
                marginBottom: 5,
              }}
            >
              <Text style={styles.textLabelStyle}>{item.name}</Text>
              <TextInput style={styles.textInputStyle} />
            </View>
          )}
        />
      </View>

      <TouchableOpacity style={styles.addFieldButton}>
        <Text style={styles.textLabelStyle}>Add Field</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.dark_bg,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
    paddivngHorizontal: 20,
  },
  textInputStyle: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    // borderWidth: 1,
    borderBottomWidth: 2,
    color: 'white',
    // borderRadius: 10,
    // marginTop: 20,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textLabelStyle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  addFieldButton: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginTop: 20,
  },
});
