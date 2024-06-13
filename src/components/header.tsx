import Image from "next/image";
import NavBar from "./NavBar";
import Link from "next/link";

export default function Header(){
    return(
        <header >
            <div 
            className="relative flex items-center bg-opacity-10"
                style={{
                    backgroundImage: `url(/foot-banner.jpg)`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    paddingBottom: '10%',
                }} 
                >
                <div 
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    }}
                />
                <div className="flex items-center" style={{ position: 'relative', zIndex: 1 }}>
                    <Link
                        href={'/'}
                    >
                        <Image 
                            src="/logo-passozen.png"
                            alt="Logo passozen"
                            width={150}
                            height={200}
                            className="mx-6"
                            />
                            <h1 className="text-MarineBlue flex mx-6 text-3xl font-serif">
                                <p className="font-bold">Passo</p> 
                                <p className="text-white">Zen</p>
                            </h1>
                        </Link>
                        <NavBar/>
                </div>
            </div>
        </header>
    )
}
