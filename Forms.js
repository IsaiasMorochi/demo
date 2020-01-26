import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableHighlight, Alert } from 'react-native';

export default class Forms extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: props.title,
      subtitle: props.subtitle,
      comment: props.comment
    }
  }

  changeTitle(title) {
    this.setState({ title })
  }

  changeSubtitle(subtitle) {
    this.setState({ subtitle })
  }

  changeComment(comment) {
    this.setState({ comment })
  }

  buttonPressed() {
    if (this.state.title && this.state.subtitle && this.state.comment) {
      Alert.alert(this.state.title + " " + this.state.subtitle +
        " " + this.state.comment);
    } else {
      Alert.alert('Error !!!', '', [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
        { cancelable: false });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View >
          <Text style={styles.title}>Fomulario React Native</Text>
          <TextInput
            style={styles.input}
            placeholder="Titulo"
            value={this.state.title}
            onChangeText={(title) => this.changeTitle(title)}
          />
          <TextInput
            style={styles.input}
            placeholder="SubTitulo"
            value={this.state.subtitle}
            onChangeText={(subtitle) => this.changeSubtitle(subtitle)}
          />
          <TextInput
            multiline={true}
            style={[styles.input, styles.textArea]}
            placeholder="Comentario"
            value={this.state.comment}
            onChangeText={(comment) => this.changeComment(comment)}
          />
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.buttonPressed()}>
            <Text style={styles.textButton}>Enviar</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    backgroundColor: '#ffffff', //'#F5FCFF'
    elevation: 10,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "grey",
    shadowOpacity: 0.75,
    shadowRadius: 10,
  },
  button: {
    backgroundColor: 'skyblue',
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 5,
    marginBottom: 10
  },
  textButton: {
    textAlign: 'center',
    color: 'white'
  },
  title: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5
  },
  input: {
    height: 35,
    borderColor: '#ccc',
    borderWidth: 2,
    marginBottom: 20
  },
  textArea: {
    height: 55
  }
});