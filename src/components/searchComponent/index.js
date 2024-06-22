import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './style';

export const SearchComponent = ({ value, onPress, onTextChange }) => {
  const [flag, setFlag] = useState(true);
  const throttle = () => {
    if (flag) {
      onPress();
      Keyboard.dismiss();
      setFlag(false);
      setTimeout(() => {
        setFlag(true);
      }, 1000);
    }
  };
  return (
    <>
      <Text style={styles.titleText}>Search your movie</Text>
      <View style={styles.inputViewStyle}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={onTextChange}
          value={value}
          placeholderTextColor={'#717171'}
          placeholder="Please enter movie name"
          autoCorrect={false}
          returnKeyType="go"
          onSubmitEditing={throttle}
        />
        <TouchableOpacity
          activeOpacity={1}
          style={styles.inputButtonStyle}
          onPress={throttle}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};



