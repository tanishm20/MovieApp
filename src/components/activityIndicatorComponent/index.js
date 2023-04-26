import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';

const ActivityIndicatorComponent = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={'#04abc1'} />
    </View>
  );
};

export default ActivityIndicatorComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
