import React, { Component } from 'react'
import { View, ActivityIndicator, FlatList, StyleSheet } from 'react-native'
import Http from '../../libs/http'
import CoinItem from './CoinItem'

class CoinsScreen extends Component{

    state = {
        coins: [],
        loading: false
    }

    componentDidMount = async() => {
        this.setState({ loading: true })

        const res = await Http.instance.get("https://api.coinlore.net/api/tickers/")
        this.setState({ coins: res.data, loading: false})
    }

    handlePress = () => {
        console.log("ir a detail", this.props)
        this.props.navigation.navigate('CoinDetail')
    }

    render(){

        const { coins, loading } = this.state

        return(
            <View style={styles.container}>

                { loading ? 
                    <ActivityIndicator
                    style={styles.loader}
                        color="#fff"
                        size="large"
                    />
                    : null
                }


                <FlatList
                    data={coins}
                    renderItem={({ item }) =>
                        <CoinItem item={item}/>
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    titleText:{
        color:"#fff",
        textAlign:"center"
    },
    btn:{
        padding: 8,
        backgroundColor: "blue",
        borderRadius: 8,
        margin:16
    },
    btnText:{
        color:"#fff",
        textAlign: "center",
         
    },
    loader:{
        marginTop: 60
    }
})

export default CoinsScreen
