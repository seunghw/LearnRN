import React from 'react';
import {Text, View} from 'react-native';

function Greeting(props) {
  return (
    <>
      <View>
        <Text>안냐세여 {props.name}</Text>
      </View>
      <Text>하이여</Text>
    </>
  );
}

Greeting.defaultProps = {
  name: '리액트네이티브',
};

export default Greeting;
