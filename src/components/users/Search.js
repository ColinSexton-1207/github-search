import React, { Component } from 'react'

export class Search extends Component {
   state = {
      text: '',
   };

   onSubmit = eventParam => {
      eventParam.preventDefault();
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
      //console.log(this.state.text); // Test state
   }

   onChange = eventParam => this.setState({ [eventParam.target.name]: eventParam.target.value });

   render() {
      return (
         <div className='search_block'>
            <form className='search_form' onSubmit={this.onSubmit}>
               <input type='text' name='search' placeholder='Search Users..' className='search_bar' value={this.state.text} onChange={this.onChange}/>
               <input type='submit' value='Search' className='btn'/>
            </form>
         </div>
      );
   }
}

export default Search