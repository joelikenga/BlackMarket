import Image from "next/image";
import {PaperPlane} from "../../public/svgIcons";

export const ProductRequest = () =>{
    return(
        <main className={"mx-6 text-my_dark_2 "}>
             <div className={"flex justify-start mb-3"}>
                  <p className={"border-x-4 border-my_yellow px-2 py-0  font-normal text-md sm:text-lg md:text-xl"}>Request for
                      <span className={" font-medium text-lg sm:text-xl md:text-2xl"}>Products</span></p>
             </div>

            <div className={" rounded grid grid-cols-1 break-normal sm:grid-cols-7 w-full"}>
                {/*first grid....image*/}

                <div className={"h-64 col-span-1 sm:col-span-3 relative"}>
                    <Image
                        className={"w-full h-full object-cover"}
                        src={"https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"}
                        alt={""}
                        width={300}
                        height={300}
                    />
                    <div className={"absolute w-full h-full bg-[rgba(0,0,0,0.7)] text-my_light top-0"}>
                    </div>
                </div>

                {/*second grid...... form*/}
                <form className={" col-span-1 sm:col-span-4 h-64 bg-my_dark flex"}>
                    <div className={"mx-auto my-6 text-center text-2xl sm:text-3xl font-bold"}>
                        <i>One Request, multiple Choices</i>

                        <div className={"text-lg font-normal text-start my-8 mx-4 "}>
                            {/*first form....*/}
                            <div className={"bg-my_light  rounded  "}>
                                <input
                                    className={"w-[90%] m-auto outline-none basis-[130px] shrink-0 grow mx-4 my-2 bg-my_light"}
                                    type={"text"}
                                    placeholder={"Product Name"}
                                />
                            </div>

                            {/*second form....*/}
                            <div className={"flex justify-start gap-4 my-6"}>
                                <div className={"bg-my_light inline-flex rounded"}>
                                    <input
                                        className={"w-[100%] sm:w-[10rem]  outline-none  mx-4 my-2 bg-my_light"}
                                        type={"number"}
                                        placeholder={"Quantity"}
                                        min={0}
                                    />
                                 </div>
                                  {/*    button*/}
                                 <div className={"flex  bg-my_yellow font-bold p-2 rounded"}>
                                     <PaperPlane className={"mt-1"}/>
                                     <p className={"ml-1"}>Request</p>
                                 </div>

                            </div>

                        </div>
                    </div>
                </form>

            </div>
        </main>
    );
}