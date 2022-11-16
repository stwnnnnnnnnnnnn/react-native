import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import global from '../style';
// import checkStorage from '../../utils/checkAsyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../../utils/axios';
import moment from 'moment';

export default function Home(props) {
  const [userId, setUserId] = useState('');
  const [data, setData] = useState([]);
  const [dateShow, setDateShow] = useState(moment().format('YYYY-MM-DD')); // 2022-10-04
  const [selected, setSelected] = useState(0);
  const [listDateShow, setListDateShow] = useState([]);

  useEffect(() => {
    // checkStorage();
    getUserId();
    getData();
  }, []);

  useEffect(() => {
    generateDate();
  }, [dateShow]);

  const generateDate = () => {
    let listDate = [
      moment(dateShow).subtract(2, 'days'),
      moment(dateShow).subtract(1, 'days'),
      dateShow,
      moment(dateShow).subtract(-1, 'days'),
      moment(dateShow).subtract(-2, 'days'),
    ];
    setListDateShow(listDate);
  };

  const selectDate = date => {
    setDateShow(date);
  };

  const getUserId = async () => {
    const data = await AsyncStorage.getItem('userId');
    setUserId(data);
  };

  const getData = async () => {
    try {
      const result = await axios.get(
        'product?searchName=&sort=&limit=10&page=1&searchDateCreated=',
      );
      setData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDetail = id => {
    props.navigation.navigate('Detail', {productId: id});
  };

  const navDetail = () => props.navigation.navigate('Detail');
  console.log(moment(dateShow).format('DD'));
  // console.log(listDateShow);
  return (
    <View style={styles.container}>
      <View style={[styles.sortDateContainer, {borderWidth: 2}]}>
        {listDateShow.map((elem, index) => (
          <TouchableOpacity
            style={[
              styles.dateContainer,
              {
                borderWidth:
                  moment(dateShow).format('DD') === moment(elem).format('DD')
                    ? 2
                    : 0,
                borderColor:
                  moment(dateShow).format('DD') === moment(elem).format('DD')
                    ? '#FF8900'
                    : '',
                padding:
                  moment(dateShow).format('DD') === moment(elem).format('DD')
                    ? 15
                    : 0,
                borderRadius:
                  moment(dateShow).format('DD') === moment(elem).format('DD')
                    ? 16
                    : 0,
              },
            ]}
            key={index}
            onPress={() => {
              selectDate(moment(elem).format('YYYY-MM-DD'));
            }}>
            <Text
              style={[
                styles.date,
                {
                  color:
                    moment(dateShow).format('DD') === moment(elem).format('DD')
                      ? '#FF8900'
                      : 'white',
                },
              ]}>
              {moment(elem).format('DD')}
            </Text>
            <Text style={styles.date}> {moment(elem).format('ddd')}</Text>
          </TouchableOpacity>
        ))}
        {/* <View style={styles.dateContainer}>
          <Text style={styles.date}>14</Text>
          <Text style={styles.date}>Tue</Text>
        </View>
        <Text style={styles.date}>15</Text>
        <Text style={styles.date}>16</Text>
        <Text style={styles.date}>17</Text> */}
      </View>
      {/* <Text style={[global.h1, styles.header]}>Home Screen</Text>
      <Text style={[global.h1, styles.header]}>User Id = {userId}</Text> */}
      <FlatList
        horizontal={true}
        data={data}
        renderItem={({item}) => (
          <View style={styles.card} onPress={() => handleDetail(item.id)}>
            <Image
              source={require('../../assets/event.png')}
              style={{width: '100%', height: '100%', borderRadius: 30}}
            />
            <View style={{position: 'absolute', bottom: 30, left: 25}}>
              <Text style={{color: 'white'}}>{item.price}</Text>
              <Text style={{color: 'white'}}>{item.name}</Text>
              <TouchableOpacity onPress={() => handleDetail(item.id)}>
                <Text>GO</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />

      {/* {data.map((item)=>(
      ))} */}

      <Button title="Detail Screen" onPress={navDetail} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  sortDateContainer: {
    backgroundColor: '#222B45',
    width: '100%',
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  dateContainer: {alignItems: 'center'},
  date: {color: 'white'},
  'sortDateContainer:first-child': {
    color: 'red',
  },
  header: {color: 'brown'},
  card: {
    width: 160,
    height: 276,
    marginHorizontal: 15,
  },
});
