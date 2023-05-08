import  {Navigation} from "@/app/navigation";
import {BodyContent} from "@/app/bodyContent";
import {FooterContent, MobileNav} from "@/app/mobileNav";

export default function Home() {
  return (
    <main className={""}>
        <div className={" flex justify-between font-montserrat"}>
             <Navigation />
            <BodyContent />
        </div>
        <div className={"sticky w-full bottom-0"}>
            <MobileNav/>
        </div>
    </main>
  )
}
