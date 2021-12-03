import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import styles from './styles';
import COLORS from '../../constants/colors';

export default function Loading() {
  return (
    <View>
      <ActivityIndicator
        animating={true}
        hidesWhenStopped={false}
        size="small"
        color={COLORS.BLUE}
      />
      <Text style={styles.loadingText}>Encrypting</Text>
    </View>
  );
}
