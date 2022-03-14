import React from 'react';
import { ISearchInput } from '../interfaces/apiInterfaces';

const SearchComp = ( { word, handleWord }:ISearchInput): JSX.Element => {
  // component that handle the search field
  return(
    <input 
        type="text"
        placeholder="Search"
        value={ word }
        style={{ marginBottom:'2%' }}
        onChange={(event) => handleWord(event.target.value)}
    />
  )
};

export default SearchComp;
