import {SearchAndCategory} from "@/app/shop/searchAndCategory";

export const BodySection = () =>{
    return(
        <main className={""}>
            <div className={"mx-2 rounded grid grid-cols-8"}>

            {/*    search and categories section*/}
                <div className={"col-span-2 bg-my_light h-fit"}>
                    <SearchAndCategory />
                </div>


                {/*body content section*/}
                <div className={"col-span-6 "}>

                </div>

            </div>
        </main>
    )
}