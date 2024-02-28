import { ChangeEvent, useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../services/Service";


function FormularioCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    let navigate = useNavigate();
  
    const { id } = useParams<{ id: string }>();
  
     
    async function buscarPorId(id: string) {
      await buscar(`/categorias/${id}`,setCategoria, {
        headers: {},
      });
      
    }
  
    useEffect(() => {
      if (id !== undefined) {
        buscarPorId(id)
      }
    }, [id])
  
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
      setCategoria(
       { ...categoria,
        [e.target.name]: e.target.value}
      )
  
      console.log(JSON.stringify(categoria))
    }
  
    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault()
  
      if (id !== undefined) {
        try {
          await atualizar(`/categorias`, categoria, setCategoria, {
            headers: {}
          })
  
          alert('Categoria atualizado com sucesso')
          retornar()
  
        } catch (error: any) {
          console.log(error)
        }
  
      } else {
        try {
          await cadastrar(`/categorias`, categoria, setCategoria, {
            headers: {}
          })
  
          alert('Categoria cadastrado com sucesso')
  
        } catch (error: any) {
          console.log(error)
        }
      }
  
      retornar()
    }
  
    function retornar() {
      navigate("/categorias")
    }
  


    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                Cadastrar Categoria
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria} >
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Nome</label>
                    <input
                        type="text"
                        placeholder="Digite o nome da categoria..."
                        name='nome'
                        className="border-2 border-slate-700 rounded p-2"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        value={categoria.nome}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição da Categoria</label>
                    <input
                        type="text"
                        placeholder="Digite a descrição da categoria..."
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        value={categoria.descricao}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-green-900 hover:bg-green-700 w-1/2 py-2 mx-auto block"
                    type="submit"
                >
                    Cadastrar
                </button>
            </form>
        </div>
    );
}

export default FormularioCategoria;