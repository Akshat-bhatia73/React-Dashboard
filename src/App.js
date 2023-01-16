import React, { useContext } from 'react'
import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './pages/signIn/SignIn'
import List from './pages/list/List'
import Single from './pages/single/Single'
import New from './pages/new/New'
import { userInputs, productInputs } from './data/FormDataNewPage'
import { themeContext } from './context/ThemeContext'
import SettingsIcon from '@mui/icons-material/Settings';
import Linechart from './pages/charts/LineChart'
import Areachart from './pages/charts/Areachart'
import Radarchart from './pages/charts/Radarchart'
import Barchart from './pages/charts/Barchart'
import Scatterchart from './pages/charts/Scatterchart'
import Piechart from './pages/charts/Piechart'

const App = () => {

  const {darkMode} = useContext(themeContext)

  return (
    <div className={`${darkMode? 'dark': ''}`}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='signin' element={<SignIn />} />
            <Route path='users' >
              <Route index element={<List />} />
              <Route path=':userId' element={<Single />} />
              <Route path='new' element={<New inputs={userInputs} title="User" />} />
            </Route>
            <Route path='products' >
              <Route index element={<List />} />
              <Route path=':productId' element={<Single />} />
              <Route path='new' element={<New inputs={productInputs} title="Product" />} />
            </Route>
            <Route path='charts'>
              <Route path='line-chart' element={<Linechart />} />
              <Route path='area-chart' element={<Areachart />} />
              <Route path='pie-chart' element={<Piechart />} />
              <Route path='scatter-chart' element={<Scatterchart />} />
              <Route path='bar-chart' element={<Barchart />} />
              <Route path='radar-chart' element={<Radarchart />} />
            </Route>
          </Route>
        </Routes>
        <div className='relative'>
          <div className='fixed bottom-60 right-0 cursor-pointer hover:bg-theme-skyblue bg-theme-skyblue/80 text-white px-2 py-1 rounded-l-md '>
            <SettingsIcon sx={{fontSize: 30}} />
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
