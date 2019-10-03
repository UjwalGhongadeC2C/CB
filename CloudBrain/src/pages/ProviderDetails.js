import React, { Component } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Text
} from "react-native";

import ProviderDetailsRowsFlatlist_STYLES from "../GlobalStylesheet/ProvidetailsRowsFlatlist";
import NavigationService from '../Util/Navigation/NavigationService';
import jsonNullHandle from '../Util/CommonFunction';
import COLORS from '../Util/Theme/ColorConstants';

import { ListItem } from "native-base";

export default class ProviderDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNetworkConnected: false,
      isActivityLoading: false,
      prevProp: null,
      dataSource: [],
      currentActionType: "",
      noDataAvailable: false

      
    };
  }

  componentDidMount() {
    this.startActivityIndicator
    console.log('navigation param', this.props.navigation.state.params.selectedVmsForProvider);

    let vmResources = this.props.navigation.state.params.selectedVmsForProvider.data.resources
var dataAvailable = false;
if (vmResources.length > 0){
  dataAvailable = true
}
    this.setState({
      dataSource: vmResources,
      noDataAvailable : dataAvailable
    });
  }

 

  static navigationOptions = {
    title: "Provider Details",
    headerLeft: (

      <TouchableOpacity  onPress={() => NavigationService.navigate('DashboardObj')}>
           <Image
             source={require('../resources/Images/arrow-left.png')}
             style={{ width: 20, height: 30, marginLeft: 5 }}
           />
  
      </TouchableOpacity>
           )
  };

  render() {
    return (
      <View style={ProviderDetailsRowsFlatlist_STYLES.MainContainer}>
     <Text style={{color:COLORS.DrawerText,
        width: 250,
        marginTop:15,
        fontSize:15,
        textAlign: 'left', opacity: this.state.noDataAvailable ? 1.0 : 0.0, flex: 1}}> No Data Available for selected VM </Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <ListItem noBorder={true}>
            {/* Take parent view holding two views as - flexRow */}
              <View style={ProviderDetailsRowsFlatlist_STYLES.cellParentView}>
                
                {/*1. 2nd innerParent will hold content as - flexColumn */}
                <View style={ProviderDetailsRowsFlatlist_STYLES.secondInnerParentFooterView}>

                 {/*1. 1st innerParent will hold content as - flexRow */}
                 <TouchableOpacity style={ProviderDetailsRowsFlatlist_STYLES.firstInnerParentCellView}>
                  <Image style={ProviderDetailsRowsFlatlist_STYLES.osImageIcon}
                        source={this.checkOsImage(this.checkNullValue(item.operating_system.product_name))}/>
                  <Text style={ProviderDetailsRowsFlatlist_STYLES.osNameText}>{item.name}</Text> 
               
                  <Text style={this.onOffStyle(item.power_state)}>{this.checkPowerState(item.power_state)}</Text>
                </TouchableOpacity>

                  <Text style={ProviderDetailsRowsFlatlist_STYLES.cellFooterContents}>Availability zone: {item.availability_zone.name}</Text>

                  <Text style={ProviderDetailsRowsFlatlist_STYLES.cellFooter_HEADING}>Hardware</Text>
                  <Text style={ProviderDetailsRowsFlatlist_STYLES.cellFooterContents}>Virtualization type: {item.hardware.virtualization_type}</Text>
                  <Text style={ProviderDetailsRowsFlatlist_STYLES.cellFooterContents}>Root Device type: {item.hardware.root_device_type}</Text>
                  <Text style={ProviderDetailsRowsFlatlist_STYLES.cellFooterContents}>Memory: {item.hardware.memory_mb} MB</Text>
                  <Text style={ProviderDetailsRowsFlatlist_STYLES.cellFooterContents}>Architecture: {item.hardware.bitness} bit</Text>

                  <Text style={ProviderDetailsRowsFlatlist_STYLES.cellFooter_HEADING}>Flavor</Text>
                  <Text style={ProviderDetailsRowsFlatlist_STYLES.cellFooterContents}>Description: {item.flavor.description}</Text>
                  <Text style={ProviderDetailsRowsFlatlist_STYLES.cellFooterContents}>CPUs: {item.flavor.cpu_cores}</Text>
                  
                </View>
              </View>
            </ListItem>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }

  checkNullValue(value) {
    if (value == null) {
      return ""
    }
    else {
      return value.toLowerCase()
    }
  }

  checkPowerState(powerState) {
    if (powerState.includes('on')) {
        return 'On';
    } 
    else {
       return 'Off';
    }
  }

  onOffStyle(powerState) {
    if (powerState.includes('on')) {
      return ProviderDetailsRowsFlatlist_STYLES.onText;
  } 
  else {
     return ProviderDetailsRowsFlatlist_STYLES.offText;
  }
  }

  checkOsImage(osName) {
    if (osName != null) {
      if (osName.includes("centos")) {
        return require("../resources/Images/centos.png");
      } else if (osName.includes("debian")) {
        return require("../resources/Images/debian.png");
      } else if (osName.includes("fedora")) {
        return require("../resources/Images/fedora.png");
      } else if (osName.includes("linux")) {
        return require("../resources/Images/linux.png");
      } else if (osName.includes("redhat")) {
        return require("../resources/Images/redhat.png");
      } else if (osName.includes("ubuntu")) {
        return require("../resources/Images/ubantu.png");
      } else {
        return require("../resources/Images/window.png");
      }
    }
  }
}
