import React, {useEffect} from 'react';
import {ScrollView, Text, StyleSheet, Button} from 'react-native';
import HeaderDetail from '../../components/Header/detail';

export default function Detail(props) {
  useEffect(() => {
    console.log(props.route.params.productId);
  }, []);

  return (
    <ScrollView>
      <HeaderDetail {...props} />
      <Button
        title="Order Screen"
        onPress={() => {
          props.navigation.navigate('Order');
        }}
      />
      {/* <Text style={{fontSize: 300}}>Lorem ipsum dolor ammet</Text> */}
    </ScrollView>
  );
}

const style = StyleSheet.create({});
