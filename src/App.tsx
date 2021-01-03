import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import DocumentPage from './pages/DocumentPage';
import AboutPage from './pages/AboutPage';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Footer from './components/Footer';
const App: React.FC<{}> = () => {
  return (
    <BrowserRouter>

      <Switch>
      <Route path='/about-us' component={AboutPage}></Route>
      <Route path='/document/:id' component={DocumentPage}></Route>
      <Route path='/' component={HomePage}></Route>
      
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
