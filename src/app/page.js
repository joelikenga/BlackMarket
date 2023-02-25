import styles from './page.module.css'
import  {Navigation} from "@/app/navigation";
import {BodyContent} from "@/app/bodyContent";
import {FooterContent} from "@/app/footerContent";

export default function Home() {
  return (
    <main className={""}>
        <div className={" flex justify-between font-montserrat"}>
             <Navigation />
            <BodyContent />
        </div>
        <FooterContent/>

    </main>
  )
}
