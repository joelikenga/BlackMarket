"use client"
import Image from "next/image";



const Slides = [
    {image:"https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"},
    {image:"https://images.unsplash.com/photo-1553456558-aff63285bdd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
    {image:"https://images.unsplash.com/photo-1611536326696-b52be8ef45f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
    {image:"https://images.unsplash.com/photo-1608528577891-eb055944f2e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
]
export  const HeroSection = () => {

    return(
      <main className={"bg-my_dark my-4 mt-14 sm:mt-20 lg:h-[25rem] lg:mt-0 "}>


          <div className={"flex justify-around grid-cols-2 h-full"}>

          {/*    first grid section*/}
              <div className={"col-span-1 relative "}>

                  <div className={" text-3xl border-my_yellow border-2  text-center p-3"}>
                      <h1>New and pre-owned products</h1>
                  </div>

              </div>

          {/*    second grid section*/}
              <div className={"relative col-span-1 border-my_yellow border-2"}>

                      <div className={" w-[13rem]"}>
                          <Image
                              className={" rounded-lg w-[50rem] h-full"}
                              src={"https://images.unsplash.com/photo-1605086998852-18371cfd9b2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}
                              alt={"images"}
                              width={200}
                              height={200}
                              priority
                          />
                      </div>

                  </div>

          </div>


      </main>
  );
}