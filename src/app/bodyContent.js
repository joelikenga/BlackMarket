import {HeroSection} from "@/app/heroSection";
import {SearchSection} from "@/app/searchSection";
import {NewProducts} from "@/app/newProducts";
import {ProductRequest} from "@/app/productRequest";
import {FrequentSearches} from "@/app/frequentSearches";
import { Drinks} from "@/app/drinks";
import {FoodItems} from "@/app/foodItems";
import {Gadgets} from "@/app/gadgets";
import {FooterContent} from "@/app/footerContent";
export const BodyContent = () => {
  return(
      <main className={
          "bg-my_light w-full h-[100vh] overflow-y-scroll mx-0 xl:mx-0"}>
           <SearchSection/>
           <HeroSection />
           <NewProducts/>
           <Gadgets/>
           <ProductRequest/>
           <FoodItems/>
           <Drinks/>
           <FrequentSearches/>
           <FooterContent/>
      </main>
  )
}