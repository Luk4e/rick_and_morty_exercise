import React, { useEffect, useState } from 'react';
import { IEpisodie, IPersonageSchede } from '../interfaces/apiInterfaces';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

const linkEpisodieRoot = 'https://rickandmortyapi.com/api/episode/';

const ModalSchede = ( { show, data, handleChange, handleFavourite, favouritePersonageList }: IPersonageSchede ) : JSX.Element  => {
  // Modal component that show up the personages details and allow to save it in the favourite section

  const [episodiesNameList, setEpisodieNameList] = useState<IEpisodie[]>([]);

  // fatch data from api to get the episodies name, all was performed with a single call passing an
  // array of episodies number
  useEffect(():void => {
    if(data!==undefined){
      axios
        .get<IEpisodie>(`${linkEpisodieRoot}${data.episode.map((ep) => ep.replace(linkEpisodieRoot,''))}`, {
          headers: {
            "Content-Type": "application/json"
          },
        })
        .then( response => {
          setEpisodieNameList(episodiesNameList.concat(response.data));
        })
    }
  },[]);

  // handle the button to add or remove personage from favourite list
  // the favourite list is showd ordered by name
  const handleAddOrRemoveFavourite = ():void => {
    if(data!==undefined){
      let res;
      if(favouritePersonageList.includes(data)){
        res = favouritePersonageList.filter( ps => ps!==data);
      }else {
        res = favouritePersonageList.concat(data);
      }
      handleFavourite(res.sort((a,b) => a.name.localeCompare(b.name)));
      handleChange(false);
    }
  };

  // check if data is undefind (data is personage specifics) 
  const showData = ():JSX.Element => {
    if(data!==undefined){
      return(
      <Modal show={show} >
        <Modal.Header>
          <Modal.Title>{data.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={data.image} alt={`${data.name} image`}></img>
          <Modal.Title>Characters</Modal.Title>
          <p>Gender: {data.gender}</p>
          <p>Status: {data.status}</p>
          <p>Species: {data.species}</p>
          <p>Origin: {data.origin.name}</p>
          <p>Location: {data.location.name}</p>
          <Modal.Title>Episodies list</Modal.Title>
          {episodiesNameList.length!==0 ? episodiesNameList.map(ep => <p key={ep.id}>{ep.name}</p>):<p>No Episodie</p>}
        </Modal.Body>
    
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleChange(false)}>Close</Button>
          <Button 
            variant="primary" 
            onClick={() => {
              handleAddOrRemoveFavourite();
            }}>
            {favouritePersonageList.includes(data) ? 'Remove from favourite' : 'Add to favourite' }
          </Button>
        </Modal.Footer>
      </Modal>
    )
    }else{
      return <p>No data</p>
    }
  }

  return(
    <>
      {showData()}
    </>
  );
};

export default ModalSchede;
