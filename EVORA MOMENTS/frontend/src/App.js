import './App.css';
import About from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Home from './Components/Home';
import Gallery from './Components/Gallery';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Admindash from './Admindash';
import Cusdash from './Cusdash';
import AllCustomers from './Components/Customers_details';
import AllContacts from './Components/Customer_messages';
import EditAlbum from './Components/EditAlbum';
import AlbumPhotos from './Components/AlbumPhotos';



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/Admindash' element={<Admindash />} />
          <Route path='/Cusdash' element={<Cusdash />} />
          <Route path='/allcus' element={<AllCustomers />} />
          <Route path='/allcontact' element={<AllContacts />} />
          <Route path='/editalbum' element={<EditAlbum />} />
          <Route path="/album/:albumId" element={<AlbumPhotos/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 
