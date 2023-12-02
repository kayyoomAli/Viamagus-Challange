import React, {useEffect, useContext, useMemo} from 'react';
import styled from 'styled-components/native';
import {Picker} from 'react-native-wheel-pick';
import DataContext from '../../DataContext';
function WheelPickerComponent(props) {
  const dropdownData = SOMEMETHODTOGETARRAY(YOURDATA); // It should be an array
  const handleValueChange = value => {
    console.log(value);
  };
  return (
    <MainContainer>
      <Picker
        style={{backgroundColor: 'white', width: 100, height: 215}}
        selectedValue="Today"
        textColor="#000000"
        textSize={20}
        selectTextColor="#EA6C0F"
        selectBackgroundColor="#000000"
        isShowSelectBackground={false}
        isShowSelectLine={false}
        selectLineSize={9}
        pickerData={dropdownData}
        onValueChange={value => {
          handleValueChange(value);
        }}
      />
    </MainContainer>
  );
}

const MainContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex: 1;
`;
export default WheelPickerComponent;
