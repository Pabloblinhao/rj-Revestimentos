import img1 from "../assets/forro-pvc-madeira.webp"
import img2 from "../assets/molduras-sancas-gesso-sp-1.jpg"
import Benefits from "./Benefits";

function Intro(){
    return(
<section className="pt-32 px-8 pb-8 bg-white">

  <div className="bg-gray-100 max-w-[1500px] mx-auto border border-gray-300 p-10 flex flex-col">

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
        <img className="w-[300px] h-[250px] object-cover absolute top-0 right-0" src={img1} />
        <img className="w-[300px] h-[250px] object-cover absolute top-72 left-20" src={img2} />
      </div>

    </div>

    {/* LINHA DE BAIXO */}
    <div className="-mt-[280px] w-1/2 pl-6">
      <Benefits />
    </div>

  </div>

</section>
    )
}

export default Intro