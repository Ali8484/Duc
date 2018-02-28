import React, {Component} from 'react';
import {
    AppRegistry,
    FlatList ,
    StyleSheet,
    Text,
    View,
    Image,
    Alert
} from 'react-native' ;

import FlatListDataWithImagesForDelete from '../Data/FlatListDataWithImagesForDelete';
import Swipeout from 'react-native-swipeout';

class FlatListItem extends Component {    /* The Container of the Flat List content */
    constructor(props){
        super(props);
        this.state ={
            activeRowKey: null      /* This state saved your key of deleting object */
        };
    }
   
    render() { 
        const swipeSettings= {           /* This to enable content to swiping */
            autoClose: true,
            onClose: (secId, rowId , direction) => {   /* This to enable content to Close */
                if(this.state.activeRowKey != null ){  /* This to check if activeRowkey is null or not */
                this.setState({activeRowKey:null})
                }

            },
            onOpen:(secId , rowId , direction) => {     /* This to enable content to open */
                    this.setState({activeRowKey:this.props.item.key })
            },

          right:[                                      /* This to programming what to deal with content when you swipe it to "right" */
              {
                  onPress: () => {   
                      const deletingRow = this.state.activeRowKey;
                      Alert.alert(                     /* This to Alert when you want to delete */
                          'Alert' ,
                          'Are you sure you want to delete ?',
                          [
                              {text: 'No' , onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                              {text: 'Yes', onPress: () => {
                                    FlatListDataWithImagesForDelete.splice(this.props.index, 1); /* Remove object from array */
                                    
                                    //Refresh FlatList after remove from array !
                                    this.props.parentFlatList.refreshFlatList(deletingRow);
                              } },
                          ],
                          { cancelable: true }
                      );
                  }, 
                  text: 'Delete' , type: 'delete'  /* the delete operation  */
              }
          ],
          rowId: this.props.index,
          sectionId: 1   /* the default is number one  */
          };

         return (
           /* Here we push the contents inside the swipeout */

           <Swipeout {...swipeSettings}  > 
            <View style={{
                  flex: 1 ,
                  flexDirection:'column',
            }}>
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
                         flexDirection:'column',
                         height:100
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
                </Swipeout>

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

export default class BasicflatlistImageDelete extends Component{       /* Main Class to show the Flat List  */
    constructor(props){
        super(props);
        this.state = ({
            deletedRowKey: null ,                           /* Initilize a state */
        });
    }
    refreshFlatList = (deletedKey) => {                     /* Refresh by changing a state to View the list after delettion */
        this.setState((prevState) => {
                                            
            return {                                                    /* Change state when refresh */
                deletedRowKey: deletedKey
            }
        });

    }
    render() {
        return(
            <View style={{ flex:1 , marginTop:22 }} >
                <FlatList 
                 data={FlatListDataWithImagesForDelete}
                 renderItem={({item, index}) => {
                     return(
                        <FlatListItem 
                        item={item} index={index} parentFlatList={this}  /* <----- make FlatList as props of FlatListItem   */
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