import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

interface IHr {
  thickness?: number;
  lineColor?: string;
  text?: string | number;
  fontSize?: number;
  textPadding?: number;
  hrPadding?: number;
  hrStyles?: any;
  textStyles?: object;
}

function Hr({
  hrPadding,
  hrStyles = 0,
  lineColor = 'black',
  thickness = 1,
}: IHr) {
  return (
    <View
      style={[
        styles.row,
        {marginLeft: hrPadding, marginRight: hrPadding},
        hrStyles,
      ]}>
      <View
        style={[styles.side, {height: thickness, backgroundColor: lineColor}]}
      />
    </View>
  );
}

export default Hr;
