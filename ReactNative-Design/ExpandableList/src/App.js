import React, {useEffect, useState} from 'react';
import {
  LayoutAnimation,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import Accordian from './Accordion';

const CONTENT = [
  {
    isExpanded: false,
    category_name: 'Item 1',
    subCategory: [
      {id: 1, val: 'Sub 1'},
      {id: 2, val: 'Sub 2'},
      {id: 3, val: 'Sub 3'},
    ],
  },
  {
    isExpanded: false,
    category_name: 'Item 2',
    subCategory: [
      {id: 1, val: 'Sub 1'},
      {id: 2, val: 'Sub 2'},
      {id: 3, val: 'Sub 3'},
    ],
  },
  {
    isExpanded: false,
    category_name: 'Item 3',
    subCategory: [
      {id: 1, val: 'Sub 1'},
      {id: 2, val: 'Sub 2'},
      {id: 3, val: 'Sub 3'},
    ],
  },
  {
    isExpanded: false,
    category_name: 'Item 4',
    subCategory: [
      {id: 1, val: 'Sub 1'},
      {id: 2, val: 'Sub 2'},
      {id: 3, val: 'Sub 3'},
    ],
  },
  {
    isExpanded: false,
    category_name: 'Item 5',
    subCategory: [
      {id: 1, val: 'Sub 1'},
      {id: 2, val: 'Sub 2'},
      {id: 3, val: 'Sub 3'},
    ],
  },
  {
    isExpanded: false,
    category_name: 'Item 6',
    subCategory: [
      {id: 1, val: 'Sub 1'},
      {id: 2, val: 'Sub 2'},
      {id: 3, val: 'Sub 3'},
    ],
  },
];

const ExpandableComponent = ({item, onPress}) => {
  const [layoutHeight, setLayoutHeight] = useState(0);

  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);

  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.item}>
        <Text style={styles.itemText}>{item.category_name}</Text>
      </TouchableOpacity>
      <View
        style={{
          height: layoutHeight,
          overflow: 'hidden',
        }}>
        {item.subCategory.map((item, index) => (
          <TouchableOpacity key={index} style={styles.content}>
            <Text style={styles.text}>
              {index}. {item.val}
            </Text>
            <View style={styles.separator} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const App = () => {
  const [multiSelect, setMultiSelect] = useState(false);
  const [items, setItems] = useState(CONTENT);
  const [newItems, setNewItems] = useState([]);

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const updateLayout = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    const array = [...items];
    if (multiSelect) {
      array[index].isExpanded = !array[index].isExpanded;
    } else {
      array.map((item, i) => {
        i === index
          ? (array[i].isExpanded = !array[i].isExpanded)
          : (array[i].isExpanded = false);
      });
    }
    setItems(array);
  };

  const renderAccordians = () => {
    const items = [];
    newItems.forEach(f => {
      items.push(<Accordian title={f.title} data={f.data} />);
    });
    return items;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {renderAccordians()}
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titleText}>Expandable List View</Text>
          <TouchableOpacity onPress={() => setMultiSelect(!multiSelect)}>
            <Text style={styles.headerButton}>
              {multiSelect
                ? 'Enable Single \n Expand'
                : 'Enable Multiple \n Expand'}
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {items.map((item, index) => (
            <ExpandableComponent
              key={item.category_name}
              item={item}
              onPress={() => {
                updateLayout(index);
              }}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
  },
  titleText: {
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerButton: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },
  item: {
    backgroundColor: 'orange',
    padding: 20,
  },
  itemText: {
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#FFF',
  },
  text: {
    fontSize: 16,
    padding: 10,
  },
  separator: {
    height: 0.5,
    backgroundColor: '#c8c8c8',
  },
});
