import {useRoute} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function IDText() {
  const route = useRoute();
  return <Text style={styles.text}>id: {route.params.id}</Text>;
}

const DetailScreen = ({route, navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      title: `상세 정보 - ${route.params.id}`,
    });
  }, [navigation, route.params.id]);

  return (
    <View style={styles.block}>
      <IDText />
      <View style={styles.buttons}>
        <Button
          title="다음"
          onPress={() => navigation.push('Detail', {id: route.params.id + 1})}
        />
        <Button title="뒤로가기" onPress={() => navigation.pop()} />
        <Button title="처음으로" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  block: {},
});
