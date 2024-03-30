// src/App.js

import CitySearch from './components/CitySearch.js';
import EventList from './components/EventList.js';
import './App.css';

const App = () => {
 return (
   <div className="App">
     <CitySearch />
     <EventList />
   </div>
 );
}

export default App;
