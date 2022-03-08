import {FlatList, StyleSheet} from 'react-native';
import React, {useCallback} from 'react';
import {RootState} from '../store/reducer';
import {useSelector} from 'react-redux';
import EachOrder from '../components/EachOrder';

const Orders = () => {
  const orders = useSelector((state: RootState) => state.order.orders);

  const renderItem = useCallback(({item, index}) => {
    return <EachOrder item={item} />;
  }, []);

  return (
    <FlatList
      data={orders}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.orderId}
    />
  );
};

export default Orders;

const styles = StyleSheet.create({});
