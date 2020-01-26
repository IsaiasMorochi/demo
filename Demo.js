import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} from 'react-native';

import FormsList from './FormsList'

export default class Demo extends Component {

    constructor() {
        super()

        this.state = {
            count: 0,
            forms: [
                {
                    id: 1,
                    title: 'title 1',
                    subtitle: '',
                    comment: ''
                },
            ]
        }
    }

    /**
     * Verficamos si el array tiene elementos y actualizamosel contador.
     */
    componentDidMount(){
        var actual = this.state.forms.length
        this.setState({count: actual})
    }

    buttonAdd() {
        var contador = this.state.forms.length + 1
        this.setState({ count: contador })
        this.state.forms.push({ id: contador, title: '', subtitle: '', comment: '' })
        this.setState({ forms: this.state.forms })
        console.log(this.state.forms)
    }

    buttonRemove() {
        var contador = this.state.count
        if (contador > 0) {
            contador -= 1
            this.state.forms.splice(contador, 1)
            this.setState({ count: contador })
            console.log(this.state.forms);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.number}>{this.state.count}</Text>
                <View style={styles.buttons}>
                    <TouchableHighlight
                        style={styles.buttonAdd}
                        onPress={() => this.buttonAdd()}>
                        <Text style={styles.textButton}>+</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.buttonRemove}
                        onPress={() => this.buttonRemove()}>
                        <Text style={styles.textButton}>-</Text>
                    </TouchableHighlight>
                </View>

                <FormsList
                    forms={this.state.forms}
                ></FormsList>
            </View>

        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    },
    number: {
        textAlign: 'center',
        fontSize: 14,
        marginTop: 5,
        marginBottom: 5
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonAdd: {
        height: 30,
        width: 100,
        backgroundColor: 'red'
    },
    textButton: {
        fontSize: 22,
        textAlign: 'center',
        color: 'white'
    },
    buttonRemove: {
        height: 30,
        width: 100,
        backgroundColor: 'steelblue',
    }
})