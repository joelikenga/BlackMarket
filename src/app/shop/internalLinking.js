import {Chain, Market} from "../../../public/svgIcons";
import Link from "next/link";

export const InternalLinking = () => {
    return(
        <main>
            <div className={"inline-flex gap-1 text-sm justify-start mx-2 my-2 items-center font-semibold"}>
                <div className={"py-1 px-2 bg-my_dark_2 text-my_yellow capitalize inline-flex items-center rounded"}>
                    <Market />
                    <Link className={" hover:underline font-bold mt-1 ml-1"} href={"shop"}>Shop</Link>
                </div>
                <div className={"text-my_dark  text-xl"}><Chain /></div>
            </div>
        </main>
    )
}