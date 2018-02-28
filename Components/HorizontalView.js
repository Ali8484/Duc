import React , {Component} from 'react' ;
import {
    View ,
    AppRegistry ,
Text , 
Dimensions ,
ScrollView ,
} from 'react-native' ;
export default class Horizontalview extends Component{
    render(){
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        
        return(
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={true}
                scrollIndicatorInsets={{top: 10 , left:10 , bottom:10 , right:10}}// ios
                onScroll={(event) => {
                    let logData = `Scrolled to x = ${event.nativeEvent.contentOffset.x} , y=${event.nativeEvent.contentOffset.y} `
                    console.log(logData);
                }}
                scrollEventThrottle={3}
                 >
            <View
            style={{
                backgroundColor:'#b6f2c4',
                flex:1 ,
                marginTop:20 ,
                width : screenWidth ,
                alignItems:'center',
                justifyContent:'center' }}
            >
                <Text
                style={{
                    fontSize:15,
                    padding:5,
                    color:'red',
                    textAlign:'center'
                  }}
                >
                SCREEN NUMBER 1
                    </Text>
                    </View>
             <View
                style={{
                backgroundColor:'#b6e5f2',
                flex:1 ,
                marginTop:20 ,
                width : screenWidth ,
                alignItems:'center',
                justifyContent:'center'
            }}
            >
                <Text
                style={{
                    fontSize:15,
                    padding:5,
                    color:'red',
                    textAlign:'center' }}
                >
                SCREEN NUMBER 2
                    </Text>
                    </View>
                    <View
                style={{
                backgroundColor:'#bab6f2',
                flex:1 ,
                marginTop:20 ,
                width : screenWidth ,
                alignItems:'center',
                justifyContent:'center'
            }}
            >
                <Text
                style={{
                    fontSize:15,
                    padding:5,
                    color:'red',
                    textAlign:'center' }}
                >
                SCREEN NUMBER 3
                    </Text>
                    </View>
                    <View
            style={{
                backgroundColor:'#f2eeb6',
                flex:1 ,
                marginTop:20 ,
                width : screenWidth ,
                alignItems:'center',
                justifyContent:'center' }}
            >
                <Text
                style={{
                    fontSize:15,
                    padding:5,
                    color:'red',
                    textAlign:'center'
                  }}
                >
                SCREEN NUMBER 4
                    </Text>
                    </View>
                    <View
            style={{
                backgroundColor:'#f2b6b6',
                flex:1 ,
                marginTop:20 ,
                width : screenWidth ,
                alignItems:'center',
                justifyContent:'center' }}
            >
                <Text
                style={{
                    fontSize:15,
                    padding:5,
                    color:'red',
                    textAlign:'center'
                  }}
                >
                SCREEN NUMBER 5
                    </Text>
                    </View>
                    <View
            style={{
                backgroundColor:'#c0b6f2',
                flex:1 ,
                marginTop:20 ,
                width : screenWidth ,
                alignItems:'center',
                justifyContent:'center' }}
            >
                <Text
                style={{
                    fontSize:15,
                    padding:5,
                    color:'red',
                    textAlign:'center'
                  }}
                >
                SCREEN NUMBER 6
                    </Text>
                    </View>
            </ScrollView>
        );
    }
}