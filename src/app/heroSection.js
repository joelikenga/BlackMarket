import Image from "next/image";


const autoSlides = [
    {image:"https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"},
    {image:"https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"},
    {image:"https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"},
    {image:"https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"},
]
export  const HeroSection = () => {

    return(
      <main className={" my-4 mt-16 sm:mt-20 lg:h-[25rem] lg:mt-1 overflow-hidden"}>
          <div className={"grid grid-cols-3"}>

          {/*    first grid section*/}
              <div className={"col-span-1 h-[25rem]"}>

              </div>

          {/*    second grid section*/}
              <div className={"col-span-2 h-[25rem] "}>

                  <div className={"flex gap-3 rotate-12 -skew-x-[10deg] w-fit -mt-10 "}>

                      <div className={"flex flex-wrap gap-3 w-[14rem] overflow-auto"}>

                          {autoSlides.map((content, index) => {
                              return(

                          <div key={index} className={""}>
                              <Image
                                  className={"w-full rounded-lg"}
                                  src={content.image}
                                  alt={"images"}
                                  width={200}
                                  height={0}
                                  priority
                              />
                          </div>

                              )
                          })
                          }
                      </div>



                      <div className={"flex flex-wrap gap-2 w-[14rem] overflow-auto"}>

                          {autoSlides.map((content, index) => {
                              return(

                          <div key={index} className={""}>
                              <Image
                                  className={"w-full rounded-lg"}
                                  src={content.image}
                                  alt={"images"}
                                  width={200}
                                  height={0}
                                  priority
                              />
                          </div>

                              )
                          })
                          }
                      </div>


                      <div className={"flex flex-wrap gap-2 w-[14rem] overflow-auto"}>

                          {autoSlides.map((content, index) => {
                              return(

                          <div key={index} className={""}>
                              <Image
                                  className={"w-full rounded-lg"}
                                  src={content.image}
                                  alt={"images"}
                                  width={200}
                                  height={0}
                                  priority
                              />
                          </div>

                              )
                          })
                          }
                      </div>

                  </div>

                  </div>

          </div>
      </main>
  );
}