import Avatar from '../assets/Avatar.png';

const Portfolio = () => {
    return (
        <div className="flex flex-col bg-transparent w-full h-screen">
            {/* Presentacion */}
            <div className="flex justify-center items-center mx-auto border-2 border-black p-4 rounded-2xl bg-background_2 mt-20 w-1/2 p-10">
                <div className="pr-10">
                    <p className='text-lg font-bold text-white'>¡Hola! Soy Jonathan De Muria, desarrollador web con enfoque full stack.
Me apasiona crear soluciones digitales que sean funcionales, modernas y bien diseñadas. Trabajo con tecnologías como React, TypeScript, JavaScript, y también tengo experiencia en el desarrollo backend y mobile.
En este espacio vas a encontrar algunos de los proyectos en los que estuve trabajando. Cada uno refleja mi compromiso por aprender, mejorar y aportar valor a través del código.
Estoy en constante crecimiento, siempre buscando nuevos desafíos y oportunidades para seguir desarrollándome profesionalmente.
Si tenés una idea, proyecto o simplemente querés charlar, no dudes en contactarme.
</p>
                </div>
                    <img src={Avatar} alt="Avatar" className="w-64 h-auto rounded-full" />
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
