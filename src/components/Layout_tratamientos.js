import React from "react";
import Layout from "./Layout";
import {Button, Link} from "@nextui-org/react";
import CartaPrecios from '../assets/pdf/carta_precios_2022.pdf';
import {FaDownload, FaEye} from "react-icons/fa";

const Layout_tratamientos = ({children})=>{
    return (
        <Layout>
            <div className="py-5 bg-gradient-to-br from-gray-50 to-gray-300">
                <div className='flex justify-center gap-5 mt-5 mb-10'>
                    <Button as={Link} href={CartaPrecios} target='_blank' className='material-bubble max-w-sm text-md px-20 py-10 outline-0 rounded border-2 border-transparent relative btn-transitions' >Ver Carta de precios <FaEye/></Button>
                    <Button as={Link} href={CartaPrecios} className='material-bubble max-w-sm text-md px-20 py-10 outline-0 rounded border-2 border-transparent relative btn-transitions' download={CartaPrecios}>Descargar Carta de precios <FaDownload/></Button>
                </div>
                {children}
            </div>
        </Layout>
    );
}
export default Layout_tratamientos;