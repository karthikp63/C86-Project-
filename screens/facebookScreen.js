import React from 'react';
import { Text, View } from 'react-native';

export default class FacebookScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', fontSize: 18 }}>
          <Text>Facebook</Text>
        </View>
      );
    }
  }