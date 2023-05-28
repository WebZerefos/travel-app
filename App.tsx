import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnBoardScreen from './src/screens/OnBoardScreen'
import HomeScreen from './src/screens/HomeScreen'
import DetailsScreen from './src/screens/DetailsScreen'

const Stack = createNativeStackNavigator()

const MyTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: '#ffffff',
	},
}

export default function App() {
	return (
		<NavigationContainer theme={MyTheme}>
			<Stack.Navigator initialRouteName='OnBoardScreen'>
				<Stack.Screen
					name='onBoard'
					component={OnBoardScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='Home'
					component={HomeScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='Details'
					component={DetailsScreen}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
