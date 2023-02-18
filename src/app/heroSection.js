import Image from "next/image";
import Link from "next/link";
import {CaretRight} from "../../public/svgIcons";

export  const HeroSection = () => {

    return(
      <main className={"my-4"}>
          <div className={"grid grid-cols-2 gap-3 mx-6"}>
              {/*first*/}
              <div className={"col-span-1 h-[28rem] rounded"}>

                  <div className={"grid grid-rows-2 gap-3 h-full"}>
                      <div className={"overflow-hidden row-span-1 bg-my_dark rounded"}>
                        <Image
                            className={" w-full h-full object-cover"}
                            width={500}
                            height={100}
                            src={"https://images.unsplash.com/photo-1560858001-2a568c6ea1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
                            alt={""}
                            />
                      </div>

                      <div className={"grid grid-cols-2 gap-3"}>

                          <div className={"overflow-hidden col-span-1 bg-my_yellow rounded"}>
                            <Image
                            className={" w-full h-full object-cover"}
                            width={500}
                            height={100}
                            src={"https://images.unsplash.com/photo-1670349081674-90d0e76a20ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
                            alt={""}
                            />
                          </div>

                          <div className={"overflow-hidden col-span-1 bg-my_dark_2 rounded"}>
                            <Image
                            className={" w-full h-full object-cover"}
                            width={500}
                            height={100}
                            src={"https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
                            alt={""}
                            />
                          </div>

                      </div>
                  </div>
              </div>

              {/*  second  */}
              <div className={"col-span-1  h-full rounded"}>

                  <div className={"gap-3 grid grid-cols-2 h-full "}>
                      <div className={"overflow-hidden row-span-1 bg-my_yellow rounded"}>
                          <Image
                            className={" w-full h-full object-cover"}
                            width={500}
                            height={100}
                            src={"https://images.unsplash.com/photo-1579807102908-396b3b737800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=367&q=80"}
                            alt={""}
                            />
                      </div>

                      <div className={"grid gap-3 grid-rows-2"}>
                          <div className={"overflow-hidden row-span-1 bg-my_dark_2 rounded"}>
                             <Image
                            className={" w-full h-full object-cover"}
                            width={500}
                            height={100}
                            src={"https://images.unsplash.com/photo-1508090262849-891361a906e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=811&q=80"}
                            alt={""}
                            />
                          </div>

                          <div className={"overflow-hidden row-span-1 bg-my_dark rounded"}>
                            <Image
                            className={" w-full h-full object-cover"}
                            width={500}
                            height={100}
                            src={"https://images.unsplash.com/photo-1642543348745-03b1219733d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
                            alt={""}
                            />
                          </div>
                      </div>
                  </div>

              </div>

          </div>
      </main>
  );
}