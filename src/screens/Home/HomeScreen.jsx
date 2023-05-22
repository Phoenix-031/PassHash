import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import { passwords } from '../../data/passwordData';
import { Leading } from '../../components';
import { useNavigation } from '@react-navigation/native';

import { colors } from '../../style/colors';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: '100%',
        }}
      >
        <FlatList
          data={passwords}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
                marginBottom: 10,
                borderRadius: 10,
              }}
              onPress={() =>
                navigation.navigate('ViewPassword', { data: item.title })
              }
            >
              <Leading icon={item.title[0]} />
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: colors.yellow_dark,
                  transform: [{ rotate: '45deg' }],
                  position: 'absolute',
                  left: 85,
                  zIndex: -1,
                }}
              ></View>
              <View style={styles.itemcard}>
                <Text style={styles.cardtext}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    backgroundColor: colors.dark_bg,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
    paddivngHorizontal: 10,
    marginBottom: 60,
  },
  itemcard: {
    width: '70%',
    backgroundColor: colors.light_bg,
    borderColor: 'gray',
    borderWidth: 1,
    color: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 999,
  },
  cardtext: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
  },
});
