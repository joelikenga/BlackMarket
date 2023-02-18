import Image from "next/image";
import Link from "next/link";
import {ChevronBack, ChevronFoward} from "../../public/svgIcons";

export const FrequentPurchase = () => {
    return(
        <main  className={"m-6 text-my_dark_2"}>
            <div>
              {/*  name and buttons*/}
              <div className={"flex justify-between my-4"}>
                  <div className={"flex items-end"}>
                      <p className={" border-x-4 border-my_yellow px-2 py-1 text-xl font-normal"}>Frequently
                          <span className={"text-2xl font-medium"}>Purchased</span>
                      </p>
                  </div>

                  <div className={"flex text-2xl"}>
                    <i className={"p-2 rounded-full bg-my_dark_2 text-my_yellow mr-3 cursor-pointer"}><ChevronBack/></i>
                    <i className={"p-2 rounded-full bg-my_dark_2 text-my_yellow ml-3 cursor-pointer"}><ChevronFoward/></i>
                  </div>
              </div>

                <div className={"flex bg-my_dark overflow-x-scroll gap-3"}>
                    <Link href={""} className={" h-full min-w-fit bg-my_light m-3 rounded relative"}>

                        <div className={"p-3"}>
                            <Image
                                className={"object-cover m-2 w-fit h-fit"}
                                src={"https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
                                alt={""}
                                width={300}
                                height={100}
                            />

                            <div translate={"no"} className={"mt-1"}>
                                <span className={"text-sm border-my_yellow border-l-4 pl-2"}>Bleu de Chanel</span>
                            </div>
                        </div>

                    </Link>
                </div>
            </div>
        </main>
    );
}