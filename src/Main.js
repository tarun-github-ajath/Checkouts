import React,{Component} from 'react';
import {View,Text} from 'react-native'

export default class Main extends Component {
    
    componentDidMount(){
        this.props.navigation.navigate('intro')
    }
    render(){
        return(
            <View>
                <Text>Main</Text>
            </View>
        )
    }
}