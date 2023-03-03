"use client"

import {ArrowRight, Cart, Signout, Signin, UserIcon, Bar, Times, } from "../../public/svgIcons";
import Link from "next/link";
import {useState} from "react";
import  {motion,AnimatePresence} from "framer-motion";
import {opacityVariant, showSidebarVariant, clickVariant, } from "@/app/myAnimation";


export  const SearchSection = () => {

  //   state initializations

  const [sidebar, Setsidebar] = useState(false);
  const [closeModal, SetcloseModal] = useState(true);

  // functions

    const closeModalclick = () =>{
      SetcloseModal(!closeModal);
    }
    const sidebarClick = () => {
        Setsidebar(!sidebar);
    }

  return(
      <main className={"text-my_dark_2 fixed w-full top-0 bg-[rgba(16,24,32,0.5)] px-4 py-1  sm:py-3 sm:px-5 z-50 lg:sticky"}>


           {/*search input*/}
          <div className={" rounded flex justify-between items-center"}>



                {/*  sidebar icon*/}
              <div
                  onClick={()=>{sidebarClick()}}
                  style={{zIndex : sidebar ? 21 : 20}}
                  className={"text-my_dark_2 text-my_dark_2 items-center block md:hidden"}>
                  {sidebar ? <Times className={"p-1 text-4xl rounded-full bg-my_dark_2 text-my_yellow "}/> : <Bar className={"p-1 text-4xl"}/>}

              </div>




                {/*    small screen sidebar contents*/}
              <AnimatePresence>
                  { sidebar && (
                      <motion.div
                          style={{display: sidebar ? "block" : "none"}}
                          className={" absolute flex top-0 left-0 z-20 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.5)] "}
                          variants={opacityVariant}
                          initial="start"
                          animate="stop"
                          exit={{opacity:0,}}
                      >


                      <motion.div
                          variants={showSidebarVariant}
                          initial="start"
                          animate="stop"
                          exit={{x:-100, opacity:0}}
                          className={" bg-my_light h-full w-[17rem] p-4"}
                      >

                          {/*category contents*/}
                          <div className={"overflow-y-scroll w-[] mt-10 h-fit w-full"}>
                                gg
                          </div>
                      </motion.div>

                      </motion.div>
                  )}
              </AnimatePresence>





            {/*  logo name*/}
            <div className={"my-1 w-fit hidden md:block xl:hidden"}>
                <div className={"flex justify-between block xl:hidden"}>
                    <h3 className={"text-xl font-extrabold text-center"}>BlackMarket</h3>
                </div>
            </div>



            {/*input*/}
            <div style={{zIndex :closeModal ? "19" : "2500"}}>
                <div className={" h-fit flex bg-my_light bg-my_dark rounded p-1 md:p-2 "}>

                    <button
                        onClick={() => {SetcloseModal(false)}}
                        className={" text-start h-[1.5rem] w-[42vw] ml-3 bg-my_light bg-my_dark outline-0 font-medium text-my_dark text-sm sm:h-fit sm:min-w-[36vw] md:w-fit md:text-md   lg:w-[44vw]"}
                    >
                        <div className={"mt-[.1rem] md:mt-[.2rem]"}>Quick search...</div>
                    </button>

                    {/*search details modal*/}

                    <AnimatePresence >
                        { !closeModal &&
                            // search details dark background
                            <motion.div
                                style={{display: closeModal ? "none" : "block"}}
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                transition={{type:"spring", damping:10, stiffness:100, duration: .2}}
                                exit={{opacity:0,}}
                                className={"capitalize top-0 left-0 z-20 absolute bg-[rgba(0,0,0,0.7)] w-full h-[100vh]"}
                            >
                                <motion.div
                                    initial={{opacity:0}}
                                    animate={{opacity:1}}
                                    transition={{type:"spring", damping:10, duration: 0.1, delay:0.2}}
                                    className={"p-4 w-[22rem] h-[70vh] rounded-lg bg-my_dark_2 right-0 left-0 absolute top-[15%]  mx-auto  sm:w-[30rem] md:w-[40rem]"}>

                                    <div className={"flex gap-3 justify-between"}>
                                        <div className={"flex text-my_dark_2"}>
                                            <div className={"p-1 rounded-sm text-xl bg-my_yellow"}><Times/></div>
                                            <input
                                                autoFocus
                                                className={"text-my_dark_2 outline-0 bg-my_dark px-2 rounded"}
                                                placeholder={"search all.."}
                                                type={"search"}

                                            />
                                        </div>

                                        {/*modal buttons*/}
                                        <div className={"inline-flex text-my_dark_2 gap-5 text-xl md:text-2xl"}>
                                            <div onClick={()=>{closeModalclick()}} className={"p-1 rounded-full bg-my_yellow cursor-pointer"}><Times/></div>
                                        </div>


                                    </div>

                                </motion.div>

                            </motion.div>
                        }
                    </AnimatePresence>

                    <motion.button
                        variants={clickVariant}
                        whileTap="click"
                        className={"text-xl px-2 mr-1 bg-my_dark_2 text-my_yellow rounded cursor-pointer sm:px-4 sm:text-2xl"}>
                        <ArrowRight className={""}/>
                    </motion.button>

                </div>
            </div>




            {/*  cart and login*/}
            <div className={" inline-flex text-my_dark_2 mt-2"}>

                <div className={"text-4xl mt-1 mr-3 justify-between flex hidden xl:block"}>
                    <Cart className={"cursor-pointer"}/>
                </div>


                <div
                    className={"font-medium text-sm mt-1 hidden md:block "}>
                    <button className={"px-3 py-2 bg-my_yellow text-my_dark_2 mx-2 rounded inline-flex"}> <Signin className={"text-xl"}/> login</button>
                    <button className={"px-3 py-2 bg-my_dark_2 text-my_yellow ml-1 rounded inline-flex"}> <Signout className={"text-xl"}/> Signup</button>
                </div>


                {/*small screen account profile button*/}
                <div className={"block relative md:hidden"}>

                    <motion.button
                      variants={clickVariant}
                      whileTap="click"
                      className={" bg-my_dark_2 text-my_yellow rounded-full inline-flex mb-1"}
                    >
                        <UserIcon className={"text-xl m-2"}/>
                    </motion.button>

                    {/*small screen user profile content*/}
                    <div className={"hidden absolute right-0 top-10 p-3 rounded w-[13rem] bg-my_dark h-fit"}>

                        <div className={"flex justify-between font-normal text-[0.8rem]"}>
                            <Link href={""} className={"px-2 py-1 bg-my_yellow text-my_dark_2 mx-2 rounded inline-flex"}><Signin className={" text-sm mt-[.1rem] mr-[.1rem]"}/>login</Link>
                            <Link href={""} className={"px-2 py-1 bg-my_dark_2 text-my_yellow ml-1 rounded inline-flex"}><Signout className={"text-sm mt-[.1rem] mr-[.1rem]"}/> Signup</Link>
                        </div>

                    </div>

                </div>

            </div>



          </div>

      </main>
  )
}