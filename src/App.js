import React from 'react';
import './App.css';
import CountryList from './Country-list';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Reducer';
import ActionList from './action-list';


const initialState = {
  countryList: [],
  countryListByName: [],
  countryFilteredByRegion: [],
  filterByRegion: '',
}


const store = createStore(reducer, initialState)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ActionList/>
        <CountryList />
      </div>
    </Provider>
  );
}

export default App;
