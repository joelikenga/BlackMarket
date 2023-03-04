import Link from "next/link";
import {ChevronBack, ChevronFoward, Percent,} from "../../public/svgIcons";
import Image from "next/image";

export const BestOffers = () => {
    const details = [
        {image:"https://images.unsplash.com/photo-1509963906410-fceef97f22f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",name:"tomatoes",newPrice:23,oldPrice:38},
        {image:"https://images.unsplash.com/photo-1609942571926-f3fe26feab26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",name:"axe black",newPrice:48,oldPrice:60},
        {image:"https://images.unsplash.com/photo-1527281400683-1aae777175f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",name:"jack daniels honey",newPrice:380,oldPrice:490},
        {image:"https://images.unsplash.com/photo-1603487742131-4160ec999306?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",name:"brickenstock brown sandal",newPrice:200,oldPrice:250},
        {image:"https://images.unsplash.com/photo-1577174881658-0f30ed549adc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80",name:"sony wired 2321 headset",newPrice:180,oldPrice:200},
    ]
  return(
      <main className={"m-6 text-my_dark_2"}>
          {/*section name*/}
              <div className={"flex justify-between my-4"}>
                  <div className={"flex items-end"}>
                      <p className={"border-x-4 border-my_yellow px-2 py-0  font-normal text-md sm:text-lg md:text-xl"}>Best
                          <span className={" font-medium text-lg sm:text-xl md:text-2xl"}>offer</span>
                      </p>
                      <Link className={"ml-3 hover:underline text-md md:text-lg lg:text-xl"} href={""}>more</Link>
                  </div>

                  <div className={"flex gap-3 text-2xl"}>
                    <i className={"p-2 rounded-full bg-my_dark_2 text-my_yellow cursor-pointer scale-90 md:scale-95 lg:scale-100"}><ChevronBack/></i>
                    <i className={"p-2 rounded-full bg-my_dark_2 text-my_yellow cursor-pointer scale-90 md:scale-95 lg:scale-100"}><ChevronFoward/></i>
                  </div>
              </div>

              <div className={"flex gap-3 my-6 rounded w-full bg-my_dark overflow-x-scroll"}>

                  {
                      details.map((myDetails,index)=>(


                  <Link key={index} href={""} className={"h-fit min-w-fit m-2 rounded bg-my_light relative font-medium z-0 capitalize"}>
                      <div className={"absolute top-6 left-6 rounded-full p-1 text-2xl bg-my_yellow text-my_dark_2"}>
                          <Percent className={"m-1"}/>
                      </div>
                    <Image
                        className={"h-60 w-60 shadow-my_dark shadow-lg object-cover m-4 rounded"}
                        src={myDetails.image}
                        alt={myDetails.name}
                        width={300}
                        height={300}
                        loading={"lazy"}
                    />

                    <div className={"m-4 text-sm"}>
                        <div translate={"no"} className={"border-l-4 pl-2 border-my_yellow"}>{myDetails.name}</div>

                        <div className={"flex justify-between mt-2"}>
                            <div className={"flex justify-items-start"}>
                                <p>₺ {myDetails.newPrice}</p>
                                <del className={"text-my_dark ml-3"}>₺ {myDetails.oldPrice}</del>
                            </div>
                        </div>
                    </div>
                  </Link>

                      ))
                  }
              </div>
      </main>
  )
}