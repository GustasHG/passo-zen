import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex bg-gray-100  flex-col flex-grow ">
        <div className="grid md:grid-cols-6 grid-cols-1   text-black m-4 mt-40" >
          <div className="w-full h-full flex items-center justify-center col-span-2 ">
          <div className=" p-2 rounded-lg">
          <Image
            className="border border-Gray shadow-lg rounded-lg "
            src={'/foto-perfil.png'}
            alt="foto perfil"
            width={400}
            height={250}
          ></Image>
          </div>
          </div>
          <div className="flex flex-col p-1 rounded-lg md:col-span-4  ">
            <header className=" text-3xl  border-l-8 border-blue-500 mb-3 ">
               <h1 className="text-gray-500 font-sans"> Rosemarí da Silva Gonçalves</h1>
            </header>
            <p className="text-justify font-light">
            Rosemari da Silva Gonçalves, D.P.M. DABMSP, é uma podóloga certificada que se especializa no tratamento conservador do pé e tornozelo, incluindo o tratamento de feridas. Depois de obter um diploma de bacharel em Biologia, a Dra. Gonçalves obteve seu diploma médico em Podologia.

As condições que a Dra. Gonçalves mais frequentemente trata incluem pés diabéticos; artrite; joanetes; dedos em martelo; calos e calosidades; condições de pele e unhas; lesões esportivas; fraturas; problemas nos pés das crianças; problemas nos pés femininos. Ela tem um grande conhecimento sobre sapatos confortáveis e bonitos!

O foco da Dra. Gonçalves é chegar à raiz do problema e prevenir a recorrência. “Prevenção e educação são as chaves para ajudar meus pacientes. Eu gosto de explicar qual é o problema, o plano de tratamento e como prevenir uma recorrência. Seus pés são suas rodas, meu trabalho é mantê-los em movimento.”

A Dra. Gonçalves tem praticado por mais de 20 anos. Nosso consultório é um consultório de podologia de serviço completo, incluindo raios-X digitais de baixa dose. Nossa equipe é bilíngue para atender a comunidade hispânica.

Ela também foi palestrante em vários locais, como palestrante para várias organizações. Passar tempo com seu filho adolescente, marido e cachorro, Venus, é o favorito da Dra. Gonçalves, especialmente quando ela está viajando pelo mundo com eles (Venus tem que ficar em casa). Ela também gosta de vinhos finos e é um pouco gourmet. Ela gosta de cozinhar para sua família e amigos. A Dra. Gonçalves adora ficção científica - Star Wars é seu filme favorito e ela também adora os programas de TV Star Trek.
            </p>
          </div>

        </div>
    </main>
    </div>
  );
}
