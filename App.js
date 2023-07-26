import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './Src/Component/HomeScreen/Screen1';
import Screen2 from './Src/Component/HomeScreen/Screen2';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Src/Component/Login/Login';
import Signup from './Src/Component/Signup/Signup';
import PaymentMethod from './Src/Component/PaymentMethod/PaymentMethod';
import Home from './Src/Component/Home/Home';
import Payments from './Src/Component/Payments/Payments';
import Services from './Src/Component/Services/Services';
import ServiceDetails from './Src/Component/Services/ServiceDetails';
import CartDetails from './Src/Component/Services/CartDetails';
import Success from './Src/Component/Payments/Success';
import Adminhome from "./Src/Component/Admin/Adminhome"
import Ratings from './Src/Component/Ratings/Ratings';
import EmployeeHome from './Src/Component/EmployeeScreen/EmployeeHome';
import EmployeeLogin from './Src/Component/EmployeeScreen/EmployeeLogin';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Screen1" component={Screen1} />
        {/* <Stack.Screen name="Screen2" component={Screen2} /> */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="services" component={Services} />
        <Stack.Screen name="serviceDetails" component={ServiceDetails} />
        <Stack.Screen name="cartDetails" component={CartDetails} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
        <Stack.Screen name="Payments" component={Payments} />
        <Stack.Screen name="success" component={Success} />
        <Stack.Screen name="rating" component={Ratings} />

        <Stack.Screen name="adminhome" component={Adminhome} />
        <Stack.Screen name="employeehome" component={EmployeeHome} />
        <Stack.Screen name="employeeLogin" component={EmployeeLogin} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
