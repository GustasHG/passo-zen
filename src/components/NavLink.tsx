import Link from "next/link";
import {ReactNode } from "react";

interface NavLinkProps {
    href: string
    children: ReactNode
}

export default function NavLink({href,children,...props}:NavLinkProps){
    return(
        
        <Link 
            className="text-gray-200 bg-transparent hover:underline md:border-r  pr-6 "
            href= {href} >
                {children}
            </Link>
                
      
        
    )}