import img1 from "../assets/forro-pvc-madeira.webp"
import img2 from "../assets/molduras-sancas-gesso-sp-1.jpg"
import Benefits from "./Benefits";

function Intro(){
    return(
<section className="pt-[150px] px-[20px] pb-8 bg-white relative">

{/* quadrado */}
<div className="absolute top-10 left-0 w-16 h-[100px] bg-gray-800"></div>
  <div className="bg-gray-100 max-w-[1800px] mx-auto border border-gray-300 p-10 flex flex-col">
{/* BOLINHAS */}
<div className="absolute h-[160px] right-[90px] bottom-20 flex flex-col gap-2">
  <div className="w-[100px] h-[100px]  border border-gray-900 rounded-full"></div>
  <div className="w-[100px] h-[100px]  border mt-[-80px] border-gray-600 rounded-full"></div>
  <div className="w-[100px] h-[100px]  border  mt-[-80px] border-gray-400 rounded-full"></div>
</div>
    {/* LINHA DE CIMA */}
    <div className="flex gap-8 items-start">

      <div className="w-1/2 pl-6">
        <h2 className="text-4xl font-inter">
          REVESTIMENTOS INTERNOS E EXTERNOS.
        </h2>

        <p className="mt-20 text-gray-900 font-inter text-2xl">
          Execução especializada em gesso, forros, sancas, divisórias, molduras e pisos. Entregamos soluções de alto padrão para projetos internos e externos em residências e empresas.
        </p>
      </div>

      <div className="w-1/2 relative h-[600px] flex justify-end">
        <img className="w-[400px] h-[250px] object-cover absolute top-[-10px] right-[-10px]" src={img1} />
        <img className="w-[400px] h-[250px] object-cover absolute mt-[320px] left-[150px]" src={img2} />
      </div>

    </div>

    {/* LINHA DE BAIXO */}
    <div className="-mt-[260px] w-1/2 ">
      <Benefits />
    </div>

  </div>

</section>
    )
}

export default Intro