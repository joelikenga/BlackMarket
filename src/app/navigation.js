// "use client"
import {AppStore, Headset, Delivery, Market, Percent, CaretDown, Setting, Cart} from "../../public/svgIcons";
import Link from "next/link";

export const Navigation = () => {

    // navigation links
    const navLinks = [
        {link: "",icon:<Percent />,navName:"Best Offers"},
        {link: "",icon:<Cart />,navName:"Shop"},
        {link: "",icon:<Market />,navName:"Sell Products"},
        {link: "",icon:<Delivery />,navName:"Track Order"},
        {link: "",icon:<Headset />,navName:"Feedback"},
    ];

    return(
        <main className={"p-4 relative bg-my_ w-[25%]"}>
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
                   <div className={"flex justify-center rounded py-3 px-1 text-sm text-center bg-my_dark_2"}>
                        <AppStore className={"text-xl mr-2"}/>
                        <div>Categories</div>
                   </div>

                    {/*navigations*/}
                    <div className={"mt-6"}>
                        {
                            navLinks.map((navs,index)=>(
                        <Link key={index} className={"my-4 text-sm text-center py-3 px-8 no-underline text-my_dark_2 rounded flex"} href={navs.link}>
                                <div className={"text-2xl mx-2"}>{navs.icon}</div>
                                <div>{navs.navName}</div>
                        </Link>

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