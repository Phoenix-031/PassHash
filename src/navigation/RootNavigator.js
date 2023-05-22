import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Setttings';
import AddPassword from '../screens/AddPassword';

import { colors } from '../style/colors';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.yellow_dark,
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#28293d',
          borderTopWidth: 0,
          elevation: 5,
          height: 60,
          shadowOpacity: 0.2,
          position: 'absolute',
        },
        tabBarHideOnKeyboard: true,
      }}
      innitialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        headerShown={true}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddPassword}
        options={{
          tabBarLabel: '',
          tabBarButton: () => (
            <TouchableHighlight
              style={styles.addPasswordIconStyle}
              onPress={() => navigation.navigate('AddPassword')}
            >
              <Ionicons name="add" color="white" size={30} />
            </TouchableHighlight>
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" color={color} size={22} />
          ),
          headerShown: true,
          header: () => (
            <View style={styles.headerSettingsContainerStyle}>
              <Text style={styles.headerTextStyle}>Settings</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({
  headerSettingsContainerStyle: {
    height: 60,
    backgroundColor: colors.dark_bg,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.dark_bg,
  },
  headerTextStyle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  addPasswordIconStyle: {
    top: -15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.dark_bg,
    height: 60,
    width: 60,
    borderRadius: 30,
    borderColor: colors.light_bg,
    borderWidth: 5,
  },
});
