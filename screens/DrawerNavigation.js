import CustomSidebarMenu from './CustomSidebarMenu';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import {Dimensions} from 'react-native';

const DrawerNavigator = createDrawerNavigator(
    {
        Home:{
            screen: Home
        }
    }
)