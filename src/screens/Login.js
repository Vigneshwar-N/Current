import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {getResponsiveFontSize} from '../utility/responsive';
import {fonts} from '../constants/fonts/font';
import {myColor} from '../utility/Colors/myColors';

function Login({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        marginRight: '3%',
        marginLeft: '3%',
        justifyContent: 'center',
      }}>
      <View
        style={{
          height: hp(70),
          // backgroundColor: '#ACA',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            alignSelf: 'center',
            color: '#000000',
            fontSize: getResponsiveFontSize(20),
            fontFamily: fonts.PlayfairDisplayBold,
          }}>
          Login
        </Text>
        <View style={{marginTop: hp(3), marginBottom: hp(0)}}>
          <TextInput
            autoCapitalize="none"
            keyboardType="email-address"
            style={{
              fontSize: getResponsiveFontSize(18),
              width: wp(92),
              borderWidth: 1,
              paddingTop: '3%',
              paddingBottom: '3%',
              borderRadius: 50,
              paddingLeft: wp(3),
              color: myColor.black,
              fontFamily: fonts.WorkSansMedium,
              borderColor: '#000000',
              marginTop: '2%',
              marginBottom: '3%',
            }}
            placeholder="Mail"
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: wp(92),
              borderWidth: 1,
              borderRadius: 50,
              borderColor: '#000000',
              marginTop: '2%',
              marginBottom: '3%',
            }}>
            <TextInput
              maxLength={12}
              secureTextEntry
              style={{
                fontSize: getResponsiveFontSize(18),
                width: wp(80),
                paddingTop: '3%',
                paddingBottom: '3%',
                paddingLeft: wp(3),
                color: myColor.black,
                fontFamily: fonts.WorkSansMedium,
              }}
              placeholder="Password"
            />
            <Text>Hello</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Data');
          }}
          style={{
            marginTop: hp(4),
            justifyContent: 'center',
            borderWidth: 1,
            width: wp(92),
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 40,
            backgroundColor: myColor.black,
            borderColor: myColor.black,
          }}>
          <Text
            style={{
              color: myColor.white,
              fontSize: getResponsiveFontSize(22),
              paddingTop: '4%',
              paddingBottom: '4%',
              fontFamily: fonts.PlayfairDisplayBold,
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            marginTop: hp(2),
            marginBottom: hp(2),
            alignSelf: 'center',
            fontFamily: fonts.WorkSansBold,
            color: myColor.black,
            fontSize: getResponsiveFontSize(12),
          }}>
          or
        </Text>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            borderWidth: 1,
            width: wp(92),
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 40,
            backgroundColor: myColor.black,
            borderColor: myColor.black,
          }}>
          <Text
            style={{
              color: myColor.white,
              fontSize: getResponsiveFontSize(22),
              paddingTop: '4%',
              paddingBottom: '4%',
              fontFamily: fonts.PlayfairDisplayBold,
            }}>
            Continue with Google
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: hp(3),
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#222222',
              fontFamily: fonts.WorkSansRegular,
              fontSize: getResponsiveFontSize(12),
            }}>
            Don't have an account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Text
              style={{
                left: wp(1),
                fontFamily: fonts.WorkSansBold,
                color: myColor.black,
                fontSize: getResponsiveFontSize(12),
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Login;
