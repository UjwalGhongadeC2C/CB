import React, {Component} from 'react';
import { AsyncStorage, String } from "react-native";

class Preferences extends Component {
 storeData = async (key, val) => {
  try {
    await AsyncStorage.setItem(key, val);
  } catch (error) {
    // Error saving data
  }
}

 retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // We have data!!
      console.log(value);
      return value;
    }
   } catch (error) {
     // Error retrieving data
     return '';
   }
}
}
const preferences = new Preferences();
export default preferences;