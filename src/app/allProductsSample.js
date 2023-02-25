import Image from "next/image";
import Link from "next/link";

export const AllProductsSample = () =>{
        const  details = [
        {image:"https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", name:"groceries"},
        {image:"https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=721&q=80", name:"phones and tablets"},
        {image:"https://images.unsplash.com/photo-1628116709703-c1c9ad550d36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80", name:"fashion"},
        {image:"https://images.unsplash.com/photo-1556306535-38febf6782e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", name:"health and beauty"},
    ]

    return(
        <main className={"m-6 text-my_dark_2"}>
            {/*section name*/}
            <div className={"flex justify-start mb-3"}>
              <p className={" border-x-4 border-my_yellow px-2 py-1 text-xl font-normal"}>Top <span className={"text-2xl font-medium"}>Categories</span></p>
            </div>

            <div className={"grid grid-cols-8 gap-3 bg-my_dark p-3"}>

                {
                    details.map((myDetails,index) => (

                <Link href={""} key={index} className={"col-span-2 bg-my_light  p-4 rounded "}>
                    <Image
                        className={"w-fit h-[12rem] object-cover my-6 rounded"}
                        src={myDetails.image}
                        alt={myDetails.name}
                        width={300}
                        height={100}
                    />
                    <div className={"my-2"}>
                        <p  className={"border-l-4 font-medium border-my_yellow pl-2"}>Groceries</p>
                    </div>
                </Link>

                    ))
                }
            </div>

        </main>
    )
}