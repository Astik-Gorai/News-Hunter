import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import News from './Components/News';
import { BrowserRouter } from 'react-router-dom';
import {Route,Routes} from "react-router";
function App() {
  return (<div>
    <BrowserRouter>
      <div className="App">
      <NavBar />
          <Routes>
          <Route path="/" element={<News key="general"category="general" pageSize={8}/>}></Route>
          <Route path="/business" element={<News key="business" category="business" pageSize={8}/>}></Route>
          <Route path="/science" element={<News key="science" category="science" pageSize={8}/>}></Route>
          <Route path="/technology" element={<News key="technology" category="technology" pageSize={8}/>}></Route>
          <Route path="/health" element={<News key="health" category="health" pageSize={8}/>}></Route>
          <Route path="/entertainment" element={<News key="entertainment" category="entertainment" pageSize={8}/>}></Route>
          <Route path="/sports" element={<News key="sports" category="sports" pageSize={8}/>}></Route>
         
          </Routes>
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;
