import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setData] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`);
      setData(response.data);
    }
    fetchData();
  }, [page]);

  function nextPage() {
    setData([])
    setPage(prev => prev + 1);
  }
  
  function prevPage() {
    if (page > 1) {
      setData([])
      setPage(prev => prev - 1);
    }
  }

  let printData = (
    <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-center gap-5">
      <div className="h-14 w-14 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      <h3 className="text-white text-xl font-semibold">Loading images...</h3>
    </div>
  );


  if(userData.length > 0){
    printData = userData.map(function(elem, idx){
      return(
        <div key={idx} className='bg-white border h-fit w-fit rounded-2xl box-border'>
          <a href={elem.url} target="blank">
            <img src={elem.download_url} alt="Image" className='h-50 rounded-2xl w-50 object-cover cursor-pointer' />
          </a>
        </div>
      )
    }
    )
  }
  
  return (
    <>
      <div className='bg-black text-white h-screen w-full p-5 relative box-border'>
        
        <div className='flex flex-row justify-around items-center p-10 h-fit w-300 absolute bottom-2 box-border left-1/2 translate-x-[-50%]'>
          <button type="button" onClick={prevPage} className='bg-green-600 border-2 border-white rounded-2xl px-10 py-5 font-bold text-3xl text-white hover:scale-110 hover:bg-white hover:text-green-600 hover:border-green-600 active:bg-green-600 active:border-white active:text-white cursor-pointer '>Previous</button>
          <h1 className='font-bold text-4xl h-fit w-fit p-4'>Pg - {page}</h1>
          <button type="button" onClick={nextPage} className='bg-green-600 border-2 border-white rounded-2xl px-15 py-5 font-bold text-3xl text-white hover:scale-110 hover:bg-white hover:text-green-600 hover:border-green-600 active:bg-green-600 active:border-white active:text-white cursor-pointer '>Next</button>
        </div>

        <div className={`flex flex-row flex-wrap gap-10 justify-between overflow-auto scrollbar-hidden rounded-2xl p-3 relative border-4 border-white bg-gray-900        
          ${userData.length === 0 ? "h-118 w-full" : "h-fit w-full"}  `}>
            {/* the above condition will set border only when images are present but if images are loading then border will not appear. */}
            {printData}
        </div>
      </div>
    </>
  )
}

export default App