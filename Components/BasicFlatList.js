import React, {Component} from 'react';
import {
    AppRegistry,
    FlatList ,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native' ;

import FlatListData from '../Data/FlatListData';

class FlatListItem extends Component {                    /* The Container of the Flat List content */
    render() { 
        return (
            <View style={{
                  flex: 1 ,
                  backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen':'tomato' 
                 }} >

                        <Text style={styles.FlatListItemstyle} > {this.props.item.name} </Text>
                        <Text style={styles.FlatListItemstyle} > {this.props.item.foodDescription} </Text>
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

export default class Basicflatlist extends Component{       /* Main Class JUST to show the Flat List  */
    render() {
        return(
            <View style={{ flex:1 , marginTop:22 }} >
                <FlatList 
                 data={FlatListData}
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