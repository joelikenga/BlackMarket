import Image from "next/image";
import { Location } from "../../../public/svgIcons";
import Link from "next/link";
import {ProductContext} from "@/app/shop/ProductContext";
import {useContext} from "react";

export const Product = ({filteredData}) => {
  // const { filteredData } = useContext(ProductContext);

  return (
  <>
    <main className="mx-5 flex flex-wrap justify-center grid-cols-3 gap-4 my-4">
      {filteredData.map(item => (
        <Link href={`shop/${item.id}`} className="bg-my_light rounded p-3 min-h-[20rem] min-w-[14rem] max-w-[16rem] grow shrink-0 basis-52" key={item.id}>
          <div className="bg-[white] flex justify-center rounded max-h-[15rem] min-w-50 mt-2">
            <Image
              className="min-h-[14rem] w-auto object-contain m-2 md:m-4 rounded"
              priority
              height={200}
              width={200}
              src={item.image}
              alt={item.title}
            />
          </div>
          <div className="mt-6">
            <div title={item.title} className="border-my_yellow border-l-4 px-1 truncate">
              <p>{item.title}</p>
            </div>
            <div className="flex pt-2">
              <Location />
              <p>famagusta</p>
            </div>
            <div className="mt-2">
              <p>₺{item.price}</p>
            </div>
          </div>
        </Link>

      ))}
    </main>
  </>
);
}