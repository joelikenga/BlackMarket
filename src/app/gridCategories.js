import Image from "next/image";
import Link from "next/link";

export  const GridCategories = () => {
   const topCategories = [
       {image:"https://images.unsplash.com/photo-1577106901574-4629d3108efc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80",href:"",alt:"Bike",name:"Bike"},
       {image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",href:"",alt:"Laptops",name:"Laptops"},
       {image:"https://images.unsplash.com/photo-1580327344181-c1163234e5a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80",href:"",alt:"Games",name:"Games"},
       {image:"https://images.unsplash.com/photo-1613398774227-94abdde8aef8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",href:"",alt:"Airpods",name:"Airpods"},
   ]
  return(
      <main className={"m-6"}>
         <div className={"flex justify-start mb-3"}>
              <p className={" border-x-4 border-my_yellow px-2 py-1 text-xl font-normal"}>Frequent <span className={"text-2xl font-medium"}>Searches</span></p>
         </div>

          <div className={"grid grid-cols-8 gap-3"}>
              {
                  topCategories.map((details,index) => (
                      <Link href={details.href} key={index} className={"col-span-2 relative  rounded-xl overflow-hidden"}>
                          <Image
                              className={"w-fit h-full object-cover"}
                              src={details.image}
                              alt={details.alt}
                              width={200}
                              height={200}
                          />
                          <div className={"absolute bottom-0 h-[30%] bg-[rgba(0,0,0,0.6)] text-lg text-my_light w-full"}>
                              <p className={"p-2 font-medium"}>{details.name}</p>
                          </div>
                      </Link>

                  ))
              }
          </div>


      </main>
  )
}