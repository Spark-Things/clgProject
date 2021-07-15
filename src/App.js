 import React from 'react'
 import { Links } from './Links';
 import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
 import {Home} from './Links'
 import {Inputs} from './Inputs'
 import Blankpage from './Blankpage';
 import Qpaper2 from './Qpaper2';
 import Paperq from './Paperq'
function App(){
  return(
       <Router>
       <Links />
       <Route path="/questionpaper1" component={Inputs}/>
       <Route path="/blankpage" component={Blankpage} />
       <Route path="/" exact component={Home} />
       <Route path="/questionpaper2" component={Qpaper2}/>
       <Paperq /> 
      </Router>
  )
}
  export default App;