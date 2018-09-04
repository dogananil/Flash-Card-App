import React from 'react';
import { Text, View } from 'react-native';

//Create component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

    return (
      <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
      </View>

    );
};
const styles = {

    viewStyle: {
      backgroundColor: '#F8F8F8',
      justifyContent: 'center',
      alignItems: 'center',
      height: 70,
      width: 200,
      paddingTop: 20,
      shadowColor: 'yellow',
      shadowOffset: { height: 5, width: 1 },
      shadowOpacity: 3,
      elevation: 2,
      position: 'relative',
      flexDirection: 'row',

    },
    textStyle: {
      fontSize: 18
    }

};

//Render it to the device

export { Header } ;
