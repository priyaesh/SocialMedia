import React from 'react';
import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: getFontFamily('Inter-Black', 800),
    fontSize: 24,
    fontWeight: '.semibold',
  },
});
