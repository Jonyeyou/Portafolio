import Avatar from '../assets/Avatar.png';
import { Typewriter } from 'react-simple-typewriter';
import { useState } from 'react';

const Portfolio = () => {

    const [done, setDone] = useState(false);

    return (
        <div className="flex flex-col bg-transparent w-full h-screen">
            {/* Presentacion */}
            <div className="grid grid-cols-3 items-center mx-auto p-4 rounded-2xl bg-white/5 backdrop-blur-sm mt-20 w-[60%] p-10 shadow-xl">
                <div className="animate-fade-in">
                    <img src={Avatar} alt="Avatar" className="w-64 h-auto rounded-full transition-all duration-500 hover:scale-105" />
                </div>
                <div className="pr-10 text-white h-auto text-xl text-left col-start-2 col-end-4">
                    {!done ? (
                        <Typewriter
                            words={["Soy Jonathan De Muria, desarrollador web full stack. Me gusta construir soluciones funcionales, modernas y bien pensadas. En este portfolio podés ver parte de mi trabajo y evolución. ¡Gracias por pasar!"]}
                            loop={1}
                            typeSpeed={50}
                            deleteSpeed={0}
                            delaySpeed={0}
                            cursor
                            cursorStyle="|"
                            cursorColor="white"
                            onLoopDone={() => console.log('Loop done')}
                        />
                    ) : (
                        <p>Soy Jonathan De Muria, desarrollador web full stack. Me gusta construir soluciones funcionales, modernas y bien pensadas. En este portfolio podés ver parte de mi trabajo y evolución. ¡Gracias por pasar!</p>
                    )}
                </div>
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
