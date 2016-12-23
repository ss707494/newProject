/**
 * Created by Administrator on 12/23.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
// import Playground from './commpoment/ani/Playground'
import TestRedux from './commpoment/testRedux/testRedux'
import {Provider} from 'react-redux'
import store from './store/createStor'

export default class nativeProject extends Component {

    render() {

        return (
            <Provider store={store} >
            <View style={styles.container}>
                <TestRedux/>
            </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

