import {ArrowRight, Cart, Signout, Signin, UserIcon, Bar} from "../../public/svgIcons";

export  const SearchSection = () => {
  return(
      <main className={"sticky top-0 bg-[rgba(16,24,32,0.5)] py-4 px-6 z-50"}>

           {/*search input*/}
          <div className={" rounded flex justify-between"}>

            {/*  sidebar*/}
              <div className={"text-3xl text-my_dark_2 text-my_dark_2 mt-2 items-center block sm:hidden"}>
                  <Bar className={""}/>
              </div>


            {/*  logo name*/}
            <div className={"my-2 w-fit hidden sm:block xl:hidden lg:"}>
                <div className={"flex justify-between block xl:hidden"}>
                    <h3 className={"text-xl font-extrabold text-center"}>BlackMarket</h3>
                </div>
            </div>


            <div className={"flex bg-my_light bg-my_dark rounded p-2 "}>

                <input
                    type={"text"}
                    placeholder={"What do you want..."}
                    className={" ml-3 bg-my_light bg-my_dark outline-0 font-medium text-my_dark_2  sm:min-w-fit md:min-w-fit lg:min-w-[44vw]"}
                />

                <div className={"text-2xl mr-2 bg-my_dark_2 text-my_yellow px-4 py-1 rounded cursor-pointer"}>
                    <ArrowRight className={"font-black"}/>
                </div>

            </div>

            {/*  cart and login*/}
            <div className={" inline-flex text-my_dark_2 mt-2"}>

                <div className={
                    "text-4xl mt-1 mr-3 justify-between flex hidden " +
                    "xl:block " +
                    "lg: "
                }>
                    <Cart className={"cursor-pointer"}/>
                </div>

                <div
                    className={
                    "inline-block font-medium text-sm mt-1 hidden md:block"}>
                    <button className={"px-3 py-2 bg-my_yellow text-my_dark_2 mx-2 rounded inline-flex"}> <Signin className={"text-xl"}/> login</button>
                    <button className={"px-3 py-2 bg-my_dark_2 text-my_yellow ml-1 rounded inline-flex"}> <Signout className={"text-xl"}/> Signup</button>
                </div>

                {/*small screen account profile button*/}
                <div className={"block md:hidden"}>
                    <button className={" px-2 py-2 bg-my_dark_2 text-my_yellow ml-1 rounded-full inline-flex "}> <UserIcon className={"text-2xl"}/></button>
                </div>
            </div>

          </div>

      </main>
  )
}