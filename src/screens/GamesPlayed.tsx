import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {vh, vw} from '../utils/dimensions';

const LogoImage = require('../assets/logo.png');
const data = [
  {
    image: LogoImage,
    id: 1,
    mainTitle: 'First Stripe Earned',
    title: 'Top 10% of highest spending players in a month',
  },
  {
    image: LogoImage,
    id: 12,
    mainTitle: 'Born Winner',
    title: 'Top 10% of highest spending players in a month',
  },
  {
    image: LogoImage,
    id: 13,
    mainTitle: 'Trader of the Month',
    title: 'Top 10% of highest spending players in a month',
  },
  {
    image: LogoImage,
    id: 14,
    mainTitle: 'Trader of the Month',
    title: 'Won 7 under-over games in a row',
  },
  {
    image: LogoImage,
    id: 15,
    mainTitle: 'Rising Star',
    title: 'Top 10% of highest spending players in a month',
  },
  {
    image: LogoImage,
    id: 16,
    mainTitle: 'valuable',
    title: 'Top 10% of highest spending players in a month',
  },
  {
    image: LogoImage,
    id: 17,
    mainTitle: 'Jackpot',
    title: 'Top 10% of highest spending players in a month',
  },
];
const GamesPlayed = () => {
  const _renderItem = ({item}: any) => {
    return (
      <View style={styles.mainRenderItemStyle}>
        <Image style={{height: vw(60), width: vw(60)}} source={item.image} />
        <View style={{marginTop: vh(20), marginLeft: vw(20)}}>
          <Text style={{fontWeight: '600', color: 'black'}}>
            {item.mainTitle}
          </Text>
          <Text style={styles.titleStyle}>{item.title}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.mainContainerStyle}>
      <FlatList data={data} renderItem={_renderItem} />
    </View>
  );
};

export default GamesPlayed;

const styles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
    backgroundColor: '#6231AD1A',
  },
  mainRenderItemStyle: {
    backgroundColor: 'white',
    marginHorizontal: vw(10),
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: vh(10),
    paddingHorizontal: vw(15),
    paddingVertical: vh(5),
    borderRadius: vw(5),
  },
  titleStyle: {
    maxWidth: vw(230),
    marginVertical: vh(10),
    fontWeight: '500',
    color: 'grey',
    lineHeight: 20,
  },
});
