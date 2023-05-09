"use client"
import {ShopNavbar} from "@/app/shop/shopNavbar";
import {InternalLinking} from "@/app/shop/internalLinking";
import {usePathname} from "next/navigation";
import {MobileNav} from "@/app/mobileNav";
import {BodySection} from "@/app/shop/bodySection";

export default function Shop ({...pageProps})  {

    const  pathname = usePathname();
    console.log(pathname);


    return(
        <main value={pathname}>
            <ShopNavbar />
            <InternalLinking />
            <BodySection />
            <div className={"sticky w-full bottom-0"}>
                <MobileNav {...pageProps}/>
            </div>
        </main>
    );
}