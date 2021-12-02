
import {motion} from "framer-motion";
import Link from "next/link";

interface CardProps {
  href: string
  imgSrc: string
  layoutId: string
}

const Card: React.FC<CardProps> = ({href, imgSrc, layoutId}) =>{
  return(
    <Link href={href}>
        <div className="relative h-20 md:h-40 bg-gray-200 rounded-x1 cursor-pointer  hover:bg-gray-50 transition">
    <motion.img src={imgSrc} className="w-full h-full" layoutId={layoutId}/>
  </div>
    </Link>

  )
}

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl mt-10 md:mt-24 leading none font-extrabold tracking-tight text-grey-900 sm:">Contrua sites modernos com agilidade sem precisar sair do HTML</h1>
    
    <div className=" mt-10 md:mt-24 grid w-full grid-cols-1 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-1">

      <Card href={'/nextjs'} imgSrc={'/img/nextjs.svg'} layoutId={'nextjs-logo'}/>
      <Card href={'/tailwind'} imgSrc={'/img/tailwind.svg'} layoutId={'tailwind-logo'}/>
      <Card href={'/framermotion'} imgSrc={'/img/framermotion.svg'} layoutId={'framermotion-logo'}/>
   
    </div>
    
    </div>
  )
}
