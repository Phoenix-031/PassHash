import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import { colors } from '../../style/colors';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: '90%',
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '100%',
            borderWidth: 1,
            borderColor: 'white',
            paddingVertical: 10,
            borderRadius: 10,
            marginTop: 10,
            paddingHorizontal: 10,
            width: '100%',
          }}
          onPress={() => navigation.navigate('TrashScreen')}
        >
          <Ionicons name="trash-outline" size={25} color="white" />
          <Text style={styles.itemTextStyle}>Deleted</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: '90%',
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '100%',
            borderWidth: 1,
            borderColor: 'white',
            paddingVertical: 10,
            borderRadius: 10,
            marginTop: 10,
            paddingHorizontal: 10,
            width: '100%',
          }}
          onPress={() => navigation.navigate('ArchivedScreen')}
        >
          <Ionicons name="ios-archive-outline" size={25} color="white" />
          <Text style={styles.itemTextStyle}>Archived</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;

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
  itemTextStyle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 10,
  },
});
