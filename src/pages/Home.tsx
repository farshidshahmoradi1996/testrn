import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import useSWR from 'swr';

//local
import FetchBookBtn from './../containers/FetchBookBtn';
import BookList from '../containers/BooksList';
import {BookType} from '../types/book';

const Home: React.FC = () => {
  const {data, isValidating, revalidate} = useSWR<BookType[]>('/api/Books', {
    revalidateOnMount: false,
  });

  return (
    <View style={styles.container}>
      {isValidating ? (
        <ActivityIndicator />
      ) : (
        <FetchBookBtn onPress={revalidate} />
      )}
      {data && <BookList data={data} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Home;
