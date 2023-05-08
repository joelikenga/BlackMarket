import {Cart, CoinStack, Delivery,  HomeIcon, Market,} from "../../public/svgIcons";
import Link from "next/link";

export  const MobileNav = () => {
    return(
    <main className={"sticky m-0 w-full z-20 relative "}>

        <div className={"bg-my_dark_2  overflow-hidden rounded-t sm:fixed sm:-bottom-6 sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%] sm:w-[50vw] sm:rounded  md:text-2xl  xl:hidden"}>
            <div className={"flex justify-around items-center py-1 my-1 text-2xl relative capitalize text-center"}>

                        <div
                            className={" text-my_dark mx-3"}>
                            <Link  className={""} title={""} href={""}>
                                <HomeIcon />
                                <p className={"text-[0.6rem] text-my_yellow leading-5"}>Home</p>
                            </Link>
                        </div>

                        <div className={" text-my_dark mx-3"}>
                            <Link title={""} href={"/shop"}>
                                <Market />
                                {/*<p className={"text-[0.6rem] leading-5"}>Shop</p>*/}

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
                            <Link title={""} href={""}>
                                <CoinStack />
                                {/*<p className={"text-[0.6rem] leading-5"}>sell</p>*/}

                            </Link>
                        </div>

                        <div className={" text-my_dark mx-3"}>
                            <Link className={""} title={""} href={""}>
                                <Delivery />
                                {/*<p className={"text-[0.6rem] m-0 leading-5"}>order</p>*/}
                            </Link>
                        </div>
            </div>
        </div>
    </main>
    );
}