import {HeroSection} from "@/app/heroSection";
import {SearchSection} from "@/app/searchSection";
import {NewProducts} from "@/app/newProducts";
import {ProductRequest} from "@/app/productRequest";
import {FrequentSearches} from "@/app/frequentSearches";
import {BestSeller} from "@/app/bestSeller";
import {TopCategories} from "@/app/topCategories";
import {Discount} from "@/app/discount";
export const BodyContent = () => {
  return(
      <main className={
          "bg-my_light w-full h-[100vh] overflow-y-scroll mx-0 xl:mx-0"}>
           <SearchSection/>
           <HeroSection />
           <NewProducts/>
           <Discount/>
           <BestSeller/>
           <ProductRequest/>
           <TopCategories/>
           <FrequentSearches/>
      </main>
  )
}