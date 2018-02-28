import React , { Component } from 'react' ;
import { AppRegistry } from 'react-native';
import App from './App';
import VerticalScroll from './Components/VerticalScroll'
import Horizontalview from './Components/HorizontalView';
import Viewerpager from './Components/Viewerpager';
import Basicflatlist from './Components/BasicFlatList';
import BasicflatlistImage from './Components/BasicFlatListWithImages';
import BasicflatlistImageDelete from './Components/BasicFlatListWithImageWithDelete';




AppRegistry.registerComponent('duc', () => BasicflatlistImageDelete );
