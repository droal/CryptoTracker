import React, { Component } from 'react'
import { View, Text } from 'react-native'
import CoinsScreen from './CoinsScreen'


class CoinDetailScreen extends Component{

    componentDidMount(){
        console.log("coin : ", this.props.route.params)
    }


    render(){
        return(
            <View>
                <Text>CoinDetailScreen</Text>
            </View>
        )
    }
}

export default CoinDetailScreen
