import React from 'react';

import { IoSearch } from "react-icons/io5";

function Search() {
  return (
    <form className='search_box'>
    <fieldset className='search_inner'>
      <span className='icon'><IoSearch /></span>
      <input 
        placeholder='Find friends, Chats, Plus friends'
      />
    </fieldset>
  </form>
  )
}

export default Search;