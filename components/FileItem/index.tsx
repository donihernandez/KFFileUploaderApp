import React from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import styles from './styles';
import COLORS from '../../constants/colors';

export default function FileItem() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View>
          <Image
            source={require('../../assets/icons/file-thumbnail-image.png')}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.fileName}>Birthday 2020.png</Text>
          <Text style={styles.fileSize}>2MB</Text>
        </View>
      </View>
      <View>
        <View>
          <ActivityIndicator
            animating={true}
            hidesWhenStopped={false}
            size="small"
            color={COLORS.BLUE}
          />
          <Text style={styles.loadingText}>Encrypting</Text>
        </View>
      </View>
    </View>
  );
}
