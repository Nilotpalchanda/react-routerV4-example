import React  from 'react';
import Header from './Header'
import Footer from './Footer'
import Aux from '../hoc/_Aux';
const App = ( props ) => (

      <Aux>
      <div>
        <Header/>
      </div>
      <div>
       { props.children  }
      </div>
      <div>
        <Footer/>
      </div>
      </Aux>

  )

export default App

