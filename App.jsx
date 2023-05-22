import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootNavigator from './src/navigation/RootNavigator';

import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginScreen from './src/screens/Login';
import AddPassword from './src/screens/AddPassword';
import { colors } from './src/style/colors';
import ViewPassword from './src/screens/ViewPassword';
import RegisterScreen from './src/screens/Register';

import useStore from './src/store/store';
import TrashScreen from './src/screens/Trash';
import ArchivedSceen from './src/screens/Archived';

const Stack = createNativeStackNavigator();

const App = () => {
  const { user } = useStore((state) => ({
    user: state.user,
  }));

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        {user === null && (
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{
              headerShown: false,
            }}
          />
        )}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Root"
          component={RootNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddPassword"
          component={AddPassword}
          options={{
            headerShown: true,
            header: ({ navigation }) => (
              <View style={styles.headerContainer}>
                <TouchableHighlight onPress={() => navigation.goBack()}>
                  <Ionicons name="chevron-back" size={30} color="white" />
                </TouchableHighlight>
                {/* <Text style={styles.headerTextStyle}>Add Password</Text> */}
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="ViewPassword"
          component={ViewPassword}
          options={{
            headerShown: true,
            header: ({ navigation, route }) => {
              //   console.log(route.params.data);
              return (
                <View style={styles.headerContainer}>
                  <TouchableHighlight onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={30} color="white" />
                  </TouchableHighlight>
                  <Text style={styles.headerTextStyle}>
                    {route.params.data}
                  </Text>
                </View>
              );
            },
          }}
        />
        <Stack.Screen
          name="TrashScreen"
          component={TrashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ArchivedScreen"
          component={ArchivedSceen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  headerTextStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerContainer: {
    paddingHorizontal: 20,
    height: 50,
    width: '100%',
    backgroundColor: colors.dark_bg,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
