import React from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import {Pill} from '@phosphor-icons/react'

function Footer() {
 
  

  return (
    <>
        <div className='flex justify-center bg-[#606c38]  text-[#d6f0ba]'>
          <div className="container flex flex-col items-center py-4 ">
              <p className='text-lg font-bold'>Acesse nossas redes sociais</p>
              <div className='flex gap-2'>
                <LinkedinLogo size={48} weight='bold' />
                <InstagramLogo size={48} weight='bold' />
                <FacebookLogo size={48} weight='bold' />
              </div>
          </div>
        </div>

        <div className="flex justify-center bg-[#283618] text-[#99bb72]">
          <div className="container flex flex-col items-center py-4 gap-4">

          <h1 className='text-5xl font-bold flex items-center gap-4'><Pill size={42} />FarmaDev</h1>

            <p className='font-bold indent-0 text-center'>™&© FarmaDev, Inc. Todos direitos reservados. FarmaDev, Drogaria sonic são marcas <br /> registradas e a serviço da FarmaDev, Inc </p>
            
            </div>
          </div>
      </>
  )
}

export default Footer