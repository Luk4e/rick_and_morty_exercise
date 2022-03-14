import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../List.css';
import { IPersonage, IPage, IFavourite } from '../interfaces/apiInterfaces';
import SearchComp from '../components/SearchComp';
import ListCharger from '../components/ListCharger';  
import ModalSchede from '../components/ModalSchede';

const List = ({ favouritePersonages, handleFavourite }:IFavourite): JSX.Element => {
  // Main page where all the personages are showed from api

  const [personage, setPersonages] = useState<IPersonage[]>([]);
  const [searchWord, setSearchWord] = useState<string>('');
  const [currPage, setCurrPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [selectedPersonage, setSelectedPersonage] = useState<IPersonage>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error,setError] = useState<string | null>(null);
  const [show, setShow] = useState<boolean>(false);

  // when the search word change, the page number will be reset to one
  useEffect(():void => {
    setCurrPage(1);
  },[searchWord])

  useEffect(():void => {
    // fetch personage form api or by page or by search word
    let baseUrl;
    if(searchWord===''){
      baseUrl = `https://rickandmortyapi.com/api/character/?page=${currPage}`;
    } else {
      baseUrl = `https://rickandmortyapi.com/api/character/?page=${currPage}&name=${searchWord}`;
    }
    axios
      .get<IPage>(baseUrl, {
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then( response => {
        // save personage and total page
        setPersonages(response.data.results);
        setTotalPage(response.data.info.pages);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setPersonages([]);
        setTotalPage(1);
      });
  },[currPage,searchWord]);


  return(
    // show title - search box - list of personage - modla will be showed when a personage is clicked 
    <div className="List" >
      <h1 style={{ marginBottom:'30px', marginTop:'30px' }}>Rick and Morty personages</h1>
      <SearchComp 
        word={searchWord} 
        handleWord={setSearchWord} 
      />
      <ListCharger 
        loading={loading}
        personage={personage}
        currPage={currPage}
        totalPage={totalPage}
        handleSelectedPersonage={setSelectedPersonage}
        handleCurrentPage={setCurrPage}
        handleShowDetails={setShow}
      />
      {show && <ModalSchede show={show} data={selectedPersonage} handleChange={setShow} favouritePersonageList={favouritePersonages} handleFavourite={handleFavourite}/>}
    </div>
  )
};

export default List;
