import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function TodoItem({item, pressHanlder}) {
  return (
    <TouchableOpacity onPress={() => pressHanlder(item.key)}>
      <View style={styles.item}>
        <Text>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
  },
});
