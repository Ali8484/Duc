import React, {Component} from 'react';
import {
    AppRegistry,
    FlatList ,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native' ;

import FlatListDataWithImages from '../Data/FlatListDataWithImages';

class FlatListItem extends Component {                    /* The Container of the Flat List content */
    render() { 
        return (
            <View>
                <View style={{
                  flex: 1 ,
                  flexDirection:'row',
                  backgroundColor: 'mediumseagreen'

                   }} >

                <Image source={{uri:this.props.item.Image}} 
                 style={{width:100 , height:100, margin: 5 }}
                  >
                </Image>
                     <View style={{ 
                         flex:1 ,
                         flexDirection:'column'
                      }}>
                        <Text style={styles.FlatListItemstyle} > {this.props.item.name} </Text>
                        <Text style={styles.FlatListItemstyle} > {this.props.item.foodDescription} </Text>
                     </View>

                </View>
                <View style={{
                    height:1,
                    backgroundColor:'white'
                }} >

                    </View>
                </View>
                
           
        );
    }
}

const styles = StyleSheet.create({                      /* Styling the flat list banner (Background) */
    FlatListItemstyle:{
        color:'white',
        padding:10 ,
        fontSize: 16 ,
    }
});

export default class BasicflatlistImage extends Component{       /* Main Class to show the Flat List  */
    render() {
        return(
            <View style={{ flex:1 , marginTop:22 }} >
                <FlatList 
                 data={FlatListDataWithImages}
                 renderItem={({item, index}) => {
                     return(
                        <FlatListItem 
                        item={item} index={index} 
                        >
                            </FlatListItem>
                     );
                 } }
                >  
                    </FlatList>
                </View>
        );
    }
}