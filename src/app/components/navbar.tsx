export default function Navbar() {
  return (
    <div className="flex justify-center items-start h-screen">
      <nav className="w-[1322px] h-[91px] flex">
        {" "}
        {/* NAVBAR DIV */}
        <div className="w-[180px] h-[58px] mt-[16px] ml-[130px] group relative overflow-hidden">
          {" "}
          {/* IMAGE DIV */}
          <img
            src="/BrandName.png"
            className="w-[180px] h-[25px] t-[13px] mt-4"
          />
        </div>
        <div className="flex w-[815px] h-[58px] mt-[16px] ml-[80px] items-center justify-between">
          {/* LIST DIV */}
          <div className="flex w-[300px] h-[24px] gap-[21px]">
            <ul className="flex text-white gap-7 font-montserrat text-[14px] font-bold">
              <li className="hover:text-[#23A6F0] cursor-pointer">Home</li>
              <li className="hover:text-[#23A6F0] cursor-pointer">Product</li>
              <li className="hover:text-[#23A6F0] cursor-pointer">Pricing</li>
              <li className="hover:text-[#23A6F0] cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* BUTTONS DIV */}
          <div className="flex w-[189px] h-[52px] items-center mr-[40px]">
            <button
              className="
              text-white 
              text-[14px] 
              font-bold
              font-montserrat
              text-left 
              gap-0 
              px-0
              pl-0  
              hover:text-[#23A6F0]
              "
            >
              Login
            </button>
            <button
              className="
              text-white 
              bg-[#23A6F0] 
              text-[12px] 
              font-bold 
              w-[100px] 
              h-[48px] 
              py-[15px] 
              px-[25px] 
              rounded-l-md 
              hover:text-[#23A6F0]
              hover:bg-white
              ml-auto
              ">
              JOIN US
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
