import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {normalize, vh, vw} from '../utils/dimensions';
import BottomSheet from '../components/BottomSheeet';
const data = [
  {name: 'Prize Pool', value: '$12,000'},
  {name: 'Under', value: '3.25x'},
  {name: 'Over', value: '1.25x'},
  {name: 'Entry Fees', value: '5'},
];

const totalPlayers = 355;
const underPlayers = 232;
const overPlayers = 123;

const underPercentage = (underPlayers / totalPlayers) * 100;
const overPercentage = (overPlayers / totalPlayers) * 100;

const Home = () => {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!isBottomSheetVisible);
  };
  return (
    <View style={styles.mainContainerStyle}>
      <Text style={styles.todaysText}>Today’s Games</Text>
      <View
        style={{
          backgroundColor: '#743CC9',
          paddingVertical: vh(10),
          paddingHorizontal: vw(10),
        }}>
        <View style={styles.topViewStyle}>
          <View style={styles.innerViewStyle}>
            <Text style={styles.topTextStyle}>UNDER OR OVER</Text>
            <Image
              style={styles.topBoxIcon}
              source={require('../assets/info.png')}
            />
          </View>
          <View style={styles.innerViewStyle}>
            <Text style={styles.topTextStyle}>Starting in</Text>
            <Image
              style={styles.topBoxIcon}
              source={require('../assets/Clock.png')}
            />
            <Text style={styles.topTextStyle}>03:23:12</Text>
          </View>
        </View>
        <Text style={styles.bottomTextStyle}>Bitcoin price will be under</Text>
        <Text style={[styles.bottomTextStyle, {color: '#FFFFFF'}]}>
          $24,524 at 7 a ET on 22nd Jan’21
        </Text>
      </View>
      <View style={styles.innerMainStyle}>
        <View style={styles.row}>
          {data.map((item, index) => (
            <View
              key={index}
              style={[
                styles.column,
                {
                  alignItems:
                    item.name === 'Entry Fees' ? 'center' : 'flex-start',
                },
              ]}>
              <Text style={styles.label}>{item.name.toUpperCase()}</Text>
              {item.name === 'Entry Fees' ? (
                <View style={styles.entryContainer}>
                  <Text
                    style={[
                      styles.value,
                      {
                        marginRight: vw(10),
                      },
                    ]}>
                    {item.value}
                  </Text>
                  {item.value === '5' && <View style={styles.circle} />}
                </View>
              ) : (
                <Text style={styles.value}>{item.value}</Text>
              )}
            </View>
          ))}
        </View>
        <Text style={styles.predictionTextStyle}>What’s your prediction?</Text>
        <View style={styles.buttonViewStyle}>
          <TouchableOpacity
            style={[styles.buttonStyle, {backgroundColor: '#452C55'}]}>
            <Image
              style={styles.arrowStyle}
              source={require('../assets/downArrow.png')}
            />
            <Text style={styles.overAndunderTextStyle}>Under</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={toggleBottomSheet}
            style={[styles.buttonStyle, {backgroundColor: '#6231AD'}]}>
            <Image
              style={styles.arrowStyle}
              source={require('../assets/UpArrow.png')}
            />
            <Text style={styles.overAndunderTextStyle}>Over</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomViewStyle}>
        <View style={styles.bottomInnerView}>
          <View style={styles.innerViewStyle}>
            <Image
              style={[styles.topBoxIcon, {tintColor: '#727682'}]}
              source={require('../assets/user.png')}
            />
            <Text style={[styles.topTextStyle, {color: '#727682'}]}>
              355 Players
            </Text>
          </View>
          <View style={styles.innerViewStyle}>
            <Image
              style={[styles.topBoxIcon, {tintColor: '#727682'}]}
              source={require('../assets/Chart.png')}
            />
            <Text style={[styles.topTextStyle, {color: '#727682'}]}>
              View chart
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <View
            style={[
              styles.bar,
              {
                width: `${underPercentage}%`,
                backgroundColor: 'red',
                borderTopLeftRadius: vw(10),
                borderBottomLeftRadius: vw(10),
              },
            ]}
          />
          <View
            style={[
              styles.bar,
              {
                width: `${overPercentage}%`,
                backgroundColor: 'green',
                borderTopRightRadius: vw(10),
                borderBottomRightRadius: vw(10),
              },
            ]}
          />
        </View>
        <View style={styles.predictedPlayerStyle}>
          <Text>{underPlayers} predicted under</Text>
          <Text>{overPlayers} predicted over</Text>
        </View>
      </View>

      <BottomSheet isVisible={isBottomSheetVisible} onClose={toggleBottomSheet}>
        {/* Add the content you want to display in the bottom sheet */}
        <Text>Bottom Sheet Content</Text>
        {/* ... (add more components as needed) */}
      </BottomSheet>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
    paddingHorizontal: vw(10),
    backgroundColor: 'white',
  },
  predictedPlayerStyle: {
    marginHorizontal: vw(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: vh(10),
    opacity: 0.7,
  },
  innerMainStyle: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  container: {
    flexDirection: 'row',
    height: 10,
    marginHorizontal: vw(20),
  },
  bar: {
    height: '100%',
  },
  bottomViewStyle: {
    backgroundColor: '#F6F3FA',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  topViewStyle: {
    backgroundColor: '#743CC9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: vw(5),
    marginVertical: vh(10),
  },
  bottomInnerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: vw(20),
  },
  bottomTextStyle: {
    fontWeight: '600',
    fontSize: vh(14),
    color: '#D2BAF5',
    marginLeft: vw(10),
    marginTop: vh(3),
  },
  topTextStyle: {
    marginHorizontal: 7,
    fontWeight: '600',
    fontSize: vh(14),
    color: '#D2BAF5',
  },
  topBoxIcon: {
    height: vw(13),
    width: vw(13),
    resizeMode: 'contain',
  },
  innerViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  todaysText: {
    fontSize: vw(16),
    color: 'black',
    marginVertical: vh(20),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    // alignItems: 'center',
    margin: vh(10),
  },
  label: {
    fontSize: normalize(16),
    marginBottom: 5,
    color: 'gray',
  },
  value: {
    fontSize: normalize(14),
    fontWeight: 'bold',
    color: 'black',
  },
  circle: {
    width: vw(20),
    height: vw(20),
    borderRadius: 10,
    backgroundColor: 'yellow',
  },
  entryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonStyle: {
    flexDirection: 'row',
    width: vw(148),
    height: vw(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vw(45),
  },
  arrowStyle: {
    width: vw(11),
    height: vw(11),
    resizeMode: 'contain',
  },
  buttonViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: vw(20),
    marginHorizontal: vw(10),
  },
  overAndunderTextStyle: {
    color: 'white',
    fontSize: normalize(16),
    marginLeft: vw(5),
  },
  predictionTextStyle: {
    color: '#727682',
    fontWeight: '600',
    fontSize: vw(14),
    marginTop: vh(10),
    marginLeft: vw(10),
  },
});
