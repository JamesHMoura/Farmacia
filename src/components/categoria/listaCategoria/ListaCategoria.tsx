import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { buscar } from '../../../service/Service';
import CardTemas from '../cardCategoria/CardCategoria';
import Categoria from '../../../models/Categoria';


function ListaTemas() {
  const [categorias, setTemas] = useState<Categoria[]>([]);

  const [filtro, setFiltro] = useState<Categoria[]>([]);

  let navigate = useNavigate();


  async function buscarCategorias() {
    try {
      await buscar('/categorias', setTemas);
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('O token expirou, favor logar novamente')
      }
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  const filtredList = categorias.filter((elements) => {
    if (filtro.toLocaleString() === ''){
      return elements
    } else {
      return elements.nome.toLowerCase().includes(filtro.toLocaleString())
    }
  })

  return (
    <>

      <label className="flex items-center justify-center">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
        </span>
        <input onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setFiltro(event.target.value)}} 
          className='border rounded border-black my-2 w-2/3 bg-gray-100 ' 
          type='text'
          placeholder="Buscar" 
          name='' 
          id=''/>
      </label>

      {/* <div className='flex justify-center bg-[#606c38]'>
        <input onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setFiltro(event.target.value)}} 
          className='border rounded border-black my-2 w-2/3 bg-gray-100 ' 
          type='text'
          placeholder="Buscar" 
          name='' 
          id=''/>
      </div> */}

      {categorias.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtredList.map((categoria) => (
              <>
                <CardTemas key={categoria.id} categoria={categoria} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaTemas;