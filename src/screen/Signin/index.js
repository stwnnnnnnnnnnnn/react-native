import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Checkbox} from 'react-native-paper';
import axios from '../../utils/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {TextInput} from 'react-native-paper';

export default function Signin(props) {
  const [checked, setChecked] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);
  const [form, setForm] = useState({});

  const handleChange = () => {
    setTogglePassword(!togglePassword);
  };

  const handleLogin = async () => {
    try {
      console.log(form);
      const result = await axios.post('auth/login', form);
      await AsyncStorage.setItem('userId', result.data.data.userId);
      await AsyncStorage.setItem('token', result.data.data.token);
      await AsyncStorage.setItem('refreshToken', result.data.data.refreshToken);
      alert(result.data.message);
      props.navigation.replace('AppScreen', {screen: 'MenuNavigator'});
      props.navigation.replace('AppScreen', {screen: 'MenuNavigator'});
    } catch (error) {
      console.log(error);
    }
  };

  const navSignup = () => {
    props.navigation.navigate('Signup');
  };

  const handleChangeForm = (value, name) => {
    setForm({...form, [name]: value});
  };

  return (
    <View style={styles.container}>
      {/* <Icon color="red" size={30} name="downcircleo" /> */}
      <Text style={styles.title}>Log in</Text>
      <View style={styles.containerView1}>
        <Text style={styles.title2}>Hi, Welcome back to urticket</Text>
      </View>
      <View>
        <TextInput
          style={styles.textInput}
          // onChangeText={text => handleChangeForm(text, 'email')}
        />
        <TextInput
          style={styles.textInput}
          name="email"
          onChangeText={text => handleChangeForm(text, 'email')}
        />
        <View style={styles.textBoxParent}>
          <TextInput
            secureTextEntry={togglePassword ? true : false}
            style={styles.textBox}
            placeholder="Állat neve"
            name="password"
            onChangeText={text => handleChangeForm(text, 'password')}
          />
          <TouchableOpacity style={styles.textBoxButton} onPress={handleChange}>
            <Text>
              <Icon name={togglePassword ? 'eye' : 'eye-slash'} size={16} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password</Text>
      </TouchableOpacity>
      <Pressable style={styles.buttonLogin} onPress={handleLogin}>
        <Text style={styles.text}>Log in</Text>
      </Pressable>
      <TouchableOpacity style={styles.buttonSignup} onPress={navSignup}>
        <Text style={{color: 'white'}}>Signup</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.titleSingleLogin}>Or sign in with</Text>
        <View style={styles.containerSingleLogin}>
          <Pressable style={styles.buttonSingleLogin} onPress={handleLogin}>
            <Image source={require('../../assets/google.png')} />
          </Pressable>
          <Pressable style={styles.buttonSingleLogin} onPress={handleLogin}>
            <Image source={require('../../assets/fesbuk.png')} />
          </Pressable>
          <Pressable style={styles.buttonSingleLogin} onPress={handleLogin}>
            <Image source={require('../../assets/biometric.png')} />
          </Pressable>
        </View>
      </View>
      {/* <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  textBoxParent: {
    justifyContent: 'center',
  },
  textBox: {
    marginVertical: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#C1C5D0',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  textBoxButton: {
    position: 'absolute',
    right: 20,
    zIndex: 100,
    width: 20,
    height: 20,
    // borderWidth: 1,
    // borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSignup: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  card: {
    backgroundColor: 'white',
    width: '90%',
    marginVertical: 20,
    padding: 30,
    borderRadius: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  container: {
    paddingHorizontal: 30,
  },
  title: {
    fontFamily: 'Poppins-Black',
    fontWeight: '800',
    fontSize: 24,
    paddingVertical: 25,
    letterSpacing: 1,
  },
  containerSingleLogin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerView1: {
    flexDirection: 'row',
  },
  title2: {
    fontFamily: 'PoppinsBoldest',
    fontWeight: '600',
    paddingBottom: 20,
    letterSpacing: 1,
  },
  titleSingleLogin: {
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 10,
    fontWeight: '400',
    color: '#373A42',
    letterSpacing: 0.9,
  },
  buttonSingleLogin: {
    borderWidth: 2,
    borderColor: '#3366FF',
    padding: 20,
    paddingHorizontal: 35,
    borderRadius: 15,
  },
  textInput: {
    marginVertical: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#C1C5D0',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  forgot: {
    textAlign: 'right',
    fontWeight: '600',
    letter: 0.9,
    fontSize: 16,
    color: '#3366FF',
    marginBottom: 20,
  },
  buttonLogin: {
    backgroundColor: '#3366FF',
    borderRadius: 15,
    paddingVertical: 20,
    color: 'white',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 2,
  },
});
