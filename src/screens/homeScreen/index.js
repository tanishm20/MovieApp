import {Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {popularMovieData} from '../../redux/action/popularMovie-action';

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(popularMovieData());
  }, [dispatch]);

  return (
    <View>
      <Text>Aphhhh p</Text>
    </View>
  );
};

export default HomeScreen;
