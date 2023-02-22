import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavigationStrings } from './NavigationStrings/NavigatioStrings'
import Home from './components/Home'
import Reminder from './components/Reminder'
import Notes from './components/Notes'
import EditLabel from './components/EditLabel'
import Bin from './components/Bin'
import Archive from './components/Archive'
import Header from './components/Header'
import SideBar from './components/SideBar'
const App = () => {
  return (
    <Router>
      <Header />
      <SideBar />
      <Routes>
        <Route path={NavigationStrings.Home} element={<Notes />} />
        <Route path={NavigationStrings.Reminder} element={<Reminder />} />
        <Route path={NavigationStrings.Notes} element={<Notes />} />
        <Route path={NavigationStrings.Edit} element={<EditLabel />} />
        <Route path={NavigationStrings.Bin} element={<Bin />} />
        <Route path={NavigationStrings.Archive} element={<Archive />} />
      </Routes>
    </Router>
  )
}
export default App