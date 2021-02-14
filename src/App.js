import React from 'react'
import Header from'./Header'
import './App.css'
import Sidebar from './Sidebar'
import RecommendedVideos from './RecommendedVideos'
import { BrowserRouter as Router, Switch ,Route} from 'react-router-dom'
import SearchPage from './SearchPage'
function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <Switch>
        <div className="app_page">
                <Sidebar/>
          <Route path="/" exact>  
                <RecommendedVideos/>
          </Route>
          <Route path="/search/:searchTerm">
              <SearchPage/>
          </Route>
          </div>
        </Switch>
     </Router>
     </div>
  )
}

export default App
