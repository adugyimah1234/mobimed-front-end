import React from 'react'

function Aboutsection() {
  return (
    <div className=" flex flex-col justify-between items-around  gap-[60px]  m-20 mx-0 py-20">
    <div className=" flex flex-row justify-center items-center gap-6 w-[100%] box-border">
      <div className=" w-[86px] h-0.5 border-2  border-[#57BDDD] border-solid" />
      <p className="  text-[#57BDDD] text-3xl  leading-[113%]  font-bold  tracking-[5.52px] uppercase">
        WHY CHOOSE US
      </p>
    </div>
    <div className=" flex flex-col justify-start items-center gap-4 w-[100%] box-border">
      <p className=" flex flex-col justify-center  border-[#222222ff]  text-[50px]  leading-[120%]  font-sarabun  font-[600] text-center uppercase">
       <span> the <span className="text-[#57BDDD]">best</span> Pharmacy services</span>
      </p>
    </div>

      <div className=" flex flex-row justify-center items-center">
        <div className=" flex flex-col justify-center items-center m-20  gap-[153px]  ">
          <div className=" flex flex-row justify-start items-center gap-6 w-[120%] box-border">
            <div className=" flex flex-col justify-start items-end gap-4 w-[336px] h-[100%] box-border">
              <p className=" flex flex-col justify-end  border-[#7a7a7aff] text-xl  leading-[120%]  font-sarabun  font-[600] text-right uppercase">
                proffessional service
              </p>
              <p className=" flex flex-col justify-end  border-[#a7a7a7ff] text-lg  leading-[158%]  font-roboto  font-[400] text-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor.
              </p>
            </div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/dt9e4emuao7-232%3A8684?alt=media&token=4627f637-beee-4f9f-8b35-a2e674860978"
              alt="Not Found"
              className=" w-[90px] h-[90px]"
            />
          </div>
          
          <div className=" flex flex-row justify-start items-center gap-6 ">
            <div className=" flex flex-col justify-start items-end gap-4 w-[336px] h-[100%] box-border">
              <p className=" flex flex-col justify-end  border-[#7a7a7aff] text-xl  leading-[120%]  font-sarabun  font-[600] text-right uppercase">
                always on time
              </p>
              <p className=" flex flex-col justify-end  border-[#a7a7a7ff] text-lg  leading-[158%]  font-roboto  font-[400] text-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor.
              </p>
            </div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/dt9e4emuao7-232%3A8701?alt=media&token=29a70509-ed64-46f6-b48c-2c7a46eb24ea"
              alt="Not Found"
              className=" w-[90px] h-[90px]"
            />
          </div>
        </div>
        <div className="w-full">
        <div className=" flex justify-center items-center flex-grow" style={{ minWidth: '500px' }}>
          <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/dt9e4emuao7-232%3A8757?alt=media&token=c7e7179a-6634-4f0f-a7eb-f96e7a7496de"
          alt="Not Found"
          className="w-full md:w-full md:h-[459px] mx-auto"
        />
    </div>
    </div>

        <div className=" flex flex-col justify-center items-center  gap-[150px] max-w-full md:max-w-[800px] lg:max-w-[1200px] xl:max-w-[1500px]">
          <div className=" flex flex-row justify-start items-center gap-6 ">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/dt9e4emuao7-232%3A8721?alt=media&token=28b32b57-5935-40bd-98a4-1ebb9966653d"
              alt="Not Found"
              className=" md:w-[70px] md:h-[70px]"
            />
            <div className=" flex flex-col justify-start items-start gap-4 w-[336px] h-[100%] box-border">
              <p className="  border-[#222222ff] text-xl  leading-[120%]  font-sarabun  font-[600] uppercase">
                24 hours emergency service
              </p>
              <p className="  border-[#a7a7a7ff] text-lg  leading-[158%]  font-roboto  font-[400]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor.
              </p>
            </div>
          </div>
          <div className=" flex flex-row justify-start items-center gap-6 ">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/dt9e4emuao7-232%3A8743?alt=media&token=737bb114-f290-465a-8b9e-79f1bc1128af"
              alt="Not Found"
              className=" w-[90px] h-[90px]"
            />
            <div className=" flex flex-col justify-start items-start gap-4 w-[336px] h-[100%] box-border">
              <p className="  border-[#7a7a7aff] text-xl  leading-[120%]  font-sarabun  font-[600] uppercase">
                flat rate fees
              </p>
              <p className="  border-[#a7a7a7ff] text-lg  leading-[158%]  font-roboto  font-[400]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor.
              </p>
            </div>
            
          </div>
        </div>
      </div>

  </div>
  )
}

export default Aboutsection
