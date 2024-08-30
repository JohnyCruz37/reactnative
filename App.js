import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      input: ''
    }

    this.entrar = this.entrar.bind(this);
  }

  entrar(){
    if(this.state.input === ''){
      alert('Por favor, digite seu nome!');
      return;  
    } 
    this.setState({nome: `Bem-vindo, ${this.state.input}!`});
  }
  render() {
    return (
      <View style={style.container}>
        <TextInput 
        style={style.input}
        placeholder="Digite seu nome"
        onChangeText={(nome) => this.setState({input: nome})}
        />

        <Button title='Inserir' onPress={this.entrar} /> 

        <Text style={style.text} > {this.state.nome}</Text>
      </View>
    );
  }
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input:{
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;