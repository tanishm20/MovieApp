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
  const [page, setPage] = useState(1);
  const [isSearch, setIsSearch] = useState(false);
  const {isFetching, popularMovieResponse, error, totalPages, moreLoading} =
    useSelector(state => state.popularMovieReducer);
  const {
    isLoading,
    searchMovieResponse,
    searchMovieError,
    searchPages,
    isMoreLoading,
  } = useSelector(state => state.searchMovieReducer);

  useEffect(() => {
    if (!isSearch) {
      dispatch(popularMovieData(page));
    } else {
      dispatch(searchMovieData({inputText: inputText, page: page}));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isSearch, page]);

  useEffect(() => {
    if (popularMovieResponse) {
      setIsError(false);
      setData(popularMovieResponse);
    }
  }, [popularMovieResponse]);

  useEffect(() => {
    if (searchMovieResponse) {
      setIsError(false);
      setData(searchMovieResponse);
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
      setIsSearch(true);
      setPage(1);
    } else {
      setIsSearch(false);
      setPage(1);
    }
  };

  const onLoadMore = () => {
    if (page < totalPages && !isSearch) {
      setPage(page + 1);
    }
    if (isSearch && page < searchPages) {
      setPage(page + 1);
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
        <TileComponent
          data={data}
          isError={isError}
          onLoadMore={onLoadMore}
          moreLoading={moreLoading || isMoreLoading}
        />
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
