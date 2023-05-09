"use client"
import {Cart, CoinStack, Delivery,  HomeIcon, Market,} from "../../public/svgIcons";
import Link from "next/link";
import {usePathname} from "next/navigation";
// import {  } from 'next/router';
export  const MobileNav = () => {

    const  pathname = usePathname();
    console.log(pathname);

    return(
    <main className={"sticky m-0 w-full z-20 relative "}>

        <div className={"bg-my_dark_2  overflow-hidden rounded-t sm:fixed sm:-bottom-6 sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%] sm:w-[50vw] sm:rounded  md:text-2xl  xl:hidden"}>
            <div className={"flex justify-around items-center py-1 my-1 text-2xl relative capitalize text-center"}>

                        <div
                            className={" text-my_dark mx-3"}>
                            <Link  className={""} title={""} href={"/"}>
                                <HomeIcon />
                                {pathname === "/"  && <p className={"text-[0.6rem] text-my_yellow leading-5"}>Home</p>}
                            </Link>
                        </div>

                        <div className={" text-my_dark mx-3"}>
                            <Link title={""} href={"/shop"}>
                                <Market />
                                {pathname === "/shop"  && <p className={"text-[0.6rem] text-my_yellow leading-5"}>shop</p>}

                            </Link>
                        </div>

                        <div className={"rotate-45 bg-my_yellow p-3 text-2xl text-my_dark_2 rounded-xl text-my_dark "}>
                            <Link
                                className={"relative "}
                                title={""}
                                href={""}>
                                <p className={"absolute text-sm p-1 -top-1 left-2 bg-my_dark_2 rounded-full animate-ping"}></p>
                                    <Cart className={"-rotate-45"}/>
                            </Link>
                        </div>

                        <div className={" text-my_dark mx-3"}>
                            <Link title={""} href={"/sell"}>
                                <CoinStack />
                                {pathname === "/sell"  && <p className={"text-[0.6rem] text-my_yellow leading-5"}>sell</p>}

                            </Link>
                        </div>

                        <div className={" text-my_dark mx-3"}>
                            <Link className={""} title={""} href={"/contact"}>
                                <Delivery />
                                {pathname === "/contact"  && <p className={"text-[0.6rem] text-my_yellow leading-5"}>contact</p>}
                            </Link>
                        </div>
            </div>
        </div>
    </main>
    );
}