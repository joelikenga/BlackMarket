"use client"

import {ArrowRight, Cart, Signout, Signin, UserIcon, Bar} from "../../public/svgIcons";
import Link from "next/link";
import {useState} from "react";

export  const SearchSection = () => {

  //   state initializations

  const [sidebar, Setsidebar] = useState(false);

  // functions
    const sidebarClick = () => {
        Setsidebar(!sidebar);
    }

  return(
      <main className={"text-my_dark_2 sticky top-0 bg-[rgba(16,24,32,0.5)] px-4 py-1 sm:py-4 sm:px-6 z-50"}>

           {/*search input*/}
          <div className={" rounded flex justify-between items-center"}>

                {/*  sidebar*/}
              <div
                  onClick={()=>{sidebarClick()}}
                  className={"text-2xl text-my_dark_2 text-my_dark_2 items-center block sm:hidden"}>
                    <Bar className={""}/>

              </div>

                {/*    small screen sidebar contents*/}
              <div
                  style={{display: sidebar ? "block" : "none"}}
                  className={"hidden absolute flex top-0 left-0 z-20 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.5)]"}>

                  {/*logo*/}
                  <div className={"bg-my_light h-full w-fit p-3"}>

                      <div className={""}>
                          <h3 className={"text-xl font-extrabold text-start"}>BlackMarket</h3>
                      </div>

                      {/*category contents*/}
                      <div className={"overflow-y-scroll w-[13rem]"}>

                      </div>

                  </div>

                  {/*close button */}
                  <div>

                  </div>

              </div>





            {/*  logo name*/}
            <div className={"my-1 w-fit hidden sm:block xl:hidden lg:"}>
                <div className={"flex justify-between block xl:hidden"}>
                    <h3 className={"text-xl font-extrabold text-center"}>BlackMarket</h3>
                </div>
            </div>


            <div className={"h-fit flex bg-my_light bg-my_dark rounded p-1 md:p-2 "}>

                <input
                    type={"text"}
                    placeholder={"What do you want..."}
                    className={" h-[1.5rem] w-[42vw] ml-3 bg-my_light bg-my_dark outline-0 font-medium text-my_dark_2 text-sm sm:h-fit sm:min-w-[36vw] md:w-fit md:text-lg lg:w-[44vw]"}
                />

                <button className={"text-xl px-2 mr-1 bg-my_dark_2 text-my_yellow rounded cursor-pointer sm:px-4 sm:text-2xl"}>
                    <ArrowRight className={""}/>
                </button>

            </div>



            {/*  cart and login*/}
            <div className={" inline-flex text-my_dark_2 mt-2"}>

                <div className={"text-4xl mt-1 mr-3 justify-between flex hidden xl:block lg: "}>
                    <Cart className={"cursor-pointer"}/>
                </div>


                <div
                    className={"inline-block font-medium text-sm mt-1 hidden md:block"}>
                    <button className={"px-3 py-2 bg-my_yellow text-my_dark_2 mx-2 rounded inline-flex"}> <Signin className={"text-xl"}/> login</button>
                    <button className={"px-3 py-2 bg-my_dark_2 text-my_yellow ml-1 rounded inline-flex"}> <Signout className={"text-xl"}/> Signup</button>
                </div>


                {/*small screen account profile button*/}
                <div className={"block relative md:hidden"}>

                    <button className={" bg-my_dark_2 text-my_yellow rounded-full inline-flex mb-1"}> <UserIcon className={"text-xl m-2"}/></button>

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