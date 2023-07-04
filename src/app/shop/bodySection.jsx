import {SearchAndCategory} from "@/app/shop/searchAndCategory";
import {ProductCard} from "@/app/shop/productCard";

export const BodySection = ({filteredData}) =>{


    return(
        <main className={""}>
            <div className={" rounded flex justify-between items-stretch mx-auto md:mx-auto lg:mx-16 xl:mx-20 2xl:mx-40"}>

            {/*    search and categories section*/}
                <div className={"bg-my_light h-fit relative"}>
                    <div className={""}>
                        <SearchAndCategory />
                    </div>
                </div>


                {/*body content section*/}

                    <div className={"mt-2 w-full overflow-y-scroll h-[80vh]"}>
                     {filteredData && <ProductCard products={filteredData}/>}
                    </div>


            </div>
        </main>
    )
}