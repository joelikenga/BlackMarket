"use client"
import {ShopNavbar} from "@/app/shop/shopNavbar";
import {Breadcrumbs} from "@/app/shop/breadcrumbs";
import {usePathname} from "next/navigation";
import {MobileNav} from "@/app/mobileNav";
import {BodySection} from "@/app/shop/bodySection";
import {ProductProvider} from "@/app/shop/ProductContext"

export default function Shop ({...pageProps})  {

    const  pathname = usePathname();
    // console.log(pathname);


    return(
        <main value={pathname}>
            <ProductProvider>
                <ShopNavbar />
                <Breadcrumbs />
                <BodySection />
                <div className={"sticky w-full bottom-0"}>
                    <MobileNav {...pageProps}/>
                </div>
            </ProductProvider>
        </main>
    );
}