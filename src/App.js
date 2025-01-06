import React,{useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {
  
  const[advise, setAdvise] = useState();
  const[id, setId] = useState();

  useEffect(()=>{
    const fetchAdvise = async()=>{
      try{
        const response = await axios.get("https://api.adviceslip.com/advice");
        setAdvise(response.data.slip.advice);
        setId(response.data.slip.id);
      }catch(error){
        console.log("error: ", error);
      }
    };
    fetchAdvise();
     const intervalId = setInterval(fetchAdvise, 900);
     return () => clearInterval(intervalId);
  },[]);

  return (
    // <div className='bg-slate-600 min-h-screen'>
    //     <div className="flex items-center justify-center min-h-screen">
    //       <div className="text-center">
    //         <div className='text-center text-white font-extrabold text-3xl'>ID:{id}</div>
    //         <div className="text-white font-bold text-2xl mb-4">ADVICE</div>
    //         <div className="h-52 w-[500px] border border-white flex items-center justify-center">
    //           <div className="text-white font-bold text-2xl">{advise}</div>
    //         </div>
    //       </div>
    //     </div>
    // </div>
    <div className="bg-slate-600 min-h-screen flex items-center justify-center">
    <div className="text-center p-4">
      <div className="text-white font-extrabold text-2xl sm:text-3xl mb-4">ID: {id}</div>
      <div className="text-white font-bold text-xl sm:text-2xl mb-4">ADVICE</div>
      <div className="h-auto w-full sm:w-[500px] max-w-full border border-white flex items-center justify-center p-4">
        <div className="text-white font-bold text-lg sm:text-2xl">{advise}</div>
      </div>
    </div>
  </div>
  )
}

export default App