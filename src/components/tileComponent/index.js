import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import formate from '../../utils/string-utils';
import { imageApi } from '../../utils/api-constants';
import ActivityIndicatorComponent from '../activityIndicatorComponent';

const TileComponent = ({ data, isError, onLoadMore, moreLoading }) => {
  const renderItem = ({ item }) => {
    const img = formate(imageApi, item.poster_path);
    return (
      <View style={styles.item}>
        <Text style={styles.imageTitle}>{item.title}</Text>

        <Image
          style={styles.image}
          source={{
            uri: img,
          }}
        />
        <Text style={styles.imageReleased}>
          {'\n Released on:- '}
          {item.release_date}
        </Text>
        <Text style={styles.imageOverView}>{item.overview}</Text>
      </View>
    );
  };
  const renderFooter = () => {
    return moreLoading ? <ActivityIndicatorComponent /> : null;
  };
  return (
    <>
      {data.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          data={data}
          keyExtractor={item => item.id}
          extraData={data}
          onEndReachedThreshold={0.2}
          onEndReached={onLoadMore}
          ListFooterComponent={renderFooter}
          enableEmptySections={true}
        />
      ) : (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            {isError
              ? 'Sorry, something went wrong. Please try again'
              : "Oops! It looks like aren't there any great matches for your search"}
          </Text>
        </View>
      )}
    </>
  );
};

export default TileComponent;

const styles = StyleSheet.create({
  item: {
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    flex: 1,
    margin: 2,
    borderColor: '#04abc190',
    borderWidth: 2,
    borderRadius: 12,
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  imageTitle: {
    marginVertical: 8,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
  imageReleased: {
    fontSize: 12,
    fontWeight: '300',
    color: '#ffffff',
  },
  imageOverView: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '300',
    color: '#ffffff',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  errorText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',
  },
});
