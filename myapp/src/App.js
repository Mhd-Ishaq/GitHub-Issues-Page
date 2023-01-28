import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import Issues from './components/Issues';
import Pagination from './components/Pagination';

const App = () => {
  const [issues, setIssues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const totalItems = issues.length;
  const totalPages =Math.ceil(totalItems / itemsPerPage) ;

  const handlePreviousPage = ()=> {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  const  handleNextPage = ()=> {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await axios.get(
        `https://api.github.com/search/issues?q={query} page=${currentPage}`
      );
      setIssues(res.data.items);
      setIsLoading(false);
    }
    fetchData();
  }, [currentPage]);

  if (isLoading) {
    return(
      <>
      <h1>GitHub Issues Page</h1>
      <p>Loading...</p>
      </>
    ) 
  }
  return (
    <>
    <h1>GitHub Issues Page</h1>
    <div className='issues-page'>
      <Issues issues={issues}/>
      <Pagination currentPage={currentPage} totalPages={totalPages} handlePreviousPage={handlePreviousPage} handleNextPage={handleNextPage}   />
    </div>
    </>
  )
}

export default App
