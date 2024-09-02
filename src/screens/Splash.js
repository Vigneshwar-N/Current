import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import * as Animatable from 'react-native-animatable';
import {fonts} from '../constants/fonts/font';
import {getResponsiveFontSize} from '../utility/responsive';
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2500);
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
      }}>
      <Animatable.Text
        animation={'fadeInLeft'}
        duration={2000}
        style={{
          fontFamily: fonts.PlayfairDisplayBold,
          fontSize: getResponsiveFontSize(50),
          color: '#000000',
          alignSelf: 'center',
        }}>
        ShopGrid
      </Animatable.Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
