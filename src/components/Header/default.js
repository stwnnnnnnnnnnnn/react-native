import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function DefaultHeader(props) {
  const backScreen = () => {
    // props.navigation.goBack(null);
    // props.navigation.openDrawer();
    console.log(props.name);
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={backScreen} style={styles.section}>
        <Text>
          <Icon name="arrowleft" color={props.color} size={25} />
        </Text>
      </TouchableOpacity>
      <View style={(styles.section, styles.sectionCenter)}>
        <Text>{props.name}</Text>
      </View>
      <View style={styles.section} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  section: {
    flex: 1,
  },
  sectionCenter: {
    alignItems: 'center',
  },
});
