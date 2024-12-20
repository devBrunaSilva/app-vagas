import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import theme from './src/theme';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Details from './src/screens/Details';
import FormScreen from './src/screens/Form';
import List from './src/screens/List';
import Login from './src/screens/Login';
import Profile from './src/screens/Profile';
import { AuthProvider, useAuth } from './src/contexts/AuthContext';
import ProtectedRoute from './src/routes/ProtectedRoute';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

function Auth() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color }) => {
          let iconName: 'home' | 'home-outline' | 'person' | 'person-outline';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={16} color={color} />;
        },
        tabBarActiveTintColor: theme.COLORS.GREEN,
        tabBarInactiveTintColor: theme.COLORS.GRAY_03,
        tabBarStyle: {
          backgroundColor: theme.COLORS.GRAY_01,
        },
        tabBarLabelStyle: {
          fontWeight: 800,
        },
      })}
    >
      <Tab.Screen name='Home'>
        {() => (
          <ProtectedRoute>
            <HomeStack.Navigator
              screenOptions={{
                headerShown: false,
                contentStyle: { paddingTop: insets.top },
              }}
            >
              <HomeStack.Screen name='List' component={List} />
              <HomeStack.Screen name='Details' component={Details} />
            </HomeStack.Navigator>
          </ProtectedRoute>
        )}
      </Tab.Screen>
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{ headerStyle: { paddingTop: insets.top } }}
      />
    </Tab.Navigator>
  );
}

function Routes() {
  const { isAuthenticated } = useAuth();

  return(
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{ headerShown: false }}
      >
        {isAuthenticated ? (
          <Stack.Screen name='Auth' component={Auth} />
        ) : (
          <>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='FormScreen' component={FormScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <StatusBar style='auto' />
        <Routes />        
      </ThemeProvider>
    </AuthProvider>
  );
}
