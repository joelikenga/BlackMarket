"use client"

import {ArrowRight, Cart, Signout, Signin, UserIcon, Bar, Times, Magnifier,} from "../../public/svgIcons";
import Link from "next/link";
import {useState} from "react";
import  {motion,AnimatePresence} from "framer-motion";
import {opacityVariant, showSidebarVariant, clickVariant, } from "@/app/myAnimation";


export  const SearchSection = () => {

  //   state initializations

  const [sidebar, Setsidebar] = useState(false);
  const [closeModal, SetcloseModal] = useState(false);
  const [profile, Setprofile] = useState(false);

  // functions

    const closeModalclick = () =>{
      SetcloseModal(!closeModal);
    }
    const sidebarClick = () => {
        Setsidebar(!sidebar);
    }
    const profileClick = () => {
        Setprofile(!profile);
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
                          className={" absolute  top-0 left-0 z-20 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.5)] "}
                          variants={opacityVariant}
                          initial="start"
                          animate="stop"
                          exit={{opacity:0,}}
                      >

                          <div className={"flex justify-start gap-4 h-full relative  xl:hidden"}>
                              <motion.div
                                  variants={showSidebarVariant}
                                  initial="start"
                                  animate="stop"
                                  exit={{x:-100, opacity:0}}
                                  className={" bg-my_light h-full w-[18rem] md:w-[24rem] p-4"}
                              >


                                  {/*category contents*/}
                                  <div className={"overflow-y-scroll w-[] mt-14 sm:mt-16 h-fit w-full md:mt-6"}>
                                        gg
                                  </div>
                              </motion.div>

                                  {/*medium screen sidebar close*/}
                              <div
                                  onClick={()=>{sidebarClick()}}
                                  className={"z-30 bg-my_dark mt-3 h-fit top-4 rounded-full  text-my_yellow hidden text-3xl sm:hidden md:block xl:hidden"}>
                                  <Times className={"m-3 text-4xl rounded-full bg-my_dark text-my_dark_2 "}/>
                              </div>
                           </div>


                      </motion.div>
                  )}
              </AnimatePresence>





            {/*  logo name*/}
            <div className={"my-1 w-fit hidden md:block xl:hidden"}>
                <div className={"flex justify-between block xl:hidden"}>
                    <h3 className={"text-xl font-extrabold text-center"}>BlackMarket</h3>
                </div>
            </div>



            {/*quiick search button*/}
            <div>
                <div className={" h-fit flex bg-my_light bg-my_dark rounded p-1 md:p-2 "}>

                    <button
                        onClick={() => {SetcloseModal(true)}}
                        className={" text-start h-[1.5rem] w-[42vw] ml-3 bg-my_light bg-my_dark outline-0 font-medium text-my_dark text-sm sm:h-fit sm:min-w-[36vw] md:w-fit md:text-md   lg:w-[44vw]"}
                    >
                        <div className={"mt-[.1rem] md:mt-[.2rem]"}>Quick search...</div>
                    </button>

                    {/*search details modal*/}

                    <AnimatePresence >
                        { closeModal &&
                            // search details dark background
                            <motion.div
                                style={{display: closeModal ? "block" : "none"}}
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                transition={{type:"spring", damping:10, stiffness:100, duration: .2}}
                                exit={{opacity:0,}}
                                className={"capitalize top-0 left-0 z-20 absolute bg-[rgba(0,0,0,0.7)] w-full h-[100vh]"}
                            >
                                {/*modal*/}
                                <motion.div
                                    initial={{opacity:0}}
                                    animate={{opacity:1}}
                                    transition={{duration: 0.1, delay:0.2}}
                                    className={"relative p-4 w-[22rem] h-[70vh] rounded-lg bg-my_dark_2 right-0 left-0 absolute top-[2%]  mx-auto  sm:w-[30rem] md:w-[40rem] xl:ml-14"}>

                                    {/*modal header*/}
                                    <div className={"flex items-center gap-3 justify-between"}>
                                        <div className={"flex rounded-sm bg-my_dark p-1 text-my_dark_2"}>
                                            <div className={"rounded-sm w-fit p-[.1rem]  rounded-sm text-2xl bg-my_yellow"}><Magnifier/></div>
                                            <input
                                                autoFocus
                                                className={"w-[13rem] font-medium  ml-2 outline-none bg-my_dark rounded sm:text-sm sm:w-[16rem] md:w-[22rem]"}
                                                placeholder={"search all.."}
                                                type={"search"}
                                            />
                                        </div>

                                        {/*modal buttons*/}
                                        <div className={"m-1 inline-flex text-my_dark_2 gap-5 text-xl md:text-2xl"}>
                                            <div onClick={()=>{closeModalclick()}} className={"p-1 rounded-full bg-my_yellow cursor-pointer"}><Times/></div>
                                        </div>


                                    </div>


                                    {/* modal body*/}

                                    <div className={"overflow-y-auto rounded flex item-center bg-[rgba(255,255,255,0.1)] h-[85%] my-3 lg:h-[82%]"}>

                                    </div>

                                </motion.div>

                            </motion.div>
                        }
                    </AnimatePresence>

                    <motion.button
                        onClick={() => {SetcloseModal(true)}}
                        variants={clickVariant}
                        whileTap="click"
                        className={" text-xl px-2 mr-1 bg-my_dark_2 text-my_yellow rounded cursor-pointer sm:px-4 sm:text-2xl"}>
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
                      onClick={() => {profileClick()}}
                      onBlur={() => {Setprofile(false)}}
                      variants={clickVariant}
                      whileTap="click"
                      className={" bg-my_dark_2 text-my_yellow rounded-full inline-flex mb-1"}
                    >
                        {profile ? <Times className={"text-xl m-2"}/> : <UserIcon className={"text-xl m-2"}/>}
                    </motion.button>

                    {/*small screen user profile content*/}
                    <AnimatePresence>
                        { profile &&
                        <motion.div
                            initial={{opacity:0,x:500}}
                            animate={{opacity:1,x:0}}
                            transition={{duration:0.5, damping:10, type:"spring"}}
                            exit={{opacity:0,x:500}}
                            style={{display: profile ? "block" : "none"}}
                            className={"bg-my_dark_2 absolute right-0 top-10 p-4 rounded w-[15rem] h-[18rem] max-h-fit"}>

                            <div
                                className={"flex justify-center font-normal text-[0.8rem]"}>
                                <Link href={""} className={"px-2 py-1 bg-my_dark text-my_dark_2 mx-2 rounded inline-flex"}><Signin className={"text-sm mt-[.1rem] mr-[.1rem]"}/>login</Link>
                                <Link href={""} className={"px-2 py-1 bg-my_dark text-my_dark_2 ml-1 rounded inline-flex"}><Signout className={"text-sm mt-[.1rem] mr-[.1rem]"}/> Signup</Link>
                            </div>

                        </motion.div>
                        }
                    </AnimatePresence>

                </div>

            </div>



          </div>

          {/*medium screen category popup*/}
          <div
            onClick={()=>{sidebarClick()}}
              className={"bg-my_dark_2 rounded-r-full left-0 text-my_yellow hidden absolute top-20 text-3xl sm:hidden md:block xl:hidden"}>
              <div className={" py-2 px-3"}> <Bar/> </div>
          </div>

      </main>
  )
}