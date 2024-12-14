import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className=" h-96 overflow-hidden ">
      <div className="bg-light w-5/6 m-auto rounded-lg h-10   "></div>

      <div className=" bg-[url('/bg.jpg')] object-cover object-left -translate-y-2 ">
        <div className="h-full flex items-end ">
          <div className="grid grid-cols-12 bg-[#151822a9] ">
            <div className="col-span-1 ms-8 space-y-7 mt-20 "></div>

            <div className="col-span-6  space-y-7 mt-20 ">
              <h2 className="font-bold lg:text-4xl text-white   ">
                Discover my Amazing Art Space!
              </h2>
              <h2 className="text-white  ">
                <span>
                  {"<"}
                  <span className="text-secondary">{"code"}</span>
                  {">"}I build web sites
                  {"</"}
                  <span className="text-secondary">{"code"}</span>
                  {">"}{" "}
                </span>
              </h2>
              <div className="">
                <Link
                  href="#"
                  className="bg-secondary hover:bg-transparent hover:border-secondary hover:border-2 border-2 border-secondary
                duration-200 transition-all  tracking-widest hover:text-secondary p-3 px-10 text-sm  "
                >
                  Explore now
                </Link>
              </div>
            </div>
            <div className="col-span-4">
              <Image
                src={"/mo.png"}
                width={1700}
                height={700}
                alt={"background"}
                className=" w-full  h-[95%] ms-auto -translate-y-7 object-contain object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
