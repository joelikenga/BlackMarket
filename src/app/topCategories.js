import Image from "next/image";
import Link from "next/link";

export const TopCategories = () =>{
        const  details = [
        {image:"https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", name:"groceries"},
        {image:"https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=721&q=80", name:"phones and tablets"},
        {image:"https://images.unsplash.com/photo-1628116709703-c1c9ad550d36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80", name:"fashion"},
        {image:"https://images.unsplash.com/photo-1556306535-38febf6782e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", name:"health and beauty"},
        {image:"https://images.unsplash.com/photo-1556306535-38febf6782e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", name:"health and beauty"},
        {image:"https://images.unsplash.com/photo-1556306535-38febf6782e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", name:"health and beauty"},
    ]

    return(
        <main className={"m-6 text-my_dark_2"}>
            {/*section name*/}
            <div className={"flex justify-start mb-3"}>
              <p className={"border-x-4 border-my_yellow px-2 py-0  font-normal text-md sm:text-lg md:text-xl"}>Top
                  <span className={" font-medium text-lg sm:text-xl md:text-2xl"}>Categories</span></p>
            </div>

            <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 bg-my_dark p-3"}>

                {
                    details.map((myDetails,index) => (

                <Link href={""} key={index} className={"col-span-1 sm:col-span-2 md:col-span-1 bg-my_light  p-4 rounded w-[15rem]"}>
                    <Image
                        className={"w-fit h-[12rem] object-cover my-6 rounded"}
                        src={myDetails.image}
                        alt={myDetails.name}
                        width={300}
                        height={100}
                    />
                    <div className={"my-2"}>
                        <p  className={"border-l-4 font-medium border-my_yellow pl-2"}>{myDetails.name}</p>
                    </div>
                </Link>

                    ))
                }
            </div>

        </main>
    )
}