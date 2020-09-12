import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return 
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/:username/:reponame" element={<Profile />} />
    </Routes>
    </BrowserRouter>
}

export default App