import * as React from 'react';
import {Image} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Reg_person from './Registration_person';
import Reg_pet from './Registration_pet';
import Reg_plant from './Registration_plant';

const Tab = createMaterialTopTabNavigator();

export default function RegistrationScreen() {
  return (
    <Tab.Navigator
    tabBarOptions={{ showLabel:false}}>
      <Tab.Screen 
      name="Person" 
      component={Reg_person}
      options={{
        tabBarIcon:({ focused }) => {
          return(
            <Image 
            source = {focused?require('../Source/person_activated.png') : require('../Source/person_inactivated.png')}
            style={
              {width:30, height:30, justifyContent : "center", alignItems : "center"}}
            />
          );
        }
      }} />
      <Tab.Screen 
      name="Pet" 
      component={Reg_pet}
      options={{
        tabBarIcon:({ focused }) => {
          return(
            <Image 
            source = {focused?require('../Source/pet_activated.png') : require('../Source/pet_inactivated.png')}
            style={{width:30, height:30, justifyContent : "center", alignItems : "center"}}
            />
          );
        }
      }}/>
      <Tab.Screen 
      name="Plant" 
      component={Reg_plant}
      options={{
        tabBarIcon:({ focused }) => {
          return(
            <Image 
            source = {focused?require('../Source/plant_activated.png') : require('../Source/plant_inactivated.png')}
            style={{width:30, height:30, justifyContent : "center", alignItems : "center"}}
            />
          );
        }
       }} />
    </Tab.Navigator>
  )
}