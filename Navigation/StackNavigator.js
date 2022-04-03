import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Tempapi from '../Screens/Tempapi'
import SplashScreen from '../Components/SplashScreen'

const Stack = createStackNavigator()

const StackNavigator = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: "white"
                }
            }}
        >
            <Stack.Screen name = "SplashScreen" component = { SplashScreen } />
            <Stack.Screen name = "Tempapi" component = { Tempapi } />
        </Stack.Navigator>
    )
}

export default StackNavigator