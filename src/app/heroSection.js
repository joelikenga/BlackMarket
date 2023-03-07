import Image from "next/image";

export  const HeroSection = () => {

    return(
      <main className={"my-4 mt-16 sm:mt-20  lg:mt-1"}>
          <div className={"grid grid-cols-2"}>

          {/*    first grid section*/}
              <div className={"col-span-1"}>

              </div>

          {/*    second grid section*/}
              <div className={"col-span-1"}>

                  <div className={"flex"}>

                      <div>
                          {/*<Image*/}
                          {/*    className={""}*/}
                          {/*    src={""}*/}
                          {/*    alt={"images"}*/}
                          {/*/>*/}
                      </div>

                  </div>

              </div>
          </div>
      </main>
  );
}