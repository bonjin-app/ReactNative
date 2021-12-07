import React from 'react';
import {Text, View, Button, SafeAreaView} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function HomeScreen({navigation}) {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Drawer 열기" onPress={() => navigation.openDrawer()} />
      <Button
        title="SettingScreen 열기"
        onPress={() => navigation.navigate('Setting')}
      />
    </View>
  );
}

function SettingScreen({navigation}) {
  return (
    <View>
      <Text>SettingScreen</Text>
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={({navigation}) => (
          <SafeAreaView>
            <Text>A Custom Drawer</Text>
            <Button
              title="Drawer 닫기"
              onPress={() => navigation.closeDrawer()}
            />
          </SafeAreaView>
        )}
        screenOptions={{
          drawerPosition: 'left',
          drawerActiveBackgroundColor: '#fb8c00',
          drawerActiveTintColor: 'white',
        }}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{headerLeft: () => <Text>Left</Text>}}
        />
        <Drawer.Screen name="Setting" component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
