import Image from "next/image";

export const AllProductsSample = () =>{
    return(
        <main className={"m-6"}>
            {/*section name*/}
            <div className={"flex justify-start mb-3"}>
              <p className={" border-x-4 border-my_yellow px-2 py-1 text-xl font-normal"}>Top <span className={"text-2xl font-medium"}>Categories</span></p>
            </div>

            <div className={"grid grid-col-8"}>

                <div className={"col-span-2"}>
                    <Image
                        className={""}
                        src={""}
                        alt={""}
                        width={200}
                        height={100}
                    />
                    <div className={""}>

                    </div>
                </div>

            </div>

        </main>
    )
}