import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const App1 = () => {
  const dispatch = useDispatch();
  const about = useSelector(state => state.aboutReducer);
  useEffect(() => {
    dispatch({type: 'ACTION_ABOUT_REQUEST'});
  }, []);
  useEffect(() => {
    console.log('about', about);
  }, [about, about.isFetching]);
  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App1;
