import { useContext } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/starting/Home';
import ChooseTemplate from './components/starting/ChooseTemplate';
import DashboardHeader from './components/resume-process/DashBoardHeader';
import SignUp from './components/login-process/SignUp';
import Login from './components/login-process/Login';
import MyTemplate from './components/user-dashboard/MyTemplate';
import GlobalContext from './components/context/GlobalContext';
import CvNestFooter from './components/starting/CvNestFooter';
import LiveResume from './components/live-resume/LiveResume';
import ContactForm from './components/pages/ContactForm';
import AboutUs from './components/aboutus/AboutUs';
import Header from './components/starting/Header';
import BlogPage from './components/pages/BlogPage';
import BlogPostPage from './components/blog posts/BlogPostPage';
import Error from './components/pages/Error';

function App() {
  const { authtoken, isSaveData } = useContext(GlobalContext);

  return (
    <BrowserRouter>
      <Header />
      {/* SHOW ALERT */}
      {isSaveData}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/templates' element={<ChooseTemplate />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/blog/:blogPath' element={<BlogPostPage />} />
        <Route path='/edit-resume/*' element={<DashboardHeader />} />
        {
          !authtoken ?
            <>
              <Route path='/sign-up' element={<SignUp />} />
              <Route path='/login' element={<Login />} />
            </> :
            <>
              <Route path='/my-templates' element={<MyTemplate />} />
            </>
        }
        <Route path='/:liveTempId' element={<LiveResume />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <CvNestFooter />
    </BrowserRouter>
  );
}

export default App;