import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'

import Header from '../components/Header'
import DisposicaoVeiculos from '../components/DisposicaoVeiculos'
import ViagemAtual from '../components/ViagemAtual'

class Home extends React.Component {
    
    state = {
        viagemAtual: false,
        disposicaoVeiculos: false
    }

    viagemAtual = viagemAtual => {
        this.setState({ viagemAtual })
    }

    disposicaoVeiculos = disposicaoVeiculos => {
        this.setState({ disposicaoVeiculos })
    }

    render () {
        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation} />
                <Text style={styles.textAlert}>NÃO ULTRAPASSE EM LUGAR INDEVIDO</Text>

                <Spinner visible={! (this.state.viagemAtual && this.state.disposicaoVeiculos)} />             

                <ViagemAtual navigation={this.props.navigation} onComplete={v => this.viagemAtual(v)} />

                <DisposicaoVeiculos navigation={this.props.navigation} onComplete={v => this.disposicaoVeiculos(v)} />
            </View>
        )
    }
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    },
    textAlert: {
        color: '#fff',
        backgroundColor: '#f00',
        padding: 5,
        margin: 2,
        borderRadius: 5,
        textAlign: 'center',
        fontWeight: "bold"
    }
})