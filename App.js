import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Counter from './components/Counter';

function App(props) {
  const [count, setCount] = useState(0);
  const onPlus = () => {
    setCount(count + 1);
  };

  const onMius = () => {
    setCount(count - 1);
  };

  return (
    <SafeAreaView style={styles.full}>
      <Counter count={count} onPlus={onPlus} onMius={onMius} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
});

export default App;
