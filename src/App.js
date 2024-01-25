import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Search from './components/users/Search';
import axios from 'axios';
import './App.css';

const github = axios.create({
   baseURL: `https://api.github.com`,
   timeout: 1000,
   headers: { Authorization: process.env.GITHUB_API_TOKEN }
})

class App extends Component {
   state = {
      user: [],
      loading: false
   }

   // async componentDidMount() {
   //    this.setState({ loading: true });
   //    const response = await axios.get('https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}');
   //    this.setState({ user: response.data, loading: false });
   // }

   // Search for GitHub Users
   searchUsers = async text => {
      console.log('Test');
      // this.setState({ loading: true });
      // const response = await axios.get(`/search/users?q=${text}`);
      // this.setState({ user: response.data.items, loading: false })
      //console.log(text); // Testing parameter input
   }

   render() {
      return (
         <div className='App'>
            <Navbar/>
            <Search searchUsers={this.searchUsers}/>
            <div className='container'>
               <User loading={this.state.loading} user={this.state.user}/>
            </div>
         </div>
      );
   }
}

export default App