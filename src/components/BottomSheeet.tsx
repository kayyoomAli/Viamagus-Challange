import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {normalize, vh, vw} from '../utils/dimensions';
import {Picker} from 'react-native-wheel-pick';
const YourModalComponent = ({isVisible, onClose}: any) => {
  const [data, setData] = useState([
    {value: '5765387677', label: '1'},
    {value: '5765387678', label: '2'},
    {value: '5765387679', label: '3'},
    {value: '5765387680', label: '4'},
    {value: '5765387681', label: '5'},
    {value: '5765387682', label: '6'},
    {value: '5765387683', label: '7'},
    {value: '57653876770', label: '8'},
    {value: '57653876788', label: '9'},
    {value: '57653876797', label: '10'},
    {value: '576538768056', label: '11'},
    {value: '57653876814', label: '12'},
    {value: '57653876823', label: '13'},
    {value: '57653876831', label: '14'},
  ]);

  const handleValueChange = value => {
    console.log(value);
  };

  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0.5}
      onBackdropPress={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.predictionText}>Your Prediction is Under</Text>
          <Text
            style={[
              styles.predictionText,
              {
                color: '#727682',
                fontSize: normalize(12),
                marginVertical: vh(20),
              },
            ]}>
            Entry tickets
          </Text>

          <Picker
            style={{backgroundColor: 'white', height: 215}}
            selectedValue="5765387680"
            textColor="#000000"
            textSize={29}
            selectTextColor="black"
            selectBackgroundColor="#6231AD1A"
            pickerData={data}
            onValueChange={value => {
              handleValueChange(value);
            }}
          />
          <Text>You can win </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: vh(10),
              marginHorizontal: vw(7),
            }}>
            <Text style={{color: '#03A67F', fontWeight: '600'}}>$2000</Text>
            <Text style={{color: 'black', fontWeight: '600'}}>Total 5</Text>
          </View>
          <TouchableOpacity
            onPress={onClose}
            style={[styles.buttonStyle, {backgroundColor: '#6231AD'}]}>
            <Text style={styles.submitStyle}>Submit my prediction</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0,
  },
  submitStyle: {
    color: 'white',
    fontWeight: '600',
  },
  buttonStyle: {
    flexDirection: 'row',
    height: vw(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vw(45),
    marginTop: vh(10),
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    height: vh(420),
  },
  touchStyle: {
    alignSelf: 'center',
  },

  predictionText: {
    fontSize: normalize(16),
    fontWeight: '600',
    color: 'black',
  },
});

export default YourModalComponent;
