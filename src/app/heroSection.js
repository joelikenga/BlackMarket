"use client"
import Image from "next/image";
import {autoSlider} from "@/app/myAnimation";
import {motion} from "framer-motion";
import {useEffect, useRef, useState} from "react";


const Slides = [
    {image:"https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"},
    {image:"https://images.unsplash.com/photo-1553456558-aff63285bdd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
    {image:"https://images.unsplash.com/photo-1611536326696-b52be8ef45f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
    {image:"https://images.unsplash.com/photo-1608528577891-eb055944f2e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
]
export  const HeroSection = () => {


    const [y, Sety] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        Sety(carousel.current.scrollWidth - carousel.current.offsetWidth);
    },[]);

    console.table({carousel:carousel,yValue:y},);

    return(
      <main className={"bg-my_dark my-4 mt-16 sm:mt-20 lg:h-[25rem] lg:mt-1 overflow-hidden"}>
          <div className={"grid grid-cols-3"}>

          {/*    first grid section*/}
              <div className={"col-span-1 h-[25rem]"}>

              </div>

          {/*    second grid section*/}
              <div className={"col-span-2 h-[25rem] "}>



                  {/*first slider div*/}
                  <div className={"flex gap-3 rotate-12  w-fit -mt-16 "}>

                      <div ref={carousel} className={"flex flex-wrap gap-3 w-[13rem] overflow-auto"}>

                          {Slides.map((content, index) => {
                              return(

                          <motion.div  key={index} className={""} initial={{y:0}} animate={{y:-600}} transition={{duration:12,repeat:Infinity,repeatType:"mirror"}}>
                              <Image
                                  className={"min-w-full rounded-lg"}
                                  src={content.image}
                                  alt={"images"}
                                  width={200}
                                  height={0}
                                  priority
                              />
                          </motion.div>

                              )
                          })
                          }
                      </div>



                      {/*  second auto slider div*/}
                      <div className={"flex flex-wrap-reverse flex-wrap gap-2 w-[13rem] overflow-auto"}>

                          {Slides.map((content, index) => {
                              return(

                          <div key={index} className={""}>
                              <Image
                                  className={"min-w-full rounded-lg"}
                                  src={content.image}
                                  alt={"images"}
                                  width={200}
                                  height={0}
                                  priority
                              />
                          </div>

                              )
                          })
                          }
                      </div>



                      {/*  third autoslider div*/}
                      <div className={"flex flex-wrap gap-2 w-[13rem] overflow-auto"}>

                          {Slides.map((content, index) => {
                              return(

                          <div key={index} className={""}>
                              <Image
                                  className={"min-w-full rounded-lg"}
                                  src={content.image}
                                  alt={"images"}
                                  width={200}
                                  height={0}
                                  priority
                              />
                          </div>

                              )
                          })
                          }
                      </div>



                  </div>

                  </div>

          </div>
      </main>
  );
}