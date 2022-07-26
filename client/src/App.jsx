import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, NewsList, NewsDetails, PsychedelicsList, PsychedelicsDetails, About, Contact, Register, Login,
        Dashboard, AdminNewsList, AdminPsychedelicsList } from "./components";

const App = () => {
  return (
    <div className="min-h-screen bg-[#0f0e13]">
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exect path='/news' element={<NewsList />} />
                <Route exect path='/news/:slug' element={<NewsDetails />} />
                <Route exect path='/psychedelics' element={<PsychedelicsList />} />
                <Route exect path='/psychedelics/:id' element={<PsychedelicsDetails />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exect path='/login' element={<Login />} />
                <Route exect path='/register' element={<Register />} />
                <Route exect path='/admin' element={<Dashboard />} />
                <Route exect path='/admin/news' element={<AdminNewsList />} />
                <Route exect path='/admin/psychedelics' element={<AdminPsychedelicsList />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App
