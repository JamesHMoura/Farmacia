import React from 'react'
import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'


interface CardCategoriaProps {
    categoria: Categoria;
  }
  
  function CardCategoria({categoria}: CardCategoriaProps) {
    return (
      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header className='border-b px-6 bg-[#283618] text-white font-bold text-2xl'>categoria {categoria.id}</header>
        <p className='border-b p-1 text-3xl bg-[#bc6c25] h-full'>{categoria.nome}</p>
        <p className='p-5 text-2xl bg-[#dda15e] h-full'>{categoria.descricao}</p>
        <div className="flex">
          <Link to={`/editarCategoria/${categoria.id}`} className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
            <button>Editar</button>
          </Link>
          <Link to={`/deletarTema/${categoria.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
            <button>Deletar</button>
          </Link>
        </div>
      </div>
    )
  }

export default CardCategoria