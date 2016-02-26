import React from 'react-native';
import Input from './components/Input';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux/native';
// import CounterContainer from './containers/counter.container';

const {
 Navigator, View, Text
} = React;

class AppRouter extends React.Component {
  render(){
    return (
      <View>
        <Text>
          First
        </Text>
        <Input/>
        <Text>
          Second
        </Text>
        <Input/>
        <Text>
          Third
        </Text>
        <Input/>
      </View>
    );
  }
}

export default AppRouter;
