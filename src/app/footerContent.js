import {Cart, Delivery, Headset, HomeIcon, Market, } from "../../public/svgIcons";
import Link from "next/link";

export  const FooterContent = () => {
    return(
    <main className={"sticky m-0 w-full z-20 relative "}>

        <div className={"bg-my_dark_2  overflow-hidden rounded-t sm:absolute sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%] sm:w-[50vw] sm:rounded  md:text-2xl  xl:hidden"}>
            <div className={"flex justify-around items-center py-1 my-1 text-2xl relative capitalize text-center"}>

                        <div className={" text-my_dark mx-3"}>
                            <Link  className={""} title={""} href={""}>
                                <HomeIcon />
                                <p className={"text-[0.6rem] leading-5"}>Home</p>
                            </Link>
                        </div>

                        <div className={" text-my_dark mx-3"}>
                            <Link title={""} href={""}>
                                <Market />
                                <p className={"text-[0.6rem] leading-5"}>Shop</p>

                            </Link>
                        </div>

                        <div className={"bg-my_yellow p-3 text-2xl text-my_dark_2 rounded-xl text-my_dark "}>
                            <Link
                                className={"relative"}
                                title={""}
                                href={""}>
                                <p className={"absolute text-sm p-1 -top-1 left-2 bg-my_dark_2 rounded-full animate-ping"}></p>
                                    <Cart />
                            </Link>
                        </div>

                        <div className={" text-my_dark mx-3"}>
                            <Link title={""} href={""}>
                                <Delivery />
                                <p className={"text-[0.6rem] leading-5"}>order</p>

                            </Link>
                        </div>

                        <div className={" text-my_dark mx-3"}>
                            <Link className={""} title={""} href={""}>
                                <Headset />
                                <p className={"text-[0.6rem] m-0 leading-5"}>feeds</p>
                            </Link>
                        </div>
            </div>
        </div>
    </main>
    );
}