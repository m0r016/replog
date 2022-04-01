import { SafeAreaView } from 'react-native';
import React from 'react';
import newRegisterPage from './src/pages/newRegisterPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Replog() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="登録" component={newRegisterPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
