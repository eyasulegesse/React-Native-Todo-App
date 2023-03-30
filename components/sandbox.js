import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function () {
  return (
    <View style={styles.container}>
      <Text style={styles.boxone}>OneBox</Text>
      <Text style={styles.boxtwo}>TwoBox</Text>
      <Text style={styles.boxthree}>ThreeBox</Text>
      <Text style={styles.boxfour}>FourBox</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 40,
    backgroundColor: '#bbb',
  },
  boxone: {
    flex: 3,
    backgroundColor: 'coral',
    padding: 20,
  },
  boxtwo: {
    flex: 1,
    backgroundColor: 'gold',
    padding: 20,
  },
  boxthree: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 20,
  },
  boxfour: {
    flex: 1,
    backgroundColor: 'yellow',
    padding: 20,
  },
});
