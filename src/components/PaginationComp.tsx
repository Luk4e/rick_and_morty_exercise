import React,{ useState } from 'react';
import { Pagination } from 'react-bootstrap';
import { IPagination } from '../interfaces/apiInterfaces';

const PaginationComp = ({ currentPage, handleCurrentPage, lastPage}: IPagination): JSX.Element => {

  // component to create the pagination section to change page (bootstrap was used for the graphics)
  const [firstPage, setFirstPage] = useState<number>(1);

  return(
    <>
    <Pagination className="justify-content-center">
      {currentPage!==firstPage &&<Pagination.First onClick={() => handleCurrentPage(firstPage)} />}
      {currentPage-1>=firstPage &&<Pagination.Prev onClick={() => handleCurrentPage(currentPage-1)}/>}
      {currentPage-1>=firstPage && <Pagination.Item onClick={() => handleCurrentPage(currentPage-1)}>{currentPage-1}</Pagination.Item>}
      <Pagination.Item>{currentPage}</Pagination.Item>
      {currentPage+1<=lastPage && <Pagination.Item onClick={() => handleCurrentPage(currentPage+1)}>{currentPage+1}</Pagination.Item>}
      {currentPage+1<=lastPage && <Pagination.Next onClick={() => handleCurrentPage(currentPage+1)}/>}
      {currentPage!==lastPage &&<Pagination.Last onClick={() => handleCurrentPage(lastPage)} />}
    </Pagination>
    </>
  );
};

export default PaginationComp;
