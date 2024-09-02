import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {fonts} from '../constants/fonts/font';
import {myColor} from '../utility/Colors/myColors';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('Data');
  };

  const handleGoogleSignIn = () => {
    console.log('Google Sign-In Pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text
        style={{
          alignSelf: 'center',
          marginTop: 20,
          fontFamily: fonts.WorkSansMedium,
          fontSize: 20,
          color: myColor.black,
        }}>
        or
      </Text>
      <TouchableOpacity
        style={styles.googleButton}
        onPress={handleGoogleSignIn}>
        <Text style={styles.googleButtonText}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    // fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000000',
    fontFamily: fonts.PlayfairDisplayBold,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 50,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    height: 40,
    color: myColor.black,
    fontFamily: fonts.WorkSansMedium,
  },
  button: {
    backgroundColor: myColor.black,
    paddingVertical: 10,
    borderRadius: 50,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: myColor.white,
    fontSize: 18,
    // fontWeight: 'bold',
    fontFamily: fonts.PlayfairDisplayBold,
  },
  googleButton: {
    backgroundColor: myColor.black,
    paddingVertical: 10,
    borderRadius: 50,
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  googleButtonText: {
    color: myColor.white,
    fontSize: 18,
    // fontWeight: 'bold',
    fontFamily: fonts.PlayfairDisplayBold,
  },
});
