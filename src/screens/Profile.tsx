import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {normalize, vh, vw} from '../utils/dimensions';

const Profile = () => {
  return (
    <View style={styles.mainContainerStyle}>
      <View style={styles.topMainContainer}>
        <Image
          style={styles.topImageStyle}
          source={require('../assets/logo1.png')}
        />
        <Text style={{fontWeight: '500', color: 'gray'}}>Profile</Text>
        <Image
          style={styles.topImageStyle}
          source={require('../assets/msg.png')}
        />
      </View>
      <Image
        style={styles.profilePicStyle}
        source={require('../assets/profilePic.png')}
      />
      <Text style={styles.textStyle}>Jina Simons</Text>
      <Text style={[styles.textStyle, {color: '#727682'}]}>6000 Pts</Text>
      <Text style={styles.textStyle2}>
        I’m a software developer that has been in the crypto space since 2012.
        And I’ve seen it grow and falter over a period of time. Really happy to
        be here!
      </Text>
      <View style={styles.logoutImageStyle}>
        <Image
          style={{height: vh(14), width: vw(18)}}
          source={require('../assets/logout.png')}
        />
        <Text style={{fontSize: vh(14), fontWeight: '500', marginLeft: vw(10)}}>
          Logout
        </Text>
      </View>
      <View style={styles.underStyle}>
        <Image
          style={styles.starImageStyle}
          source={require('../assets/star.png')}
        />
        <View style={{flexDirection: 'row', marginVertical: vh(5)}}>
          <Text style={{fontWeight: '600', color: '#727682'}}>
            Under or Over
          </Text>
          <Text
            style={{marginLeft: vw(100), fontWeight: '600', color: '#727682'}}>
            Top 5
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'row', marginVertical: vh(10)}}>
            <Image
              style={styles.upAndDownArrowStyle}
              source={require('../assets/upArrow2.png')}
            />
            <Text
              style={{
                fontWeight: '700',
                fontSize: normalize(24),
                marginLeft: vw(10),
              }}>
              81 %
            </Text>
          </View>
          <View
            style={{
              marginLeft: vw(80),
              flexDirection: 'row',
              marginVertical: vh(10),
            }}>
            <Image
              style={[
                styles.upAndDownArrowStyle,
                {
                  transform: [{rotate: '180deg'}],
                  tintColor: 'red',
                },
              ]}
              source={require('../assets/upArrow2.png')}
            />
            <Text
              style={{
                fontWeight: '700',
                fontSize: normalize(24),
                marginLeft: vw(10),
              }}>
              - 51 %
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: vw(10),
    paddingVertical: vh(30),
  },
  starImageStyle: {
    width: vw(26),
    height: vw(31),
    resizeMode: 'contain',
    position: 'absolute',
    alignSelf: 'center',
    top: vh(-18),
  },
  underStyle: {
    borderWidth: 1,
    padding: vw(15),
    borderColor: '#EEEAF3',
    borderRadius: vw(10),
    marginTop: vh(20),
  },
  logoutImageStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: vh(30),
  },
  upAndDownArrowStyle: {
    height: vh(32),
    width: vw(32),
    resizeMode: 'contain',
  },
  textStyle2: {
    color: '#727682',
    marginTop: vh(10),
    fontSize: normalize(14),
    lineHeight: vh(20),
  },
  textStyle: {
    textAlign: 'center',
    fontWeight: '600',
    color: '#333333',
    marginTop: vh(10),
  },
  profilePicStyle: {
    height: vh(76),
    width: vh(76),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: vh(40),
  },
  topMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topImageStyle: {
    height: vh(30),
    width: vh(30),
    resizeMode: 'contain',
  },
});
