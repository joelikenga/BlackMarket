import { ChevronBack, ChevronFoward, Location, Plus} from "../../public/svgIcons";
import Image from "next/image";
import Link from "next/link";

export const FeaturedProducts = () => {
    const details = [
        {image:"https://images.unsplash.com/photo-1558121556-2a39fc528338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",alt:"air jordan",name:"air jordan",location:"famagusta",price:300,amount:10},
        {image:"https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80",alt:"curology skin care",name:"curology skin care",location:"Nicossia",price:490,amount:100},
        {image:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80",alt:"all stars shoe",name:"all stars shoe",location:"girne",price:1200,amount:500},
        {image:"https://images.unsplash.com/photo-1547887537-6158d64c35b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",alt:"sun de giola perfume",name:"sun de giola perfume",location:"nicossia",price:300,amount:50},
        {image:"https://images.unsplash.com/photo-1609001650223-aa7d7edccac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",alt:"iphone 12 pro max",name:"iphone 12 pro max",location:"famagusta",price:5000,amount:1},
        {image:"https://images.unsplash.com/photo-1625948515291-69613efd103f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",alt:"bluetooth wireless keyboard",name:"bluetooth wireless keyboard",location:"Nicossia",price:800,amount:30},
    ]
  return(
      <main className={"mx-6 my-6 rounded text-my_dark_2"}>
          <div>

              <div className={"flex justify-between"}>
                  <div className={"flex items-end"}>
                      <p className={" border-x-4 border-my_yellow px-2 py-1  font-normal text-sm sm:text-md md:text-xl"}>Featured
                          <span className={" font-medium text-md sm:text-lg md:text-2xl"}>Products</span>
                      </p>
                      <Link className={"ml-3 hover:underline text-sm md:text-md lg:text-lg"} href={""}>more</Link>
                  </div>
                  <div className={"flex gap-3 text-2xl"}>
                    <i className={"p-2 rounded-full bg-my_dark_2 text-my_yellow cursor-pointer scale-75 md:scale-90 lg:scale-100"}><ChevronBack/></i>
                    <i className={"p-2 rounded-full bg-my_dark_2 text-my_yellow cursor-pointer scale-75 md:scale-90 lg:scale-100"}><ChevronFoward/></i>
                  </div>
              </div>

              <div  className={"flex gap-3 my-6 rounded w-full bg-my_dark overflow-x-scroll"}>

                  {
                      details.map((myDetails,index) => (

                  <Link key={index} href={""} className={"h-fit min-w-fit m-2 rounded bg-my_light relative font-medium z-0 capitalize"}>
                      <div className={"absolute top-2 right-2 rounded flex p-2 text-sm bg-my_dark_2 text-my_yellow"}>
                          <Location className={"mr-1"}/>
                          <p translate={"no"}>{myDetails.location}</p>
                      </div>
                    <Image
                        className={"h-60 w-60 shadow-my_dark shadow-lg object-cover m-4 rounded"}
                        src={myDetails.image}
                        alt={myDetails.alt}
                        width={300}
                        height={300}
                    />

                    <div className={"m-4 text-sm"}>
                        <div translate={"no"} className={"border-l-4 pl-2 border-my_yellow"}>{myDetails.name}</div>

                        <div className={"flex justify-between mt-2"}>
                            <div className={""}>
                                <p>₺ {myDetails.price}</p>
                            </div>
                        </div>
                        <div className={"flex justify-between"}>
                             <div translate={"no"} className={"mt-2 font-normal"}>{myDetails.amount} pcs</div>
                            <button className={"py-1 px-2 rounded bg-my_dark_2 text-my_yellow text-3xl"}>
                                <Plus/>
                            </button>
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