import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {popularMovieData} from '../../redux/action/popularMovie-action';
import TileComponent from '../../components/tileComponent';
import SearchComponent from '../../components/searchComponent';
import {searchMovieData} from '../../redux/action/searchMovie-action';
import ActivityIndicatorComponent from '../../components/activityIndicatorComponent';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isError, setIsError] = useState(false);

  const {isFetching, popularMovieResponse, error} = useSelector(
    state => state.popularMovieReducer,
  );
  const {isLoading, searchMovieResponse, searchMovieError} = useSelector(
    state => state.searchMovieReducer,
  );

  useEffect(() => {
    dispatch(popularMovieData());
  }, [dispatch]);

  useEffect(() => {
    if (popularMovieResponse?.results) {
      setIsError(false);
      setData(popularMovieResponse.results);
    }
  }, [popularMovieResponse]);

  useEffect(() => {
    if (searchMovieResponse?.results) {
      setIsError(false);
      setData(searchMovieResponse.results);
    }
  }, [searchMovieResponse]);

  useEffect(() => {
    if (searchMovieError || error) {
      setIsError(true);
    }
  }, [error, searchMovieError]);
  const onTextChange = text => {
    setInputText(text);
  };

  const onSearch = () => {
    setData([]);
    if (inputText) {
      dispatch(searchMovieData(inputText));
    } else {
      dispatch(popularMovieData());
    }
  };

  return (
    <View style={styles.container}>
      <SearchComponent
        value={inputText}
        onPress={onSearch}
        onTextChange={onTextChange}
      />
      {isLoading || isFetching ? (
        <ActivityIndicatorComponent />
      ) : (
        <TileComponent data={data} isError={isError} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d2129',
    alignItems: 'center',
  },
});
export default HomeScreen;
