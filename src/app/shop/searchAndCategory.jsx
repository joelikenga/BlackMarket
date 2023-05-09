import {
    Apple,
    ArrowRight,
    ChevronFoward,
    Desktop, Gamepad, Gym,
    Hairdryer,
    HomeAndOffice, More,
    Phone, Shirt, Television
} from "../../../public/svgIcons";
import Link from "next/link";

export const SearchAndCategory = () =>{

    const categories = [
        {name:"Supermarket",icon:<Apple />, link:"../"},
        {name:"Health & Beauty",icon:<Hairdryer />, link:"../"},
        {name:"Home & office",icon:<HomeAndOffice />, link:"../"},
        {name:"phones & tablets",icon:<Phone />, link:"../"},
        {name:"Computing and Accessoories",icon:<Desktop />, link:"../"},
        {name:"Electronics",icon:<Television />, link:"../"},
        {name:"gaming",icon:<Gamepad />, link:"../"},
        {name:"fashion",icon:<Shirt />, link:"../"},
        {name:"sports",icon:<Gym />, link:"../"},
        {name:"other categories",icon:<More />, link:"../"},
    ]

    return(
        <main className={""}>
            <div className={"text-my_dark_2"}>

                {/*search query section*/}
                <form className={"rounded border-my_dark border-2 m-2 relative flex items-center"} >
                    <input className={"outline-0 border-0 w-full h-fit rounded p-1 font-semibold"} autoFocus placeholder={"search..."} type={"text"}/>
                    <div className={" cursor-pointer m-[0.1rem] bg-my_dark_2 text-my_yellow p-[0.3rem] text-xl rounded"}>
                        <ArrowRight />
                    </div>
                </form>

            {/*    categories section*/}
                <div className={"m-4"}>
                    {
                        categories.map((category,index)=>{
                            return(
                                <Link href={"/"} key={index} className={"flex justify-between border-my_yellow bg-my_dark p-2 my-1.5 rounded text-xl hover:ml-2 hover:border-l-8 hover:duration-200 hover:ease-out"}>
                                    <div  className={"inline-flex gap-2 items-center capitalize"}>
                                        <i className={""}>{category.icon}</i>
                                        <p className={"text-sm mt-1 font-bold"}>{category.name}</p>
                                    </div>
                                    <i className={""}><ChevronFoward /></i>
                                </Link>
                            )
                        })
                    }
                </div>

            </div>
        </main>
    )
}