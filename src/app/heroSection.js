import Image from "next/image";

export  const HeroSection = () => {

    return(
      <main className={"my-4 mt-16 sm:mt-20  lg:mt-1"}>
          <div className={"grid grid-cols-4 gap-3 mx-6"}>
              {/*first*/}
              <div className={"h-[50vh] col-span-3 rounded"}>
                  <div className={" overflow-hidden rounded   "}>
                    <Image
                        className={"min-w-full object-cover max-h-[50vh] min-h-[50vh]"}
                        src={"https://images.unsplash.com/photo-1670272506160-bdf0c7a45d2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}
                        alt={""}
                        width={800}
                        height={500}
                        priority={true}
                    />
                  </div>
              </div>

              {/*  second  */}
              <div className={"h-[50vh] col-span-1 rounded bg-my_dark_2"}>
                  <div className={"grid grid-rows-2 gap-4"}>
                    {/*  first row span*/}
                    <div className={"min-h-full row-span-1 bg-my_dark"}>
                        ss
                    </div>
                    {/*  second row span*/}
                    <div className={"min-h-full row-span-1 bg-my_dark"}>
                        aa
                    </div>

                  </div>
              </div>

          </div>
      </main>
  );
}