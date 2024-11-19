import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* center big div */}
      <div className="flex items-center justify-center">
        <div
          className="
            absolute
            w-[1046px] 
            h-[1040px] 
            top-[104px] 
            py-[80px] 
            px-[170px]
            space-y-[80px]
          "
        >
          <div
            className="
              w-[699px] 
              h-[496px] 
              py-[40px] 
              gap-[40px] 
            "
          >
            <h5
              className="
                font-montserrat 
                text-[18px] 
                text-center 
                text-[#23A6F0]
                font-bold 
                leading-[24px] 
                tracking-[0.1px]                 
                "
            >
              Welcome
            </h5>
            <h1
              className="
                font-montserrat 
                text-[58px] 
                text-white
                font-bold 
                leading-[80px] 
                tracking-[0.2px] 
                text-center 
                mt-10
                "
            >
              Selling on the <br /> internet like a pro
            </h1>
            <p
              className="
                font-montserrat 
                text-[20px]
                text-white
                font-normal 
                leading-[30px] 
                tracking-[0.2px] 
                text-center 
                mt-10
                "
            >
              We know how large objects will act, but things on a <br />
              small scale just do not act that way.
            </p>

            <div
              className="
                  w-[365px]
                  h-[52px] 
                  gap-[10px]
                  flex
                  justify-center
                  items-center
                  ml-[163px] 
                  mt-10
                  "
            >
              <button
                className="
                    font-montserrat 
                    text-[14px] 
                    leading-[22px] 
                    tracking-[0.2px] 
                    text-center 
                    bg-[#23A6F0]
                    text-white
                    hover:text-[#23A6F0]
                    hover:bg-white 
                    w-[193px] 
                    h-[52px] 
                    px-[40px] 
                    py-[15px] 
                    gap-[10px] 
                    rounded-[5px] 
                    flex 
                    items-center 
                    justify-center
                    whitespace-nowrap
                    "
              >
                Get Quote Now
              </button>
              <button
                className="
                    border-[1px] 
                    border-[#23A6F0] 
                    text-[#23A6F0]
                    hover:bg-[#23A6F0] 
                    hover:text-white 
                    hover:border-white
                    font-bold
                    w-[162px] 
                    h-[52px] 
                    px-[40px] 
                    py-[15px] 
                    gap-[10px]
                    rounded-[5px] 
                    flex
                    items-center 
                    justify-center
                    whitespace-nowrap
                    "
              >
                Learn More
              </button>
            </div>

            {/* cards div */}
            <div
              className="
              flex
              w-[1045px] 
              h-[294px] 
              gap-[30px] 
              mt-[130px]
              absolute 
              left-0
              right-0
              "
            >
              {/* card 1 */}
              <div
                className="
                  w-[328px] 
                  h-[292px] 
                  px-[40px] 
                  py-[35px] 
                  gap-[20px] 
                  bg-white
                  hover:rounded-lg 
                  transition-transform 
                  duration-300 
                  hover:scale-105 
                  hover:shadow-lg
                  "
              >
                <div
                  className="
                      bg-[#FFDCD1]
                      w-[70px] 
                      h-[76px] 
                      px-[19px] 
                      py-[22px] 
                      gap-[10px] 
                      rounded-[10px] 
                      "
                ></div>
                <h5
                  className="
                      text-[#252B42]
                      text-[16px] 
                      font-bold 
                      leading-[24px] 
                      tracking-[0.1px] 
                      mt-6 
                      text-left
                      font-montserrat 
                      "
                >
                  training Courses
                </h5>
                <div className="bg-[#E74040] w-[50px] h-[2px] gap-0 mt-5"></div>
                <p
                  className="
                        font-montserrat 
                        text-[13px] 
                        font-normal 
                        leading-[20px] 
                        tracking-[0.2px] 
                        text-left
                        text-[#737373]
                        mt-5    
                        "
                >
                  The gradual accumulation of information about atomic and
                  small-scale behaviour...
                </p>
              </div>

              {/* card 2 */}
              <div
                className="
                  w-[328px] 
                  h-[292px] 
                  px-[40px] 
                  py-[35px] 
                  gap-[20px]
                  bg-white 
                  hover:rounded-lg 
                  transition-transform 
                  duration-300 
                  hover:scale-105 
                  hover:shadow-lg
                  "
              >
                <div
                  className="
                      bg-[#B9EAA8]
                      w-[70px] 
                      h-[76px] 
                      px-[19px] 
                      py-[22px] 
                      gap-[10px] 
                      rounded-[10px] 
                      "
                ></div>
                <h5
                  className="
                      text-[#252B42]
                      text-[16px] 
                      font-bold 
                      leading-[24px] 
                      tracking-[0.1px] 
                      mt-6 
                      text-left
                      font-montserrat 
                      "
                >
                  2,769 online courses
                </h5>
                <div className="bg-[#E74040] w-[50px] h-[2px] gap-0 mt-5"></div>
                <p
                  className="
                        font-montserrat 
                        text-[13px] 
                        font-normal 
                        leading-[20px] 
                        tracking-[0.2px] 
                        text-left
                        text-[#737373]
                        mt-5    
                        "
                >
                  The gradual accumulation of information about atomic and
                  small-scale behaviour...
                </p>
              </div>

              {/* card 3 */}
              <div
                className="
                  w-[328px] 
                  h-[292px] 
                  px-[40px] 
                  py-[35px] 
                  gap-[20px] 
                  bg-[#23A6F0] 
                  hover:rounded-lg 
                  transition-transform 
                  duration-300 
                  hover:scale-105 
                  hover:shadow-lg
                  "
              >
                <div
                  className="
                  bg-[#FFFFFF]
                  w-[70px] 
                  h-[76px] 
                  px-[19px] 
                  py-[22px] 
                  gap-[10px] 
                  rounded-[10px] 
                "
                ></div>
                <h5
                  className="
                  text-[#FFFFFF]
                  text-[16px] 
                  font-bold 
                  leading-[24px] 
                  tracking-[0.1px] 
                  mt-6 
                  text-left
                  font-montserrat 
                "
                >
                  Training Courses
                </h5>
                <div className="bg-[#FFFFFF] w-[50px] h-[2px] gap-0 mt-5"></div>
                <p
                  className="
                    font-montserrat 
                    text-[13px] 
                    font-normal 
                    leading-[20px] 
                    tracking-[0.2px] 
                    text-left 
                    text-white 
                    mt-5    
                  "
                >
                  The gradual accumulation of information about atomic and
                  small-scale behaviour...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
