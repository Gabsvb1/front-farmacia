
import './Home.css';
import logo from './../../assets/logo.png'

function Home() {
    return (
        <>
            <div className="bg-green-800 flex justify-center">
                
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Colaborador - FarmaApp</h2>
                        <p className='text-xl'>Sistema de gerenciamento de medicamentos</p>

                        <div className="flex justify-around gap-4">

                            <button className='rounded bg-white text-purple-800 py-2 px-4'>Ver Produtos</button>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img src={logo} alt="" className='w-1/3' />

                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;