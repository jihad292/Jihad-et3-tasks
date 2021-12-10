import { StyleSheet } from "react-native";

export const prItemStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'black',
        marginTop:15,
        width:290,
        borderRadius:20,
        paddingBottom:15,
        marginBottom:20,
    },
    propoertySection:{
        flex: 1,
        flexDirection:'column',
        borderBottomColor:'thistle',
        borderBottomWidth:2,
        alignItems:'center'
    },
    propertyText:{
        color:'slategray',
        fontWeight:'bold',
        fontSize:15
    },
    propertyData:{
        color:'olivedrab', 
        fontWeight:'bold',
        fontSize:15
    },
    smallPropertiesDiv:{
        flexDirection:'row',
        justifyContent:'space-around',
        paddingHorizontal:12,
    },
    actionSymbol:{
        width:30,
        marginHorizontal:7
    },
    dateContainer:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    dateContainerText:{
        color:'olivedrab',
        fontWeight:'bold',
        fontSize:15
    },
})