import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Search from './components/users/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
   state = {
      user: [],
      loading: false
   }

   async componentDidMount() {
      this.setState({ loading: true });
      const response = await axios.get('https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}');
      this.setState({ user: response.data, loading: false });
   }

   render() {
      return (
         <div className='App'>
            <Navbar/>
            <Search/>
            <div className='container'>
               <User loading={this.state.loading} user={this.state.user}/>
            </div>
         </div>
      );
   }
}

export default App