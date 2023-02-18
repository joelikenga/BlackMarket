export const GridDisplay = () =>{
    return(
        <main className={"mx-6"}>
             <div className={"flex justify-start mb-3"}>
                  <p className={" border-x-4 border-my_yellow px-2 py-1 text-xl font-normal"}>Request for <span className={"text-2xl font-medium"}>Products</span></p>
             </div>
            <div className={"grid grid-cols-7 w-full rounded"}>

                <div className={"h-60 bg-my_dark_2 col-span-3"}>

                </div>
                <div className={"col-span-4 h-60 bg-my_yellow"}>

                </div>

            </div>
        </main>
    )
}