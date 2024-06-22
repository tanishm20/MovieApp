import { FlatList, Image, Text, View } from 'react-native';
import React from 'react';
import formate from '../../utils/string-utils';
import { imageApi } from '../../utils/api-constants';
import { ActivityIndicatorComponent } from '../activityIndicatorComponent';
import { styles } from './style';

export const TileComponent = ({ data, isError, onLoadMore, moreLoading }) => {
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
