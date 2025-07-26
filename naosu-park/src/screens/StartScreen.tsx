import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PageList } from '../types';
import { LABELS } from '../constants/labels';

type Props = NativeStackScreenProps<PageList, 'Start'>;

export default function StartScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>{LABELS.APP_NAME}</Text>
      <Button title={LABELS.BUTTONS.START} onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  logo: { fontSize: 32, fontWeight: 'bold', marginBottom: 20 },
});
