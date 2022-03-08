import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback} from 'react';
import {RootState} from '../store/reducer';
import {useSelector} from 'react-redux';
import {Order} from '../slices/order';

const Orders = () => {
  const orders = useSelector((state: RootState) => state.order.orders);

  const toggleDetail = useCallback(() => {}, []);

  const renderItem = useCallback(
    ({item, index}: {item: Order; index: number}) => {
      return (
        <View style={styles.orderContainer}>
          <Pressable onPress={toggleDetail} style={styles.info}>
            <Text style={styles.eachInfo}>
              {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </Text>
            <Text style={styles.eachInfo}></Text>
          </Pressable>
        </View>
      );
    },
    [],
  );

  return (
    <FlatList
      data={orders}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.orderId}
    />
  );
};

export default Orders;

const styles = StyleSheet.create({
  orderContainer: {
    borderRadius: 5,
    margin: 5,
    padding: 10,
    backgroundColor: 'lightgray',
  },
  info: {
    flexDirection: 'row',
  },
  eachInfo: {
    flex: 1,
  },
  buttonWrapper: {
    flexDirection: 'row',
  },
  acceptButton: {
    backgroundColor: 'blue',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 10,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  rejectButton: {
    backgroundColor: 'red',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    flex: 1,
  },
  bottonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
