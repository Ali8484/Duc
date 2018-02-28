import React , { Component} from 'react' ;
import { Appregistry ,
ScrollView ,
Image , 
Text,
View ,
TextInput,
StyleSheet, 
Dimensions,
} from 'react-native' ;

export default class VerticalScrollView extends Component {
    render() {
        let screenWidth = Dimensions.get('window').width 
        return( 
        <ScrollView
            maximumZoomScale={3}
            minimumZoomScale={0.2}
            keyboardDismissMode='on-drag'
            // contentContainerStyle={{paddingLeft:2, paddingRight:2 }}
        >

            <Image
            // style = {styles.stretch}
            source={ require('../Images/S.jpg') }
            style={{width: screenWidth, height:screenWidth * 456 / 612 , marginTop:20}}
            >
                </Image>

                <Text
                    style={{
                        fontSize:20,
                        padding:15,
                        color:'white',
                        textAlign:'center',
                        backgroundColor:'green'
                    }} >
                    Hello Are You Okay ???
                    </Text>

                    <TextInput
                        style={{ padding:10 , margin:10 , borderWidth:1 }}
                        placeholder='Enter text' >
                        </TextInput>

                        <Image
            // style = {styles.stretch}
            source={ require('../Images/S.jpg') }
            style={{width: screenWidth, height:screenWidth * 456 / 612 , marginTop:20}}
            >
                </Image>

                        <Text
                    style={{
                        fontSize:20,
                        padding:15,
                        color:'yellow',
                        textAlign:'center',
                        backgroundColor:'blue',
                    }} >
                    Submit it 
                    </Text>

                    <TextInput
                        style={{ padding:10 , margin:10 , borderWidth:1 }}
                        placeholder='Enter text' >
                        </TextInput>

                        <Image
            // style = {styles.stretch}
            source={ require('../Images/S.jpg') }
            style={{width: screenWidth, height:screenWidth * 456 / 612 , marginTop:20}}
            >
                </Image>

                        <Text
                    style={{
                        fontSize:20,
                        padding:15,
                        color:'yellow',
                        textAlign:'center',
                        backgroundColor:'red',
                    }} >
                    Again do it
                    </Text>

                    <TextInput
                        style={{ padding:10 , margin:10 , borderWidth:1 }}
                        placeholder='Enter text' >
                        </TextInput>
                        
            </ScrollView>
        );
    }
}