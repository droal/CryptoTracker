import React, { Component } from 'react'
import { View, Image, Text, SectionList, StyleSheet } from 'react-native'
import Colors from '../../res/colors'


class CoinDetailScreen extends Component{

    state = {
        coin:{}
    }

    getSymbolIcon = ( name ) => {

        if(name){
            const symbol = name.toLowerCase()

            console.log("symbol:", symbol)

            return `https://c1.coinlore.com/img/25x25/${symbol}.png`
        }
        
    }

    getSections = (coin) => {
        const sections = [
            {
                title: "Market cap",
                data: [coin.market_cap_usd]
            },
            {
                title: "Volume 24h",
                data: [coin.volume24]
            },
            {
                title: "Charge 24h",
                data: [coin.percent_change_24h]
            },
        ]

        return sections
    }


    componentDidMount(){
        const { coin } = this.props.route.params

        this.props.navigation.setOptions({ title: coin.symbol })

        this.setState({ coin })
    }


    render(){

        const { coin } = this.state

        return(
            <View style={styles.container}>
                <View style={styles.subHeader}>
                    <Image style={styles.iconImg} source={{ uri: this.getSymbolIcon(coin.name) }}/>
                    <Text style={styles.titleText}>{ coin.name }</Text>
                </View>

                <SectionList 
                    
                    sections={this.getSections(coin)}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => 
                        <View style={styles.sectionItem}>
                            <Text style={styles.itemText}>{ item }</Text>
                        </View>                    
                    }
                    renderSectionHeader={({ section }) =>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionText}>{ section.title }</Text>
                        </View>                    
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.charade
    },
    subHeader:{
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        padding: 16,
        flexDirection: "row"
    },
    titleText:{
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 10
    },
    iconImg:{
        width: 25,
        height: 25
    },
    sectionHeader:{
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        padding: 10,
    },
    sectionItem:{
        padding: 10,
    },
    itemText:{
        color: "#fff",
        fontSize: 16,
    },
    sectionText:{
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },
})

export default CoinDetailScreen
