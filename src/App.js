import React from 'react'
import Areachart from './pages/charts/Areachart'
import Barchart from './pages/charts/Barchart'
import Home from './pages/home/Home'
import Linechart from './pages/charts/LineChart'
import List from './pages/list/List'
import Navbar from './components/Navbar'
import New from './pages/new/New'
import Single from './pages/single/Single'
import Piechart from './pages/charts/Piechart'
import Radarchart from './pages/charts/Radarchart'
import Scatterchart from './pages/charts/Scatterchart'
import Settings from './components/Settings'
import SettingsIcon from '@mui/icons-material/Settings';
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import { userInputs, productInputs } from './data/FormDataNewPage'
import { useStateContext } from './context/ContextProvider'

const App = () => {

  const { darkMode, setActiveSettings } = useStateContext()
  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className={`flex scroll-smooth`}>
        <Sidebar className="fixed" />
        <div className={`list pb-6 flex flex-1 relative h-screen overflow-y-scroll text-dark/90 dark:text-main-text/90 bg-main-text/20 dark:bg-dark`}>
          <div className="flex-1">
            <Navbar />
            <Routes>
              <Route path='/'>
                <Route index element={<Home />} />
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
                <Route path='deliveries' >
                  <Route index element={<List />} />
                  <Route path=':deliveryId' element={<Single />} />
                  <Route path='new' element={<New inputs={productInputs} title="Delivery" />} />
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
          </div>
        </div>
      </div>

      <div className='relative'>
        <div className='fixed bottom-60 right-0 cursor-pointer hover:bg-theme-pink bg-theme-pink/80 text-white px-2 py-1 rounded-l-md '
          onClick={() => setActiveSettings(true)}
        >
          <SettingsIcon sx={{ fontSize: 30 }} />
        </div>
        <Settings />
      </div>
    </div>
  )
}

export default App
