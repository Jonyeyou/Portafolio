import logo from '../assets/logo-2.png';

import { useState, useEffect, useRef } from 'react';

const Header = () => {
    const [activeSection, setActiveSection] = useState('inicio');
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const navRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<{[key: string]: HTMLAnchorElement}>({});

    // Efecto para actualizar la posición del indicador cuando cambia la sección activa o se monta el componente
    useEffect(() => {
        const updateIndicator = () => {
            // Usar un pequeño retraso para asegurar que los elementos del DOM estén disponibles
            setTimeout(() => {
                const activeElement = itemsRef.current[activeSection];
                if (activeElement && navRef.current) {
                    const navRect = navRef.current.getBoundingClientRect();
                    const activeRect = activeElement.getBoundingClientRect();
                    
                    setIndicatorStyle({
                        left: activeRect.left - navRect.left,
                        width: activeRect.width
                    });
                }
            }, 100);
        };

        // Actualizar el indicador cuando cambia la sección activa
        updateIndicator();
        
        // Escuchar cambios de tamaño de ventana
        window.addEventListener('resize', updateIndicator);
        
        // Limpiar el event listener al desmontar el componente
        return () => window.removeEventListener('resize', updateIndicator);
    }, [activeSection]);
    
    // Efecto para inicializar la sección activa basada en la URL al cargar
    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash && ['inicio', 'proyectos', 'skills', 'contacto'].includes(hash)) {
            setActiveSection(hash);
        }
    }, []);

    // Efecto para detectar la sección actual al hacer scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['inicio', 'proyectos', 'skills', 'contacto'];
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
        e.preventDefault();
        setActiveSection(section);
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="bg-gray-800 p-4 w-full fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <img src={logo} alt="LOGO" className="w-12 h-auto" />
                
                <nav ref={navRef} className="hidden md:flex relative">
                    <div className="flex relative">
                        {['inicio', 'proyectos', 'skills', 'contacto'].map((item) => (
                            <a
                                key={item}
                                ref={el => { if (el) itemsRef.current[item] = el; }}
                                href={`#${item}`}
                                onClick={(e) => handleClick(e, item)}
                                className={`mx-4 px-2 py-2 text-white hover:text-blue-400 transition-colors relative ${
                                    activeSection === item ? 'font-medium' : ''
                                }`}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </a>
                        ))}
                        <div 
                            className="absolute bottom-0 h-0.5 bg-blue-400 transition-all duration-300 ease-in-out"
                            style={{
                                left: `${indicatorStyle.left}px`,
                                width: `${indicatorStyle.width}px`,
                            }}
                        />
                    </div>
                </nav>

                <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </a>
                    <a href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="GitHub">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                        </svg>
                    </a>
                    <a href="#" className="text-white hover:text-blue-400 transition-colors" aria-label="Twitter">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                        </svg>
                    </a>
                </div>

                {/* Menú móvil */}
                <button className="md:hidden text-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Menú móvil desplegable */}
            <div className="md:hidden mt-2 hidden">
                <a href="#inicio" className="block py-2 text-white hover:bg-gray-700 px-4 rounded">Inicio</a>
                <a href="#proyectos" className="block py-2 text-white hover:bg-gray-700 px-4 rounded">Proyectos</a>
                <a href="#skills" className="block py-2 text-white hover:bg-gray-700 px-4 rounded">Skills</a>
                <a href="#contacto" className="block py-2 text-white hover:bg-gray-700 px-4 rounded">Contacto</a>
            </div>
        </header>
    );
};

export default Header;
