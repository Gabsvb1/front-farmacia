import { Link, useNavigate } from 'react-router-dom'
function Navbar() {
 
let navbarComponent

  return (
    <>
     <div className='w-full bg-green-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <Link to='/' className='text-2xl font-bold uppercase'>Farmacia</Link>

            <div className='flex gap-4'>
              <div className='hover:underline'>Produtos</div>
              <div className='hover:underline'>Cadastrar Produto</div>
              <Link to='/categorias' className='hover:underline'>Categorias</Link>
              <Link to='/cadastroCategoria'  className='hover:underline'>Cadastrar Categoria</Link>
             
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar