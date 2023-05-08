import {Chain} from "../../../public/svgIcons";
import Link from "next/link";

export const InternalLinking = () => {
    return(
        <main>
            <div className={"inline-flex gap-4 justify-start mx-4 my-2 items-center font-semibold"}>
                <div className={"py-1 px-4 bg-my_dark_2 text-my_yellow capitalize rounded"}>
                    <Link className={" hover:underline"} href={"/Shop"}>Shop</Link>
                </div>
                <div className={"text-my_dark  text-2xl"}><Chain /></div>
            </div>
        </main>
    )
}