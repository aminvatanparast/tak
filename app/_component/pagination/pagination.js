import React, {useState} from 'react';
import "./pagination.scss"
import ReactPaginate from 'react-paginate';

const Pagination = ({itemsPerPage=4 , item , changePage , total}) => {
  const [itemOffset, setItemOffset] = useState(0);
  const items = item || [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const pageCount =  Math.ceil((total || items.length) / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    changePage(event.selected + 1)
  };
  return (
    pageCount > 1 &&
    <div className={"pagination"}>
      <>
        <ReactPaginate
          breakLabel="..."
          nextLabel="صفحه بعد "
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel=" صفحه قبل"
          renderOnZeroPageCount={null}
        />
      </>
    </div>
  );
};

export default Pagination;
