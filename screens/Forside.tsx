import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function Forside() {
  return (
    <View>
      <View style={styles.fivedays}>
        <View style={styles.day1}>
          <Text>Test</Text>
        </View>
        <View style={styles.day1}>
        <Text>Test</Text>
        </View>
        <View style={styles.day1}>
        <Text>Test</Text>
        </View>
        <View style={styles.day1}>
        <Text>Test</Text>
        </View>
        <View style={styles.day1}>
        <Text>Test</Text>
         <Text>Test</Text>
        </View>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/Forside.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  test: {
    position: 'absolute',
    textAlign: 'center',
    width: '20%',
    left: '0%',
    top: 0,
  },
  test2: {
    position: 'absolute',
    textAlign: 'center',
    width: '20%',
    left: '20%',
    top: 0,
  },
  fivedays: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
  },
  day1: {
    width: "20%",
    borderColor: "black",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  day2: {

  },
  day3: {

  },
  day4: {

  },
  day5: {

  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
