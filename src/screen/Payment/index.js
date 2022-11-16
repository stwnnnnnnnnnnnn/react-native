import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function Payment(props) {
  return (
    <View>
      <Button
        title="Home Screen"
        onPress={() => {
          props.navigation.navigate('Home');
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({});
