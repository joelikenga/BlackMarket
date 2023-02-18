import {ArrowRight,CaretDown,Cart,Signout,Signin} from "../../public/svgIcons";

export  const SearchSection = () => {
  return(
      <main className={"sticky top-0 bg-[rgba(16,24,32,0.5)] py-4 px-6 z-50"}>
           {/*search input*/}
          <div className={" rounded flex justify-between"}>

            <div className={"flex bg-my_light bg-my_dark rounded p-2"}>
                <input type={"text"} className={"w-[45vw] ml-3 bg-my_light bg-my_dark outline-0 font-medium text-my_dark_2"} placeholder={"What do you want..."}/>

                <div className={"text-2xl mr-2 bg-my_dark_2 text-my_yellow px-4 py-1 rounded cursor-pointer"}>
                    <ArrowRight className={"font-black"}/>
                </div>

            </div>

            {/*  cart and login*/}
            <div className={" inline-flex text-my_dark_2 mt-2"}>

                <div className={"text-4xl mt-1 mr-3 justify-between flex"}>
                    <Cart className={"cursor-pointer"}/>
                </div>

                <div className={"inline-block font-medium text-sm mt-1"}>
                    <button className={"px-3 py-2 bg-my_yellow text-my_dark_2 mx-2 rounded inline-flex"}> <Signin className={"text-xl"}/> login</button>
                    <button className={"px-3 py-2 bg-my_dark_2 text-my_yellow ml-1 rounded inline-flex"}> <Signout className={"text-xl"}/> Signup</button>
                </div>
            </div>

          </div>

      </main>
  )
}