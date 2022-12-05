//import ClassComponent from './ClassComponent'
//import PropsExample from './PropsExample'
//import FuncProps from './FuncProps'
//import StateExample from './StateExample'
//import DemoExample from './DemoExample'
//import Events from './Events'
//import JSX from './JSX'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import NotFound from './Components/NotFound'


function App(){
  return(
      <section>
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        </BrowserRouter>
      {/*<StateExample />
        <JSX />
      <PropsExample name="asma" age="19"/>
        <PropsExample name="hamini" age="19"/>
        <h1>You decide :):</h1>
        <p>Always :)</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg" width="30%" alt="pic1"/>
        <ClassComponent/>
      <Events />
    <DemoExample price="adsbnk"/> 
    <h1>From functional component</h1>
    <FuncProps carname="Range Rover" year="1996"/>
    <FuncProps carname="BMW" year="1972"/>*/}
     </section>

    );
}
export default App;