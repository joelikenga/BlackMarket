import {Cart, Delivery, Headset, HomeIcon, Market, } from "../../public/svgIcons";
import Link from "next/link";

export  const FooterContent = () => {

        const footerLinks = [
        {link: "",icon:<HomeIcon />,navName:"Best Offers"},
        {link: "",icon:<Cart />,navName:"Shop"},
        {link: "",icon:<Market />,navName:"Sell Products"},
        {link: "",icon:<Delivery />,navName:"Track Order"},
        {link: "",icon:<Headset />,navName:"Feedback"},
    ];

    return(
    <main className={
        "bottom-6 mx-auto rounded w-[30rem] grid grid-col-5  bg-my_dark_2 block xl: hidden"}>
        <div className={"flex justify-between m-5"}>
            {
                footerLinks.map((links,index)=>(
                    <div key={index} className={"text-my_dark text-3xl"}>
                        <Link title={""} href={""}>
                            {links.icon}
                        </Link>
                    </div>
                ))
            }
        </div>
    </main>
    );
}