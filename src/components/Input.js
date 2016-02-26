import React, {
  AppRegistry,
  Component,
  Text,
  TextInput,
  View
} from 'react-native';

export default class Input extends Component {
  constructor(props) {
    super(props);
    console.log('super')
    this.state = {
      text: null
    }
  }

  changeText(text) {
    console.log('text', text)
  }

  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.changeText.bind(this)}
        value={this.state.text}
      />
    )
  }
}
