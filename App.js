import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Checkbox from './src/components/Checkbox';

function App() {
  const [isBlueSelected, setIsBlueSelected] = useState(false);
  const [isGreenSelected, setIsGreenSelected] = useState(false);
  const [isRedSelected, setIsRedSelected] = useState(false);

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <Text style={styles.title}>Select color</Text>
        <Checkbox
          text="Blue"
          isChecked={isBlueSelected}
          onPress={() => {
            setIsBlueSelected(!isBlueSelected);
          }}
          style={styles.checkbox}
        />
        <Checkbox
          text="Green"
          isChecked={isGreenSelected}
          onPress={() => {
            setIsGreenSelected(!isGreenSelected);
          }}
          style={styles.checkbox}
        />
        <Checkbox
          text="Red"
          isChecked={isRedSelected}
          onPress={() => {
            setIsRedSelected(!isRedSelected);
          }}
          style={styles.checkbox}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {flex: 1, backgroundColor: '#020514'},
  container: {
    marginTop: 30,
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  checkbox: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
});

export default App;
