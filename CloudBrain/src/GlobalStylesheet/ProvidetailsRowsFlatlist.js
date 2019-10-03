import { StyleSheet, Dimensions} from 'react-native';
import COLORS from '../Util/Theme/ColorConstants';
const window = Dimensions.get('window');

const ProviderDetailsRowsFlatlist_STYLES = StyleSheet.create({

    
    MainContainer: {

        alignItems:'center',
        height : window.height - 85,
        backgroundColor: 'white'
        
    },

    noDataAvailableText: {
        
        color:COLORS.DrawerText,
        width: 250,
        marginTop:15,
        fontSize:15,
        textAlign: 'left'
        
    },

    cellParentView:{
        alignItems: 'center',
        width: window.width - 50, 
    },

    firstInnerParentCellView: {
        flexDirection: 'row',

        // borderWidth: 0.5,
        // borderColor: 'lightgray',
        // borderBottomColor: 'white',

    },

    secondInnerParentFooterView: {
        //Code 1
        // flexDirection: 'column',
        // borderColor: 'lightgray',
        // borderWidth: 0.7,
        // borderRadius: 10,

        //Code 2
        //margin: 10,
        backgroundColor: "white",
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
 

    ProviderDetailsCellView: {
    
        flexDirection: 'row',
        margin: 2 , 
        backgroundColor: 'white',
        width: 350, 
        height: 100,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 10,
   
        shadowColor: 'lightgray',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 1,
          zIndex:2
   
     },

     osImageIcon: {
         marginTop: 10,
        marginLeft: 2,
        borderRadius: 25,
        width: 50,
        height: 50,
    },
    
    osNameText: {
        
        color:COLORS.DrawerText,
        width: 250,
        marginTop:15,
        fontSize:15,
        textAlign: 'left'
        
    },

    onText: {
        marginTop: 15,
        fontSize: 15,
        textAlign: 'right',
        marginRight: 15,

        color: 'green',
    },

    offText: {
        marginTop: 15,
        fontSize: 15,
        textAlign: 'right',
        marginRight: 15,

        color: 'red',
    },

    onStatusView: {
    
        justifyContent: 'flex-end',
        //marginRight: 5,
        // paddingTop: 5,
        paddingBottom: 90,
        //marginRight: 5,
        width: 3,
        height: 10,
        //borderRadius: 5,
        backgroundColor: 'green'
    },

    ofStatusView: {
        justifyContent: 'flex-end',
        //marginRight: 5,
        // paddingTop: 5,
        paddingBottom: 90,
        //marginRight: 5,
        width: 3,
        height: 10,
        //borderRadius: 5,
        backgroundColor: 'red'
    },

    cellFooterView: {
        height: 200,
        width: 350,
        backgroundColor: 'white',
        flexDirection: 'column',

    },

    cellFooter_HEADING: {
        //Alignment
        padding: 3,
        width: 270,
        textAlign: 'left',
        marginLeft: 10,

        //Config
        color:COLORS.DrawerText,
        fontSize:15,
        fontWeight: 'bold',
    },

    cellFooterContents: {
        //Alignment
        padding: 2,
        width: 270,
        textAlign: 'left',
        marginLeft: 10,

        //Config
        color:COLORS.DrawerText,
        fontSize:15,
    }


});

export default ProviderDetailsRowsFlatlist_STYLES;