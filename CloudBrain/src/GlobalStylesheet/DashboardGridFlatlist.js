import { StyleSheet, Dimensions} from 'react-native';


const window = Dimensions.get('window');

const DashboardGridFlatlist = StyleSheet.create({
    MainContainer: {
      alignItems: "center",
      height: window.height - 85,
      backgroundColor: "white",
    },
  
    flatListWrapperStyle: {
      justifyContent: "space-between"
    },
  
    collectionCellView: {
      margin: 10,
      backgroundColor: "white",
      width: 150,
      height: 170,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
  
      shadowColor: "lightgray",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 5,
      elevation: 1,
      zIndex: 2
    },
  
    imageThumbnail: {
      alignItems: "center",
      height: 80,
      width: 80,
      borderRadius: 10
    },
  
    nameStyle: {
      marginTop: 10,
      width: 130,
      color: "black",
      fontSize: 13,
      textAlign: "center"
    },
  
    regionStyle: {
      paddingTop: 20,
      width: 100,
      color: "gray",
      fontSize: 12,
      textAlign: "center"
    },
  
    activityIndicator: {
      flex: 1,
      height: 80,
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: "center",
      justifyContent: "center"
    }
  });

  export default DashboardGridFlatlist;