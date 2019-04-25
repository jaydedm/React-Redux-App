import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './home/HomePage.jsx'
import AboutPage from './about/AboutPage.jsx'
import Header from './common/Header.jsx'
import PageNotFound from './PageNotFound.jsx'
import CoursesPage from './courses/CoursesPage.jsx'
import ManageCoursePage from './courses/ManageCoursePage.jsx' // eslint-disable-line import/no-named-as-default
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/courses" component={CoursesPage} />
        <Route exact path="/course/:slug" component={ManageCoursePage} />
        <Route exact path="/course" component={ManageCoursePage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  )
}

export default App
