import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// For this example. The TS Library was not enabled
// @ts-ignore
import Hr from 'react-native-hr-component';

import styles from './styles';
import COLORS from '../../constants/colors';

export default function Header() {
  return (
    <View>
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.title}>Manage Files</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Ionicons name="add-sharp" size={30} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <Hr lineColor={COLORS.LIGHT_GRAY} width={1} />
    </View>
  );
}
