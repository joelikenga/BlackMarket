"use client"
import Link from "next/link";
import {ChevronBack, ChevronFoward, Location, People, Plus,} from "../../public/svgIcons";
import Image from "next/image";
import {useRef, useState} from "react";
import myStyle from "@/app/page.module.css";
import {motion} from "framer-motion";

export const Gadgets = () => {
   const sliderRef = useRef(null);
  const [slideWidth, SetslideWidth] = useState(300);


  const slideLeft = () => {
    const scrollDistance = slideWidth;
      const scrollDuration = 500;
        sliderRef.current.scrollBy({
          left: -scrollDistance,
          behavior: 'smooth',
          duration: scrollDuration,
      })
      }
  const slideRight = () => {
      const scrollDistance = slideWidth;
      const scrollDuration = 500; // in milliseconds
      sliderRef.current.scrollBy({
        left: scrollDistance,
        behavior: 'smooth',
        duration: scrollDuration,
      });
  }

    const details = [
        {image:"https://images.unsplash.com/photo-1558121556-2a39fc528338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",alt:"air jordan",name:"air jordan",price:300,amount:10},
        {image:"https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80",alt:"curology skin care",name:"curology skin care",price:490,amount:100},
        {image:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80",alt:"all stars shoe",name:"all stars shoe",price:1200,amount:500},
        {image:"https://images.unsplash.com/photo-1558121556-2a39fc528338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",alt:"air jordan",name:"air jordan",price:300,amount:10},
        {image:"https://images.unsplash.com/photo-1547887537-6158d64c35b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",alt:"sun de giola perfume",name:"sun de giola perfume",price:300,amount:50},
        {image:"https://images.unsplash.com/photo-1609001650223-aa7d7edccac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",alt:"iphone 12 pro max",name:"iphone 12 pro max",price:5000,amount:1},
        {image:"https://images.unsplash.com/photo-1625948515291-69613efd103f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",alt:"bluetooth wireless keyboard",name:"bluetooth wireless keyboard",price:800,amount:30},
        {image:"https://images.unsplash.com/photo-1558121556-2a39fc528338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",alt:"air jordan",name:"air jordan",price:300,amount:10},
        {image:"https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80",alt:"curology skin care",name:"curology skin care",price:490,amount:100},
        {image:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80",alt:"all stars shoe",name:"all stars shoe",price:1200,amount:500},

    ]


  return(
      <main className={" mx-6 my-6 rounded text-my_dark_2"}>
          <div>

              <div className={"flex justify-between"}>
                  <div className={"flex items-end"}>
                      <p className={" border-x-4 border-my_yellow px-2 py-0 capitalize font-normal text-md sm:text-lg md:text-xl"}>
                          <span className={" font-medium text-lg capitalize sm:text-xl md:text-2xl"}> gadgets</span>
                      </p>
                      <Link className={"ml-3 hover:underline text-md md:text-lg "} href={""}>more</Link>
                  </div>
                  <div className={"flex gap-3 text-2xl"}>
                    <i onClick={()=> slideLeft()} className={"p-2 rounded-full bg-my_dark_2 text-my_yellow cursor-pointer scale-90 md:scale-95 lg:scale-100"}><ChevronBack/></i>
                    <i  onClick={()=> slideRight()} className={"p-2 rounded-full bg-my_dark_2 text-my_yellow cursor-pointer scale-90 md:scale-95 lg:scale-100"}><ChevronFoward/></i>
                  </div>
              </div>



              <div  className={"my-6 rounded w-full bg-my_dark overflow-hidden"}>

                     <div ref={sliderRef} id={myStyle.hideScroll} onClick={()=>{}} className={"flex gap-3 rounded w-full bg-my_dark overflow-auto"} >
                          {
                              details.map((myDetails,index) =>{

                                  return(

                                      <div  key={index} className={"snap-x snap-mandatory h-fit  min-w-fit m-2 rounded bg-my_light relative font-medium z-0 capitalize"}>

                                          <div className={"absolute top-2 right-2 rounded flex p-2 text-sm bg-my_dark_2 text-my_yellow"}>
                                              <People className={""}/>
                                              <p translate={"no"}>{myDetails.location}</p>
                                          </div>

                                          <Image
                                            className={"h-60 w-60  shadow-my_dark shadow-lg object-cover m-2 md:m-4 rounded"}
                                            src={myDetails.image}
                                            alt={myDetails.alt}
                                            width={300}
                                            height={300}
                                            priority
                                           />

                                          <div className={"m-4 text-sm"}>

                                            <div translate={"no"} className={"border-l-4 pl-2 border-my_yellow"}>
                                                {myDetails.name}
                                            </div>

                                            <div className={"flex justify-between mt-2"}>
                                                <div className={""}>
                                                    <p>₺ {myDetails.price}</p>
                                                </div>

                                                {/*add button*/}
                                                <Link href={""}>
                                                    <motion.button initial={{rotate:-45}} whileTap={{rotate:-90}} transition={{type:"spring"}} className={"z-20 p-2 rounded-md bg-my_dark_2 text-my_yellow text-2xl"}>
                                                        <Plus className={"rotate-45"}/>
                                                    </motion.button>
                                                </Link>

                                            </div>
                                          </div>

                                      </div>
                                  )
                              }
                              )
                          }
                     </div>
              </div>
          </div>
      </main>
  )
}