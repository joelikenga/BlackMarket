"use client"
import {AppStore, Headset, Delivery, Market, Setting, CoinStack} from "../../public/svgIcons";
import Link from "next/link";
import {motion} from "framer-motion";

export const Navigation = () => {

    // navigation links
    const navLinks = [
        {link: "/shop",icon:<Market />,navName:"Shop"},
        {link: "",icon:<CoinStack />,navName:"Sell Products"},
        // {link: "",icon:<Delivery />,navName:"Track Order"},
        {link: "",icon:<Headset />,navName:"Contact Us"},
    ];

    return(
        <main className={
            "p-4 relative bg-my_ w-[25%] hidden" +
            " xl:block"
        }>

            {/*logo and language*/}
            <div className={" my-3 w-[auto]"}>
                <div className={"flex justify-between"}>
                    <h3 className={"text-2xl font-extrabold text-center"}>BlackMarket</h3>
                </div>
            </div>

            {/*    navigations*/}
            <div className={" mt-8  text-center"}>
                <div className={"inline-block  text-my_yellow font-bold"}>

                   {/* categories dropdown button*/}
                   <div className={"flex justify-center cursor-pointer rounded py-3 px-1 text-sm text-center bg-my_dark_2"}>
                        <div>
                            <AppStore className={"text-xl mr-"}/>
                        </div>

                        <div>Categories</div>
                   </div>

                    {/*navigations*/}
                    <div className={"mt-6"}>
                        {
                            navLinks.map((navs,index)=>(
                                <motion.div
                                    whileHover={{scale:1.1}}
                                    transition={{delay:0,}}
                                    key={index}>
                                    <Link

                                        className={"my-4 text-sm text-center py-3 px-8 no-underline text-my_dark_2 rounded flex"} href={navs.link}>
                                            <div className={"text-2xl mx-2"}>{navs.icon}</div>
                                            <div>{navs.navName}</div>
                                    </Link>
                                </motion.div>
                            ))
                        }
                    </div>

                    {/*bottom nav*/}
                    <div className={"absolute w-full inline-block bottom-6 left-0 text-my_dark_2"}>
                        <div className={"inline-flex text-sm cursor-pointer justify-center"}>
                            <Setting className={"text-2xl mr-2"}/>
                            <div>Settings</div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}