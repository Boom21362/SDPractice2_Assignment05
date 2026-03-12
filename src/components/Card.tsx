    //import styles from './card.module.css'
    import Image from 'next/image'
    import InteractiveCard from './InteractiveCard';

    export default function Card({venueName,imgSrc}:{venueName:string,imgSrc:string}){
        return(
            <InteractiveCard contentName={venueName}>
            <div className="relative w-[280px] h-[320px] verflow-hidden flex flex-col">
                <div className="relative w-full h-1/2">
                    <Image src= {imgSrc} 
                        alt='Product Picture'
                        fill={true}
                        objectFit= 'cover'  
                    />
                </div >
                <div 
                className="h-[20%]  p-[10px] text-[20px] flex items-center font-bold text-[#FF7F50]">
                    {venueName}
                </div>
            </div>
        </InteractiveCard>
        );
    }