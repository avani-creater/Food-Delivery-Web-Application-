import { Outlet } from 'react-router-dom';
import './index.css';
import Header from './components/Header'
import Carousel from './Carousel';
import {Provider} from 'react-redux'
import appStore from './utils/appStore'

function App() {
return(
  <>
<Provider store={appStore}>
<Header/>
  <Carousel/>
<Outlet/>
</Provider>
   {/* <Body/>  */}
  </>
)
}

export default App;
