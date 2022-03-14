import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { IListCharger } from '../interfaces/apiInterfaces';
import ListElement from './ListElement';
import PaginationComp from './PaginationComp';

const ListCharger = ({ loading, personage, currPage, totalPage, handleSelectedPersonage, handleCurrentPage, handleShowDetails }: IListCharger):JSX.Element => {
  // component to manage all the list elements, checking also if the list are loading or is empty

  if(personage.length===0 && loading){
    return(
      <h2>Loading...</h2>
    )
  }else if(personage.length===0 && !loading){
    return(
      <h2>No Personages</h2>
    )
  }else{
    return(
      <>
        <ListGroup style={{ marginBottom:'20px' }}>
          {personage.map((p)=> 
            <ListElement key={p.id} personage={p} handlePersonage={handleSelectedPersonage} handleShow={handleShowDetails} />
          )}
        </ListGroup>
        <PaginationComp currentPage={currPage} handleCurrentPage={handleCurrentPage} lastPage={totalPage} />
      </>
    )
  }
}

export default ListCharger;
