import {Cart, ChevronBack, ChevronFoward, Location, Plus} from "../../public/svgIcons";
import Image from "next/image";
import Link from "next/link";

export const FeaturedProducts = () => {
  return(
      <main className={"mx-6 my-6 rounded text-my_dark_2"}>
          <div>

              <div className={"flex justify-between"}>
                  <div className={"flex items-end"}>
                      <p className={" border-x-4 border-my_yellow px-2 py-1 text-xl font-normal"}>Featured
                          <span className={"text-2xl font-medium"}>Products</span>
                      </p>
                      <Link className={"ml-3 underline"} href={""}>View All</Link>
                  </div>
                  <div className={"flex text-2xl"}>
                    <i className={"p-2 rounded-full bg-my_dark_2 text-my_yellow mr-3 cursor-pointer"}><ChevronBack/></i>
                    <i className={"p-2 rounded-full bg-my_dark_2 text-my_yellow ml-3 cursor-pointer"}><ChevronFoward/></i>
                  </div>
              </div>

              <div className={"flex gap-3 my-6 rounded w-full bg-my_dark overflow-x-scroll"}>

                  <Link href={""} className={"h-fit min-w-fit m-2 rounded bg-my_light relative font-medium z-0"}>
                      <div className={"absolute top-2 right-2 rounded flex p-2 text-sm bg-my_dark_2 text-my_yellow"}>
                          <Location className={"mr-1"}/>
                          <p>Nicossia</p>
                      </div>
                    <Image
                        className={"h-60 w-60 shadow-my_dark shadow-lg object-cover m-4 rounded"}
                        src={"https://images.unsplash.com/photo-1558121556-2a39fc528338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"}
                        alt={""}
                        width={300}
                        height={300}
                        loading={"lazy"}
                    />

                    <div className={"m-4 text-sm"}>
                        <div translate={"no"} className={"border-l-4 pl-2 border-my_yellow"}>Air Jordan</div>

                        <div className={"flex justify-between mt-2"}>
                            <div className={"flex justify-items-start"}>
                                <p>₺ 350</p>
                                <del className={"text-my_dark ml-3"}>₺ 350</del>
                            </div>
                        </div>
                        <div className={"flex justify-between"}>
                             <div translate={"no"} className={"mt-2 font-normal"}>20 pcs</div>
                            <button className={"py-1 px-2 rounded bg-my_dark_2 text-my_yellow text-3xl"}>
                                <Plus/>
                            </button>
                        </div>
                    </div>
                  </Link>

              </div>
          </div>
      </main>
  );
}