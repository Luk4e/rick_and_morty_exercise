import React,{ useEffect, useState} from 'react';
import axios from 'axios';
import { IPersonage, IFavourite } from '../interfaces/apiInterfaces';
import ListCharger from '../components/ListCharger';
import ModalSchede from '../components/ModalSchede';

const Favourite = ({favouritePersonages,handleFavourite}:IFavourite): JSX.Element => {
  // page to show the favourite personages

  const [personageOnCurrPage, setPersonagesOnCurrPage] = useState<IPersonage[]>([]);
  const [elementPerPage, setElementPerPage] = useState<number>(10);
  const [currPage, setCurrPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [selectedPersonage, setSelectedPersonage] = useState<IPersonage>();
  const [show, setShow] = useState<boolean>(false);

  // set the personages to show in each page - set total pages
  useEffect(():void => {
    const lastElement = Math.min(elementPerPage*currPage,favouritePersonages.length);
    const firstElement = elementPerPage*(currPage-1);
    setTotalPage(Math.ceil(favouritePersonages.length/elementPerPage));
    setPersonagesOnCurrPage(favouritePersonages.slice(firstElement,lastElement))
  },[currPage,favouritePersonages]);


  return(
    <div className="List">
      <h2 style={{ marginBottom:'30px'}}>Favourite Personages</h2>
      <ListCharger
        loading={false}
        personage={personageOnCurrPage}
        currPage={currPage}
        totalPage={totalPage}
        handleSelectedPersonage={setSelectedPersonage}
        handleCurrentPage={setCurrPage}
        handleShowDetails={setShow}
      />
      {show && <ModalSchede show={show} data={selectedPersonage} handleChange={setShow} favouritePersonageList={favouritePersonages} handleFavourite={handleFavourite}/>}
    </div>
  );
};

export default Favourite;
