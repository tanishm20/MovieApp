import { ActivityIndicator, View } from 'react-native';
import React from 'react';
import { styles } from './style';

export const ActivityIndicatorComponent = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={'#04abc1'} />
    </View>
  );
};



