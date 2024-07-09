import React from 'react';
import homeLogo from '../../assets/Sonic_1991.png'

import './Home.css';
import {Ambulance} from '@phosphor-icons/react'
import ListaCategoria from '../../components/categoria/listaCategoria/ListaCategoria';


function Home() {
    return (
        <>
        <div className="bg-[#606c38] flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold flex items-center gap-4'><Ambulance size={50} />Drogaria Sonic!</h2>
              <p className='text-xl'>Remédios e produtos de beleza</p>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
        <div className='min-h-[1000px] bg-[#fefae0]'>
        <ListaCategoria />
        </div>
      
      </>
    );
}

export default Home;