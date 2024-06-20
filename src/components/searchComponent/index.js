import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

const SearchComponent = ({ value, onPress, onTextChange }) => {
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

export default SearchComponent;

const styles = StyleSheet.create({
  titleText: {
    fontSize: 32,
    fontWeight: '700',
    fontStyle: 'italic',
    color: '#04abc1',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
    fontStyle: 'italic',
    color: '#ffffff',
  },
  inputViewStyle: {
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    borderColor: '#04abc1',
    borderWidth: 2,
    borderRadius: 12,
  },
  inputStyle: {
    flex: 0.8,
    height: 44,
    padding: 12,
    backgroundColor: '#333333',
    color: '#ffffff',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  inputButtonStyle: {
    flex: 0.2,
    height: 44,
    padding: 12,
    backgroundColor: '#04abc1',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
});
