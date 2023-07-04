import {Chain, Market} from "../../../public/svgIcons";
import Link from "next/link";
import {usePathname} from "next/navigation";

export const Breadcrumbs = () => {
    const  pathname = usePathname();
    // console.log(pathname);

    pathname.replace("/", <div className={"text-my_dark  text-xl"}><Chain/></div> );
        // .map((chain)=>{
        //     return<>
        //         <div>
        //             <Link to={pathname}>{}</Link>
        //         </div>
        //     </>
        // })

    return(
        <main className={"pt-[4.3rem] md:mx-auto lg:mx-16 xl:mx-20 2xl:mx-40"}>
            <div className={"inline-flex gap-1 text-sm justify-start mx-2 my-2 items-center font-semibold"}>
                <div className={"py-1 px-2 bg-my_dark_2 text-my_yellow capitalize inline-flex items-center rounded"}>
                    <Market />
                    <Link className={" hover:underline font-bold mt-1 ml-1"} href={pathname}>Shop</Link>
                </div>
                <div className={"text-my_dark  text-xl"}><Chain /></div>
            </div>
        </main>
    )
}