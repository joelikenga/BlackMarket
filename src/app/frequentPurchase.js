import Image from "next/image";
import Link from "next/link";
import {ChevronBack, ChevronFoward} from "../../public/svgIcons";

export const FrequentPurchase = () => {
    const  details = [
        {image:"https://images.unsplash.com/photo-1587017539504-67cfbddac569?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80", name:"Versace Eros  "},
        {image:"https://images.unsplash.com/photo-1604494319203-d1995ee6b2dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80", name:"Prada milano Handbag"},
        {image:"https://images.unsplash.com/photo-1628116709703-c1c9ad550d36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80", name:"apple headset pro"},
        {image:"https://images.unsplash.com/photo-1556306535-38febf6782e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", name:"sunglass"},
        {image:"https://images.unsplash.com/photo-1635048424329-a9bfb146d7aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80", name:"play station gamepad"},
    ]
    return(
        <main  className={"m-6 text-my_dark_2"}>
            <div>
              {/*  name and buttons*/}
              <div className={"flex justify-between my-4"}>
                  <div className={"flex items-end"}>
                      <p className={"border-x-4 border-my_yellow px-2 py-0  font-normal text-md sm:text-lg md:text-xl"}>Best
                          <span className={" font-medium text-lg sm:text-xl md:text-2xl"}>seller</span>
                      </p>
                      <Link className={"ml-3 hover:underline text-md md:text-lg "} href={""}>more</Link>
                  </div>

                  <div className={"flex gap-3 text-2xl"}>
                    <i className={"p-2 rounded-full bg-my_dark_2 text-my_yellow cursor-pointer scale-90 md:scale-95 lg:scale-100"}><ChevronBack/></i>
                    <i className={"p-2 rounded-full bg-my_dark_2 text-my_yellow cursor-pointer scale-90 md:scale-95 lg:scale-100"}><ChevronFoward/></i>
                  </div>
              </div>

                <div className={"flex bg-my_dark overflow-x-scroll gap-3"}>

                    {
                        details.map((myDetails,index)=>(

                    <Link key={index} href={""} className={" h-full min-w-fit bg-my_light m-3 rounded relative "}>

                        <div className={"p-3"}>
                            <Image
                                className={"h-60 w-60 shadow-my_dark shadow-lg object-cover m-2 rounded"}
                                src={myDetails.image}
                                alt={myDetails.name}
                                width={800}
                                height={300}
                                loading={"lazy"}
                            />
                            <div className={"my-4"}>
                                <p translate={"no"} className={"border-l-4 font-medium border-my_yellow pl-2"}>{myDetails.name}</p>
                            </div>
                        </div>

                    </Link>

                        ))
                    }
                </div>
            </div>
        </main>
    );
}