import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './containers/Header';
import BusinessListing from './containers/BuseinessListing';
import BusinessDetails from './containers/BusinessDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
            <Route exact path='/' element={<BusinessListing />} />
            <Route path='/business/:businessId' element={<BusinessDetails />} />
            <Route>404 Not Found!</Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
