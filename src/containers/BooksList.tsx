import React from 'react';
import {FlatList, View, Text} from 'react-native';

//local
import {BookType} from 'src/types/book';
import Book from '../components/Book';

interface Props {
  data?: BookType[];
}

const BookList: React.FC<Props> = ({data}) => {
  //check data type
  if (!Array.isArray(data)) {
    return (
      <View>
        <Text>Bad Response</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      renderItem={({item}) => <Book info={item} />}
      keyExtractor={(item) => item?.ID?.toString()}
    />
  );
};
export default BookList;
