import {HeroSection} from "@/app/heroSection";
import {SearchSection} from "@/app/searchSection";
import {FeaturedProducts} from "@/app/featuredProducts";
import {ProductRequest} from "@/app/productRequest";
import {GridCategories} from "@/app/gridCategories";
import {FrequentPurchase} from "@/app/frequentPurchase";
import {AllProductsSample} from "@/app/allProductsSample";
import {BestOffers} from "@/app/bestOffers";
export const BodyContent = () => {
  return(
      <main className={
          "bg-my_light w-full h-[100vh] overflow-y-scroll mx-0 xl:mx-0"}>
           <SearchSection/>
           <HeroSection />
           <FeaturedProducts/>
           <BestOffers/>
           <FrequentPurchase/>
           <ProductRequest/>
           <AllProductsSample/>
           <GridCategories/>
      </main>
  )
}