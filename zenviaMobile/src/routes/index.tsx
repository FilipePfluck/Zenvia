import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Dashboard from '../pages/dashboard'
import Client from '../pages/client'
import AddClient from '../pages/addClient'
import SendMessage from '../pages/SendMessage'
import Login from '../pages/Login'

const App = createStackNavigator()

const AppRoutes: React.FC = ()=>{
    return(
        <App.Navigator screenOptions={{
            headerShown: false,
            cardStyle: {backgroundColor: "#312e38"}
        }} >
            
            <App.Screen name="Login" component={Login} />
            <App.Screen name="SendMessage" component={SendMessage} />
            <App.Screen name="AddClient" component={AddClient} />
            <App.Screen name="Client" component={Client} />
            <App.Screen name="Dashboard" component={Dashboard} />

        </App.Navigator>
    )
}

export default AppRoutes