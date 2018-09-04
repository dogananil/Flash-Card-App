import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import DeckList from './components/DeckList';
import CardList from './components/CardList';
import DeckCreate from './components/DeckCreate';
import CardCreate from './components/CardCreate';
import LoginForm from './components/LoginForm';
const RouterComponent = ()=> {
  return(
    <Router>

      <Scene key="root" hideNavBar>
        <Scene key="auth" >
          <Scene key="LoginForm" component={LoginForm} title="Log In" />
        </Scene>
        <Scene key="main" initial>
          <Scene
          rightTitle="Create Deck"
          onRight= {() => {Actions.CreateDeck()}}
          key="decks"
          component={DeckList}
          title="Deck List"
          />
          <Scene key="CreateDeck" component={DeckCreate} title="Create Deck"/>
          <Scene key="CreateCard" component={CardCreate} title="Create Card"/>
          <Scene key="cards"
          rightTitle="Create Card"
          onRight= {() => {Actions.CreateCard()}}
          component={CardList}
          title="Cards" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
