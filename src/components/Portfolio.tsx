import Avatar from '../assets/Avatar.png';

const Portfolio = () => {
    return (
        <div className="flex flex-col bg-transparent w-full h-screen">
            {/* Presentacion */}
            <div className="flex justify-center items-center mx-auto p-4 rounded-2xl bg-white/5 backdrop-blur-sm mt-20 w-[60%] p-10 shadow-xl">
                <div className="pr-10">
                    <p className='text-lg font-bold text-white'>Soy Jonathan De Muria, desarrollador web full stack. Me gusta construir soluciones funcionales, modernas y bien pensadas. En este portfolio podés ver parte de mi trabajo y evolución. ¡Gracias por pasar!
</p>
                </div>
                    <img src={Avatar} alt="Avatar" className="w-64 h-auto rounded-full transition-all duration-500 hover:scale-105" />
            </div>
            {/* Proyectos */}
            <div className="mx-auto">
                
            </div>
            {/* Skills */}
            <div className="mx-auto">
                
            </div>
            {/* Contacto */}
            <div className="mx-auto">
                
            </div>
        </div>
    );
};

export default Portfolio;
