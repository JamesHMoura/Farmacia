import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import {Pill} from '@phosphor-icons/react'

function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase flex'><Pill size={32} />FarmaDev</Link>

            <div className='flex gap-4'>
              <Link to='/categorias' className='hover:underline'>Categorias</Link>
              <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar