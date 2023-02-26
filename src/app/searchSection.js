import {ArrowRight, Cart, Signout, Signin, UserIcon, Bar} from "../../public/svgIcons";

export  const SearchSection = () => {
  return(
      <main className={"sticky top-0 bg-[rgba(16,24,32,0.5)] px-4 py-1 sm:py-4 sm:px-6 z-50"}>

           {/*search input*/}
          <div className={" rounded flex justify-between items-center"}>

            {/*  sidebar*/}
              <div className={"text-2xl text-my_dark_2 text-my_dark_2 items-center block sm:hidden"}>
                  <Bar className={""}/>
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
                    <button className={" bg-my_dark_2 text-my_yellow rounded-full inline-flex mb-1"}> <UserIcon className={"text-xl m-2"}/></button>
                </div>
            </div>

          </div>

      </main>
  )
}