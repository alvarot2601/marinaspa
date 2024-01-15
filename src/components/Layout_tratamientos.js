import React from "react";
import Layout from "./Layout";
import CartaPrecios from "../assets/pdf/carta_precios_2023.pdf";
import { FaDownload, FaEye } from "react-icons/fa";


import Button from '@mui/material/Button';
import { theme } from "../theme";
import { ThemeProvider } from "@emotion/react";

const Layout_tratamientos = ({ children }) => {
  
  return (
    <ThemeProvider theme={theme}>
    <Layout>
      <div className="py-5">
        <div className="flex flex-row flex-wrap justify-center gap-5 mt-5 mb-10 px-5">
        <Button style={{backgroundColor:theme.palette.primary, color:"#fff", minWidth:230}} variant="contained" size="large" target="_blank" href={CartaPrecios} endIcon={<FaEye />}>Ver Carta</Button>
        <Button style={{backgroundColor:theme.palette.primary, color:"#fff", minWidth:230}} variant="contained" size="large" target="_blank" href={CartaPrecios} endIcon={<FaDownload/>}  sx={{minWidth:230}}>Descargar Carta</Button>          
        </div>
        {children}
      </div>
    </Layout>
    </ThemeProvider>
  );
};
export default Layout_tratamientos;
/*

<Button
            as={Link}
            target="_blank"
            href={CartaPrecios}
            size="lg"
            radius="sm"
            variant="shadow"
            className="w-max max-w-[280px] min-w-[270px] flex-1 px-10 py-8 bg-zinc-700 text-zinc-50 text-xl font-semibold"
          >
            Ver carta <FaEye />
          </Button>
          <Button
            as={Link}
            href={CartaPrecios}
            download={CartaPrecios}
            size="lg"
            radius="sm"
            variant="shadow"
            className="w-max max-w-[280px] min-w-[270px] flex-1 px-10 py-8 bg-zinc-700 text-zinc-50 text-xl font-semibold"
          >
            Descargar carta <FaDownload/>
          </Button>
<Button as={Link} href={CartaPrecios} target='_blank' className='material-bubble flex-1 max-w-sm text-md px-20 py-10 outline-0 rounded border-2 border-transparent relative btn-transitions' >Ver Carta de precios <FaEye/></Button>
                    <Button as={Link} href={CartaPrecios} className='material-bubble max-w-sm text-md flex-1 px-20 py-10 outline-0 rounded border-2 border-transparent relative btn-transitions' download={CartaPrecios}>Descargar Carta de precios <FaDownload/></Button> */
