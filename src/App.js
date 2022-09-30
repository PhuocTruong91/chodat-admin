import {Component} from 'react';


import IndexPages from './template/pages/IndexPages';
import Header from './template/common/Header';
import Footer from './template/common/Footer';
import {getUserInfo} from './controller/User';


import { BrowserRouter} from "react-router-dom";
class App extends Component {
    
  componentDidMount() {
      if(localStorage.token){
          getUserInfo();
      }
  }

  render() { 
      return (  
          <div>
              <BrowserRouter>
                  <Header></Header>
                  <IndexPages></IndexPages>
                  <Footer></Footer>
              </BrowserRouter>
          </div>
      );
  }
}

export default App;