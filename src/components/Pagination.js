import React from 'react';
//Pagination 
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }


  return (
    <nav className="navigation_wrapper justify-content-center d-flex mt-5">
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='javascript:' className='page-link'>
              {number}
            </a>
           
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;