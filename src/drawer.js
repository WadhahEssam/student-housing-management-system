import { createDrawerNavigator, createStackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
 
import logout from './logout';
import Home from "./Home";
import ComplaintsScreen from './Complaints/ComplaintsScreen';

const drawernav = createDrawerNavigator({
  // For each screen that you can navigate to, create a new entry like this:
  Home: {
    screen: Home ,
  },
  Logout: {
    screen: logout
  }, 
  Complaints: {
    screen: ComplaintsScreen
  }
  
});

export default drawernav;
