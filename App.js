import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerlogo}>
        <Text>Tela Inicial</Text>
      <Image
      style={styles.logo}
      source={{
          uri: 'data:image/png;base64,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',
        }}/>
        <Separator />
      </View>
      <View style={styles.containerbotao}>
      <Button
        title="Histórico"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
      <Separator />
      <Button
        title="Pesquisa"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerbotao:{
    flex: 1,
    width: 300,
  },
  containerlogo: {
    flex: 1,
  },
  logo: {
    width: 300,
    height: 50,
    resizeMode: 'contain'
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});