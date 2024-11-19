import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import MessagesContainer from "./components/Messages/TextMessage/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/' element={<Navigate to='/profile' replace />}/>
            <Route path='/profile' element={<ProfileContainer />}/>
            <Route path='/messages' element={<MessagesContainer />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;