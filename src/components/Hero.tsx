import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const handleOpenLink = () => {
        // Abre el enlace en una nueva pestaña
        window.open(
            src="../media/CVmanl2.pdf",
            "_blank" // Este atributo indica que se debe abrir en una nueva pestaña
        );
    };

    return (
        <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent"></div>
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-4 relative z-10">
                <div className="md:w-1/2 flex flex-col items-start text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Welcome to my Portfolio on <span className="text-emerald-500">MANtrix</span>
                    </h1>
                </div>

                <div className="flex flex-col items-center text-center md:w-1/2 mb-6 md:mb-0">
                    <div className="w-48 h-48 md:w-64 md:h-64 relative mb-6">
                        <div className="absolute inset-0 rounded-full animate-border-pulse border-4 border-emerald-500"></div>
                        <img
                            src="https://static.wixstatic.com/media/c6eee4_c375618439054fe8bd5054d8806e73dc~mv2.png/v1/fill/w_331,h_331,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Photoroom-20240709_020211.png"
                            alt="Foto Miguel Angel"
                            className="w-full h-full object-cover rounded-full border-4 border-emerald-500 animate-fadeIn"
                        />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Miguel Ángel <span className="text-emerald-500 mt-2 block">Núñez López</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl text-gray-400 mb-6">
                        Junior Software Engineer
                    </h2>
                    <button
                        onClick={handleOpenLink}
                        className="buttonpro"
                        aria-label="Abrir enlace del CV"
                    >
                        <Download size={20} />
                        Download CV
                    </button>
                </div>
            </div>
        </section>
    );
}
