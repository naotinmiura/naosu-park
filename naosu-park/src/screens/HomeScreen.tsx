import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PageList } from '../types';
import { LABELS } from '../constants/labels';
import { COMMON_STYLES } from '../constants/theme';
import { Button } from '../components';

type Props = NativeStackScreenProps<PageList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={COMMON_STYLES.title}>{LABELS.SCREEN_TITLES.HOME}</Text>
        <Button 
          title={LABELS.BUTTONS.GAME_SELECT} 
          onPress={() => navigation.navigate('GameSelect')}
          size="lg"
          fullWidth
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...COMMON_STYLES.centerContainer,
  },
  content: {
    width: '100%',
    maxWidth: 300,
    alignItems: 'center',
  },
});
