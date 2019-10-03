import { StyleSheet, Dimensions} from 'react-native';

import COLORS from '../Util/Theme/ColorConstants';
const window = Dimensions.get('window');

const MigrationDetailStyle = StyleSheet.create({

  MainContainer: {
    alignItems: "center",
    height: window.height - 85,
    backgroundColor: "white",
  },

  countView: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.appBlueTheme,
    marginBottom: 20,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent:'center',
  },

  nameStyle: {
    marginTop: 10,
    width: 130,
    color: "black",
    fontSize: 13,
    textAlign: "center"
  },

  countText: {
    color: 'white',
    fontSize: 14,
    textAlign: "center",
    fontWeight: 'bold',
  },

collectionCellView: {
    margin: 10,
    backgroundColor: "white",
    width: 150,
    height: 186,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    borderColor: 'lightgray',

    shadowColor: "lightgray",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 1,
    zIndex: 2
  },

  flatListWrapperStyle: {
    justifyContent: "space-between"
  },

  //1. Source Destination styles--------------------
  sourceDestinationContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  sourceThumbnail: {
    alignItems: "center",
    height: 60,
    width: 60,
    borderRadius: 10
  },

  destinationThumbnail: {
    alignItems: "center",
    height: 60,
    width: 60,
    borderRadius: 10
  },

  arrowImage: {
    alignItems: "center",
    height: 15,
    width: 25,
  },

  //2. Instance name styles--------------------
  instanceNameStyle: {
    marginTop: 10,
    width: 130,
    color: "black",
    fontSize: 13,
    textAlign: "center",
    fontWeight: 'bold',
  },

  dateTimeStyle: {
    marginTop: 5,
    marginBottom: 10,
    width: 130,
    color: "gray",
    fontSize: 13,
    textAlign: "center",
  },

  //3. Progress bar styles--------------------
  progressViewContainer: {
    flexDirection: 'row',
    height: 45,
    width: 150,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    borderBottomColor: 'lightgray',
    backgroundColor: COLORS.lightBlue,
  },

  progressImage: {
    marginTop: 10,
    justifyContent: 'flex-start',
    marginRight: 10,

    height: 40,
    width: 40,
  },

  progressPercent: {
    marginTop: 10,
    justifyContent: 'flex-end',

    color: "black",
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default MigrationDetailStyle;