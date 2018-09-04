import React from 'react';
import { Text, View, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const DeckDetail = ({ deck }) => {
  const { title, Cards } = deck;
  const {
          headerContentStyle,
          headerTextStyle
        } = styles;
  return (
    <Button onPress={() => Linking.openURL('www.google.com')} >
      <Card>
        <CardSection>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle} >{title}</Text>
          </View>
        </CardSection>
      </Card>
    </Button>
  );
};
const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
  fontSize: 18
  }
};
export { DeckDetail };
