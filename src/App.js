import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './containers/Header';
import BusinessListing from './containers/BuseinessListing';
import BusinessDetails from './containers/BusinessDetails';
import { APP_ROUTES } from  './constant.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
            <Route exact path={APP_ROUTES.BUSINESS_LIST} element={<BusinessListing />} />
            <Route path={APP_ROUTES.BUSINESS_DETAILS} element={<BusinessDetails />} />
            <Route>404 Not Found!</Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
