/**
 * Created by Administrator on 12/23.
 */
import React, {Component} from 'react';
import {
    View
    , Text
    ,Button
} from 'react-native'
import {connect} from 'react-redux'
import {actions} from './actions'

class testRedux extends Component {
    componentWillMount() {
        // debugger
    }

    render() {
        const props = this.props;
        return <View>
            <Text>{props.counter}</Text>
            <Button
                onPress={props.increment}
                title="increment"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={props.addOne}
                title="addOne"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={props.del}
                title="del"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />

        </View>
    }
}

export default connect(state => state, actions)(testRedux)