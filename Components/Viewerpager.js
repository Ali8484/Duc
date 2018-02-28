import React , {Component} from 'react' ;
import {
    View ,
    AppRegistry ,
Text , 
Dimensions ,
ViewPagerAndroid ,
} from 'react-native' ;
export default class Viewerpager extends Component{
    render(){
        return(
            <ViewPagerAndroid 
            style={{flex:1}}
            initialPage={2}
            onPageScroll={(event) => {
                // console.log(`offset = ${ event.nativeEvent.offset }`)
            }}
           onPageScrollStateChanged={(state) => {
                // console.log(`Scrolling state = ${ state }`)
            }}
            onPageSelected={(event)=> {
                console.log(`Scrolled to page: ${event.nativeEvent.position}`)
            } }
            >
                <View style={{ backgroundColor:'lightseagreen' }}>
                    <Text>
                        screen 1
                        </Text>
                    </View>
                    <View style={{ backgroundColor:'palevioletred' }}>
                    <Text>
                        screen 2
                        </Text>
                    </View>
                    <View style={{ backgroundColor:'salmon' }}>
                    <Text>
                        screen 3
                        </Text>
                    </View>
                </ViewPagerAndroid>
        );
    }
}