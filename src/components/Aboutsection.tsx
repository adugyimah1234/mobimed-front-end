import React from 'react';

function Aboutsection() {
  return (
    <div className="p-20 container mx-auto md:p-6 lg:p-2 w-auto">
      {/* Header section */}
      <div className="flex flex-row justify-center items-center gap-6 w-[100%] box-border">
        <div className="container max-w-40 h-0.5 border-2 border-[#57BDDD] border-solid" />
        <p className="  text-[#57BDDD] text-5xl leading-[113%] font-bold tracking-[5.52px] uppercase">
          WHY CHOOSE US
        </p>
      </div>

      {/* Main section */}
      <div className="flex container flex-col justify-around items-center  w-[100%] box-border">
        <p className="flex flex-col justify-center border-[#222222ff] text-[50px] leading-[120%] font-sarabun font-[600] text-center uppercase">
          <span>
            the <span className="text-[#57BDDD]">best</span> Pharmacy services
          </span>
        </p>
      </div>

      {/* Features section */}
      <div className=" px-30 container flex flex-row justify-center items-center">
        <div className="flex flex-col justify-center items-center mx-left-30 gap-[153px]">
          {/* Feature 1 */}
          <div className="flex flex-row justify-center items-center gap-6 w-auto box-border">
            <div className="flex flex-col justify-start items-end gap-4 w-auto h-[100%] box-border">
              <p className="flex flex-col md:size-fit justify-end border-[#7a7a7aff] text-xl leading-[120%] text-right uppercase">
                TeleHealth Consultations
              </p>
              <p className="flex flex-col justify-end border-[#a7a7a7ff] text-lg leading-[158%] text-right">
              Connect with our healthcare professionals from the comfort of your own home. Get personalized advice and treatment plans via video calls or messaging.
              </p>
            </div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/dt9e4emuao7-232%3A8684?alt=media&token=4627f637-beee-4f9f-8b35-a2e674860978"
              alt="Not Found"
              className=" md:size-fit w-auto h-auto"
            />
          </div>

          {/* Feature 2 */}
          <div className="flex flex-row justify-start items-center gap-6">
            <div className="flex flex-col justify-start items-end gap-4 w-auto h-auto box-border">
              <p className="flex flex-col justify-end border-[#7a7a7aff] text-xl leading-[120%] text-right uppercase">
                Health Screening
              </p>
              <p className="flex flex-col justify-end border-[#a7a7a7ff] text-lg leading-[158%] font-[300] text-right">
              Stay on top of your health with regular check-ups and tests. Identify potential health issues early and take proactive steps.
              </p>
            </div>
            <img
              src=" https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/dt9e4emuao7-232%3A8701?alt=media&token=29a70509-ed64-46f6-b48c-2c7a46eb24ea"
              alt="Not Found"
              className=" md:size-fit w-[90px] h-[90px]"
            />
          </div>
        </div>

        {/* Image section */}
        <div className="container mx-full lg:p-2">
          <div className="flex justify-stretch items-center flex-grow" style={{ minWidth: '300px' }}>
            <img
              src="src/assets/aboutus.png"
              alt="Not Found"
              className="w-auto md:w-[550px] md:h-[459px] max-h-fit"
            />
          </div>
        </div>

        {/* Features section (continued) */}
        <div className="flex flex-col justify-center items-center gap-[150px] max-w-full">
          {/* Feature 3 */}
          <div className="flex flex-row justify-start items-center gap-6">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/dt9e4emuao7-232%3A8721?alt=media&token=28b32b57-5935-40bd-98a4-1ebb9966653d"
              alt="Not Found"
              className="md:w-[70px] md:h-[70px]"
            />
            <div className="flex flex-col justify-start items-start gap-4 w-auto h-auto box-border">
              <p className="border-[#222222ff] text-xl leading-[120%] uppercase">
                Chronic Diease Management
              </p>
              <p className="border-[#a7a7a7ff] text-lg leading-[158%]">
              Get your prescription medications delivered right to your doorstep. Access hard-to-find and specialty medicines with ease.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-row justify-start items-center gap-6">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/dt9e4emuao7-232%3A8743?alt=media&token=737bb114-f290-465a-8b9e-79f1bc1128af"
              alt="Not Found"
              className="w-[90px] h-[90px]"
            />
            <div className="flex flex-col justify-start items-start gap-4 w-auto h-auto box-border">
              <p className="border-[#7a7a7aff] text-xl leading-[120%] uppercase">
                Specialty Medicine Delivery
              </p>
              <p className="border-[#a7a7a7ff] text-lg leading-[158%]">
              Get your prescription medications delivered right to your doorstep. Access hard-to-find and specialty medicines with ease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutsection;