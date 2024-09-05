import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  lightThemeStyles,
  darkThemeStyles,
  styles,
} from '../components/styles/settingsStyle';
import {toggleTheme} from '../../store/themeSlice'; //
export default function Settings() {
  const darkTheme = useSelector(state => state.theme.darkTheme);
  const dispatch = useDispatch();

  const themeStyle = darkTheme ? darkThemeStyles : lightThemeStyles;

  return (
    <View style={[styles.container, themeStyle.backgroundColor]}>
      <Text style={[styles.headerText, themeStyle.text]}>Settings</Text>

      <TouchableOpacity
        style={[styles.button, themeStyle.button]}
        onPress={() => dispatch(toggleTheme())}>
        {/* Dispatch the toggleTheme action */}
        <Text style={[styles.buttonText, themeStyle.text]}>Change Theme</Text>
      </TouchableOpacity>
    </View>
  );
}
