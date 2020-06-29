import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonBody}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonBody: {
    backgroundColor: 'darkcyan',
    width: '80%',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
export {Button};
