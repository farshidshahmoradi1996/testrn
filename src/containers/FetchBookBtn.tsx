import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

interface Props {
  onPress(): void;
}
const FetchBookBtn: React.FC<Props> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Text>Get Books List</Text>
    </TouchableOpacity>
  );
};

export default FetchBookBtn;
