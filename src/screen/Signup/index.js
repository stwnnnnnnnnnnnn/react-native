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
// import {TextInput} from 'react-native-paper';

export default function Signup(props) {
  const [checked, setChecked] = useState(false);
  const [togglePassword1, setTogglePassword1] = useState(false);
  const [togglePassword2, setTogglePassword2] = useState(false);

  const handleLogin = () => {
    props.navigation.replace('AppScreen', {screen: 'MenuNavigator'});
  };
  const navSignup = () => {
    props.navigation.navigate('Signup');
  };

  const handleChange = param => {
    if (param === 'toggle1') {
      setTogglePassword1(!togglePassword1);
    } else {
      setTogglePassword2(!togglePassword2);
    }
  };

  return (
    <View style={styles.container}>
      {/* <Icon color="red" size={30} name="downcircleo" /> */}
      <Text style={styles.title}>Sign up</Text>
      <View style={styles.containerView1}>
        <Text style={styles.title2}>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.title2}>Log In</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput style={styles.textInput} />
        <TextInput style={styles.textInput} />
        <View style={styles.textBoxParent}>
          <TextInput
            secureTextEntry={togglePassword1 ? true : false}
            style={styles.textBox}
            placeholder="Állat neve"
          />
          <TouchableOpacity
            style={styles.textBoxButton}
            onPress={() => handleChange('toggle1')}>
            <Text>
              <Icon name={togglePassword1 ? 'eye' : 'eye-slash'} size={16} />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textBoxParent}>
          <TextInput
            secureTextEntry={togglePassword2 ? true : false}
            style={styles.textBox}
            placeholder="Állat neve"
          />
          <TouchableOpacity
            style={styles.textBoxButton}
            onPress={() => handleChange('toggle2')}>
            <Text>
              <Icon name={togglePassword2 ? 'eye' : 'eye-slash'} size={16} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password</Text>
      </TouchableOpacity>
      <Pressable style={styles.buttonLogin} onPress={handleLogin}>
        <Text style={styles.text}>Sign up</Text>
      </Pressable>
      <TouchableOpacity style={styles.buttonSignup} onPress={navSignup}>
        <Text style={{color: 'white'}}>Signup</Text>
      </TouchableOpacity>

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
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSignup: {
    padding: 10,
    backgroundColor: 'blue',
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
