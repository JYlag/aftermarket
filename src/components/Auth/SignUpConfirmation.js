import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

class SignUpConfirmation extends Component {

    onButtonPress() {
        Actions.main();
    }

    render() {
        return (
          <View>
              <Text>Welcome to Aftermarket!</Text>
              <Text>Time to increase your productivity.</Text>
              <Button onPress={ this.onButtonPress.bind(this) }>
                  <Text>Continue</Text>
              </Button>
          </View>
        );
    }
}

export default SignUpConfirmation;