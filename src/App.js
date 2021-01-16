import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Stack from './components/Stack';
import Footer from "./components/Footer";
import {BrowserRouter as Router, Link, Route, IndexRoute} from 'react-router-dom';
import FpsPage from "./pages/FpsPage";
import WhyyyPage from "./pages/WhyyyPage";

function App() {
  return (
  <div>
    <Router>
        <Navigation />

        <Route exact path="/" render={(props) =>
            <div>
             <Header/>
             <Stack/>
            </div>
            }/>

        <Route exact path="/fps" render={(props) =>
            <div>
             <FpsPage/>
            </div>
            }/>

        <Route exact path="/whyyy" render={(props) =>
             <div>
              <WhyyyPage/>
             </div>
            }/>

      <Footer />
    </Router>
  </div>

  );
}

export default App;
