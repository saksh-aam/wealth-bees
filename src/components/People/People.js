import React, { useState } from "react";
import "./people.css";
import abhishek from "../../images/abhishek.JPG";
import csp from "../../images/csp.JPG";
import ankur from "../../images/ankur.JPG";
import people from "../../images/people.png";

const People = () => {
  const [flag1, setflag1] = useState(false);
  const [flag2, setflag2] = useState(false);
  const [flag3, setflag3] = useState(false);

  return (
    <div className="people-main">
      <div id="upper-people-div">
        {/* <div id="inner-div"> */}
        <img src={people} alt="" id="people-mainimg" />
        <div id="people-heading">
          <p className="people-heading-p">Your service is</p>
          <p className="people-heading-p">Our responsibility</p>
          {/* </div> */}
        </div>
      </div>
      <div className="people-main-content">
        <div className="people-details">
          <div className="w-fit">
            <div className="flex flex-wrap">
              <div className="w-fit lg:w-fit px-6 py-6 text-center">
                <div className="bg-white rounded shadow-lg overflow-hidden p-8">
                  <div className="rounded-full h-64 w-64 flex items-center justify-center bg-grey-light mx-auto mb-8">
                    <img src={csp} alt="" className="person-image" />
                  </div>
                  <div className="font-bold text-xl mb-2">CSP Shukla</div>
                  <p className="text-grey-darker text-base mb-4">
                    Co-Founder
                  </p>
                  <div
                    className="w-80 bio"
                    style={{ display: flag1 ? "block" : "none" }}
                  >
                    <p className="bio-p text-justify pb-5">
                      CSP Shukla, CFPCM is the co-founder of Wealth bees. At the
                      helm of the company's growth factor, he leads the strategy
                      and research teams from the forefront. CSP has served as
                      the wealth Manager at Axis bank and Territory manager of
                      Future Generali and Bajaj Allianz. He is experienced in
                      wealth management, retail banking and insurance amongst
                      other aspects of finance.
                    </p>
                    <p className="bio-p text-justify pb-5">
                      With core beliefs of transparency, trust and ethics, he
                      has been a part of the industry for the last 18 years. CSP
                      truly understands the different phases of wealth
                      management (accumulation, preservation and distribution).
                      CSP holds a degree of BSc from Lucknow university and PGDM
                      from Jaipuria Institute of management. He Licentiate from
                      Insurance Institute of india and Level II candidate for
                      CFA charter.
                    </p>
                    <p className="bio-p text-justify pb-5">
                      Catch up with him over a cup of coffee and you won't say
                      goodbye without being a part of WealthBees!
                    </p>
                  </div>
                  <button
                    className="bg-transparent hover:bg-blue text-blue-dark rounded-full font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent dropdowns"
                    onClick={() => setflag1(!flag1)}
                  >
                    Know More
                  </button>
                </div>
              </div>

              <div className="w-fit lg:w-fit px-6 py-6 text-center">
                <div className="bg-white rounded shadow-lg overflow-hidden p-8">
                  <div className="rounded-full h-64 w-64 flex items-center justify-center bg-grey-light mx-auto mb-8">
                    <img src={ankur} alt="" className="person-image" />
                  </div>
                  <div className="font-bold text-xl mb-2">Ankur Sharma</div>
                  <p className="text-grey-darker text-base mb-4">
                    Co-Founder
                  </p>
                  <div
                    className="w-80 bio"
                    style={{ display: flag2 ? "block" : "none" }}
                  >
                    <p className="bio-p text-justify pb-5">
                      Management Graduate with specialization in Finance and
                      Banking, MS Ramaiah college, Bengaluru. Certified from
                      NISM and IRDA.
                    </p>
                    <p className="bio-p text-justify pb-5">
                      10+ years of experience in finance and banking industry.
                      Proven expertise and knowledhe in Derivative Market,
                      Capital Markets, Commodities Market, etc. Proficient with
                      portfolio planning and management.
                    </p>
                  </div>
                  <button
                    className="bg-transparent hover:bg-blue text-blue-dark rounded-full font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent "
                    onClick={() => setflag2(!flag2)}
                  >
                    Know More
                  </button>
                </div>
              </div>
              <div className="w-80 lg:w-fit px-6 py-6 text-center">
                <div className="bg-white rounded shadow-lg overflow-hidden p-8">
                  <div className="rounded-full h-64 w-64 flex items-center justify-center bg-grey-light mx-auto mb-8">
                    <img src={abhishek} alt="" className="person-image" />
                  </div>
                  <div className="font-bold text-xl mb-2">Abhishek Kumar</div>
                  <p className="text-grey-darker text-base mb-4 ">Co-Founder</p>
                  <div
                    className="w-80 bio"
                    style={{ display: flag3 ? "block" : "none" }}
                  >
                    <p className="bio-p text-justify pb-5">
                      Commerce Graduate, Lucknow university. Certified from NISM
                      and IRDA.
                    </p>
                    <p className="bio-p text-justify pb-5">
                      15+ yeats of industry experience. He is a well-know Wealth
                      Planner accredited by CIEL. He is well versed in
                      Investment handling and Advisory services. Portfolio
                      management and financial planning in his forte.
                    </p>
                  </div>
                  <div className="w-full flex justify-end">
                    <button
                      className="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 hover:border-transparent underline decoration-customYellow hover:no-underline"
                      onClick={() => setflag3(!flag3)}
                    >
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
