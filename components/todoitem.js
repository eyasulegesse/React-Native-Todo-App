import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';
export default function TodoItem({ item, onDelete }) {
  return (
    <TouchableOpacity onPress={() => onDelete(item.key)}>
      <View style={styles.item}>
        <MaterialCommunityIcons name='delete' size={20} color='red' />
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 2,
    borderStyle: 'dotted',
    borderRadius: 10,
  },
  itemText: {
    paddingLeft: 20,
  },
});
