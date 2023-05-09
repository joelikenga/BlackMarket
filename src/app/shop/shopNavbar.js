import Link from "next/link";
import {Cart, Market, UserIcon} from "../../../public/svgIcons";

export const ShopNavbar = () => {

    const navs = [
        {name:"home",link:"/"},
        {name:"shop",link:"/shop",icon:<Market/>},
        {name:"sell products",link:"/"},
        {name:"track order",link:"/"},
        {name:"Contact us",link:"/"},

    ]

  return(
      <main>
          <nav className={"flex  justify-between items-center bg-[rgba(16,24,32,0.5)] border-my_dark py-3 px-4 border-my_dark border-b"}>

          {/*  logo section*/}
            <div className={" my- w-[auto]"}>
                <div className={"flex justify-between"}>
                    <Link href={"/"} className={"text-2xl font-extrabold text-center"}>BlackMarket</Link>
                </div>
            </div>

          {/*    navigations*/}
              <div className={"inline-flex gap-3 items-center"}>
                  {
                      navs.map( (navs, index )=> {
                        return(
                          <div className={"m-2 text-lg"} key={index} title={navs.name}>
                              <Link className={"capitalize flex items-center font-bold  text-my_dark_2"} href={navs.link}>
                                  <i className={" text-2xl text-my_yellow mr-1"}>{navs.icon}</i>
                                  <span className={"text-base mt-1 hover:text-my_yellow hover:duration-200"}>{navs.name}</span>
                              </Link>
                          </div>
                          )
                      })
                  }
              </div>

          {/*    cart and user section*/}
              <div className={"inline flex gap-4 text-3xl"}>
              {/*    cart*/}
                  <div className={"mr-3 gap-1 inline-flex relative items-center"}>
                      <Cart />
                      <div className={"text-[1rem] leading-5 font-bold bg-my_dark_2 text-my_yellow p-1 pt-2 rounded"}>{10}+</div>
                  </div>

              {/*    user profile*/}
                  <div className={"ml-3"}>
                      <UserIcon />
                  </div>
              </div>
          </nav>
      </main>
  )
}