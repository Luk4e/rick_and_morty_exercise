import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import React,{ useState } from 'react';
import NavbarComp from './components/NavbarComp';
import NoMatch from './pages/NoMatch';
import List from './pages/List';
import Favourite from './pages/Favourite';
import { IPersonage } from './interfaces/apiInterfaces';

const App = (): JSX.Element => {
  const [favouritePersonages, setFavouritePersonages] = useState<IPersonage[]>([]);

  return(
    <Router>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<List favouritePersonages={favouritePersonages} handleFavourite={setFavouritePersonages} />} />
        <Route path="/favourite" element={<Favourite favouritePersonages={favouritePersonages} handleFavourite={setFavouritePersonages} />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
};

export default App;
