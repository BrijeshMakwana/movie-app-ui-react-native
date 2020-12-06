import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../container/Home';
import Details from '../container/Details';

const HomeStack = createStackNavigator();

const AppNavigator = () => {
    return(
        <HomeStack.Navigator headerMode='none'>
            <HomeStack.Screen name='Home' component={Home} />
            <HomeStack.Screen name='Details' component={Details} />
        </HomeStack.Navigator>
    )
}

export default function Routes() {
    return(
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    )
}