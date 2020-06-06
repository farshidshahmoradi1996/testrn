import React from 'react';
import {BookType} from 'src/types/book';
import {Text, View} from 'react-native';

interface Props {
  info: BookType;
}

const Book: React.FC<Props> = ({info}) => {
  return (
    <View>
      <Text>{info?.Title}</Text>
      <Text>{info?.Description}</Text>
    </View>
  );
};

export default Book;
