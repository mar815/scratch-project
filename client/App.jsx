import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './globalComponents/navbar.jsx';
import Home from './infoPages/homePage/home.jsx';
import About from './infoPages/aboutPage/about.jsx';
import Articles from './infoPages/articlesPage/articles.jsx';
import Education from './infoPages/educationPage/education.jsx';
import FAQs from './infoPages/FAQsPage/FAQs.jsx';
import Item from './infoPages/itemPage/item.jsx';
// import Login from './userPages/loginPage/login.jsx';
// import SignUp from './userPages/signUpPage/signUp.jsx';
import Volunteer from './userPages/volunteerPage/volunteer.jsx';
import User from './userPages/userPage/user.jsx';
import LoginComponent from './userPages/loginPage/components/loginComponent.jsx';



class App extends React.Component {

  render() {
    return (
      <Router>
        <Navbar/>
        <main>
        <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/about" element={<About />} exact/>
          <Route path="/articles" element={<Articles />} />
          <Route path="/education" element={<Education />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/volunteer" element={<Volunteer />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} /> */}
          <Route path="/User" element={<User />} />
          <Route path="/Item" element={<Item />} />
          <Route path="/Login" element={<LoginComponent />} />
        </Routes>
        </main>
      </Router>

    );
  }
}

export default App;