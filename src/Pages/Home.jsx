import { LiaBroomSolid } from "react-icons/lia";
import { FaCheckCircle } from "react-icons/fa";

import Hero from "../Components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mt-5 mx-4">
        <div className="bg-[#105361] text-white flex flex-col items-center justify-center p-4">
          <LiaBroomSolid className="text-5xl" color="white" />
          <h3 className="my-2 text-xl tracking-widest font-merriweather uppercase font-semibold">
            About Our Company
          </h3>
          <h4 className="text-lg font-medium text-center font-merriweather">
            A family run cleaning company providing the{" "}
            <span className="underline">best</span> quality service
          </h4>
        </div>
      </div>
      {/* Divider */}
      <div className="flex flex-col">
        <div className="flex flex-col items-center gap-3 w-full">
          <LiaBroomSolid className="text-6xl" color="#105361" />

          <div className="px-4 flex flex-col gap-1">
            <h3 className="font-merriweather uppercase text-xl text-[#105361] text-center">
              About Our Company
            </h3>
            <h4 className="font-merriweather text-xl font-bold text-[#105361] text-center">
              A family run cleaning company providing the{" "}
              <span className="underline">best</span> quality service
            </h4>
            <p className="font-roboto font-regular">
              Our mission is not only to meet your expectations, but to exceed
              them.
            </p>

            <ul className="flex flex-col">
              <li>
                <FaCheckCircle />
                <p>
                  We are based in the heart of Warrington but we also serve the
                  surrounding areas. Give us a call or request a callback to
                  discuss your service requirements and location.
                </p>
              </li>
              <li>
                <FaCheckCircle />
                <p>
                  We are based in the heart of Warrington but we also serve the
                  surrounding areas. Give us a call or request a callback to
                  discuss your service requirements and location.
                </p>
              </li>
            </ul>

            <div className="flex justify-center items-center">
              <a
                className="bg-[#105360] text-white py-2 px-8 rounded-full transform hover:scale-110 transition-transform duration-300"
                href=""
              >
                Look at our services
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
