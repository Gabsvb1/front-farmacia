
import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'


interface cardCategoriaProps{
  categoria:Categoria
}

function CardCategorias({categoria}:cardCategoriaProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-green-800 text-white font-bold text-2xl'>{`Categoria: ${categoria.nome}`}</header>
      <p className='p-8 text-3xl bg-gray-300 h-full'>{categoria.descricao}</p>
      <div className="flex">
        <Link to={`/editarCategoria/${categoria.id}`} className='w-full text-slate-100 bg-lime-800 hover:bg-lime-600 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarCategoria/${categoria.id}`} className='text-slate-100 bg-red-900 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCategorias