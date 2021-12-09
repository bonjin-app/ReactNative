import React, {useContext} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchContext from '../contexts/SearchContext';

const SearchHeader = () => {
  const {width} = useWindowDimensions();
  const {keyword, setKeyword} = useContext(SearchContext);

  return (
    <View
      style={[
        styles.block,
        {
          width: width - 32,
        },
      ]}>
      <TextInput
        style={styles.input}
        placeholder="검색어를 입력하세요"
        value={keyword}
        onChangeText={setKeyword}
        autoFocus
      />
      <Pressable
        onPress={() => setKeyword('')}
        style={({pressed}) => [styles.button, pressed && {opacity: 0.5}]}>
        <Icon name="cancel" size={20} color="#9e9e9e" />
      </Pressable>
    </View>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {flex: 1},
  button: {marginLeft: 8},
});
