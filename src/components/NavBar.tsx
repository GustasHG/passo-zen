import Link from "next/link";
import NavLink from "./NavLink";

export default function NavBar(){
    return(
        <div className="grid md:grid-cols-3 grid-cols-1  md:gap-12 gap-1 text-2xl w-full ">
     
        <NavLink 
            href={'/sobre-mim'}>
                Sobre Mim
        </NavLink>
        <NavLink 
            href={'/tratamentos'}>
                Tratamentos
        </NavLink>
        <NavLink 
            href={'/contato'}>
                Contato
        </NavLink>
        </div>
        
    )}