import img1 from '../assets/house.png';
import img2 from '../assets/wall.png';

function Benefits (){
    return(
      <section className="p-8">

        <div className="flex gap-8">

            <div className="w-1/2 flex flex-col">
            <div className='flex items-center gap-2'>
                <img className="w-[80px]" src={img1} alt="House" />
                <h3 className="text-2x1 font-bold ml-[10px]">Acabamentos</h3>
                </div>
            
            <p className="mt-2 text-gray-700 font-inter ml-[100px]">Valorize cada ambiente
                    com acabamentos precisos e detalhes 
                    modernos.</p>
            </div>
            
            <div className="flex flex-col w-1/2 mt-[-12px]">
            <div className='flex items-center gap-2'>
                <img className="w-[100px]" src={img2} alt="Wall" />
                <h3 className="text-2x1 font-bold ml-[10px]">Espaço</h3>
                </div>
                
            
            <p className="mt-[0px] text-gray-700 font-inter ml-[120px]"> Transforme qualquer espaço
                    com execução refinada e 
                    instalação impecável.</p>
            </div>
        </div>
      </section>  
    )
}

export default Benefits