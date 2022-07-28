import React, { useState } from "react";
import "./people.css";
import abhishek from "../../images/abhishek.JPG";
import csp from "../../images/csp.JPG";
import ankur from "../../images/ankur.JPG";
import people from "../../images/people.png";
import { BsChevronDoubleDown } from "react-icons/bs";

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
          <div id="icon">
            <a href="#people-main-content"><BsChevronDoubleDown /></a>
          </div>
        </div>
      </div>
      <div className="people-main-content" id="people-main-content">
        <div className="people-details">
          <div className="w-fit">
            <div className="flex flex-wrap cards-envelope">
              <div className="w-fit px-6 py-6 text-center ">
                <div className="bg-white rounded shadow-lg overflow-hidden p-8">
                  <div className="rounded-full h-64 w-64 md:w-80 flex items-center justify-center bg-grey-light mx-auto mb-8">
                    <img src={csp} alt="" className="person-image" />
                  </div>
                  <div className="font-bold text-xl mb-2">CSP Shukla</div>
                  <p className="text-grey-darker text-base mb-4">Co-Founder</p>
                  <div className="w-80 bio">
                    <p className="bio-p text-justify pb-5">
                      <span>
                        CSP Shukla, at the helm of the company's growth factor,
                        he leads the strategy and research teams from the
                        forefront.
                      </span>
                      {/* <button
                        style={{
                          display: !flag1 ? "block" : "none",
                          fontWeight: 700,
                        }}
                        onClick={() => {
                          setflag3(false);
                          setflag2(false);
                          setflag1(!flag1);
                        }}
                      >
                        Know More
                      </button> */}
                      <span
                        // style={{ display: flag1 ? "inline-block" : "none" }}
                      >
                        CSP has served as the wealth Manager at Axis bank and
                        Territory manager of Future Generali and Bajaj Allianz.
                        He is experienced in wealth management, retail banking
                        and insurance amongst other aspects of finance.
                      </span>
                    </p>
                    <p
                      className="bio-p text-justify pb-5"
                      // style={{ display: flag1 ? "block" : "none" }}
                    >
                      With core beliefs of transparency, trust and ethics, he
                      has been a part of the industry for the last 18 years. CSP
                      truly understands the different phases of wealth
                      management (accumulation, preservation and distribution).
                      CSP holds a degree of BSc from Lucknow university and PGDM
                      from Jaipuria Institute of management. He Licentiate from
                      Insurance Institute of india and Level II candidate for
                      CFA charter.
                    </p>
                    <p
                      className="bio-p text-justify pb-5"
                      // style={{ display: flag1 ? "block" : "none" }}
                    >
                      Catch up with him over a cup of coffee and you won't say
                      goodbye without being a part of WealthBees!
                    </p>
                    {/* <button
                      style={{
                        display: flag1 ? "block" : "none",
                        fontWeight: 700,
                      }}
                      className=""
                      onClick={() => setflag1(!flag1)}
                    >
                      Show Less
                    </button> */}
                  </div>
                </div>
              </div>

              <div className="w-fit lg:w-fit px-6 py-6 text-center">
                <div className="bg-white rounded shadow-lg overflow-hidden p-8">
                  <div className="rounded-full h-64 w-64 md:w-80 flex items-center justify-center bg-grey-light mx-auto mb-8">
                    <img src={ankur} alt="" className="person-image" />
                  </div>
                  <div className="font-bold text-xl mb-2">Ankur Sharma</div>
                  <p className="text-grey-darker text-base mb-4">Co-Founder</p>
                  <div className="w-80 bio">
                    <p className="bio-p text-justify pb-5">
                      Management Graduate with specialization in Finance and
                      Banking, MS Ramaiah college, Bengaluru. Certified from
                      NISM and IRDA.
                      {/* <button
                        style={{
                          display: !flag2 ? "block" : "none",
                          fontWeight: 700,
                        }}
                        onClick={() => {
                          setflag1(false);
                          setflag3(false);
                          setflag2(!flag2);
                        }}
                      >
                        Know More
                      </button> */}
                    </p>
                    <p
                      className="bio-p text-justify pb-5"
                      // style={{ display: flag2 ? "block" : "none" }}
                    >
                      {/* 10+ years of experience in finance and banking industry.
                      Proven expertise and knowledhe in Derivative Market,
                      Capital Markets, Commodities Market, etc. Proficient with
                      portfolio planning and management. */}
                       Ankur Sharma leads the Wealth Bees Team and spearheads all company growth initiatives. Ankur is a CFGP and Wealth Management domain specialist with over a decade of diversified experience in Financial Services and has been actively working on Corporate Training & Learning and Development. He has been associated with various Certification bodies and boards, including the National Institute of Securities Markets National Stock Exchange Academy. By educational qualification, Ankur is Post Graduate with a specialization in Finance & Banking from M S Ramaiah Institute of Management, Bangalore. 
                    </p>

                    <p className="bio-p text-justify pb-5">
                      Ankur is a Subject Matter Expert in the Personal Finance Domain and is engaged as a consultant by Asset Management Companies, Universities, and Business Schools; and contributes to various Financial Awareness & Inclusion programs across the country.
                    </p>
                    {/* <button
                      style={{
                        display: flag2 ? "block" : "none",
                        fontWeight: 700,
                      }}
                      className=""
                      onClick={() => setflag2(!flag2)}
                    >
                      Show Less
                    </button> */}
                  </div>
                </div>
              </div>
              <div className="w-fit min-h-80 lg:w-fit px-6 py-6 text-center">
                <div className="bg-white rounded shadow-lg overflow-hidden p-8">
                  <div className="rounded-full h-64 w-64 md:w-80 flex items-center justify-center bg-grey-light mx-auto mb-8">
                    <img src={abhishek} alt="" className="person-image" />
                  </div>
                  <div className="font-bold text-xl mb-2">Abhishek Kumar</div>
                  <p className="text-grey-darker text-base mb-4 ">Co-Founder</p>
                  <div className="w-80 bio">
                    <p className="bio-p text-justify pb-5">
                      Abhishek is an effective communicator known for his excellent relationship and management skills.  
                      {/* <button
                        style={{
                          display: !flag3 ? "block" : "none",
                          fontWeight: 700,
                        }}
                        onClick={() => {
                          setflag1(false);
                          setflag2(false);
                          setflag3(!flag3);
                        }}
                      >
                        Know More
                      </button> */}
                    </p>

                    <p
                      className="bio-p text-justify pb-5"
                      // style={{ display: flag3 ? "block" : "none" }}
                    >
                      After working for 18 years in the banking and finance industry, he came up with this idea to help society choose the right path towards achieving their financial goals; hence the WealthBees' journey started with Abhishek being one of the co-founders. He is highly proficient in portfolio management and financial planning as an expert in Investment handling and Advisory services. He has worked with various Multinational Giants like ABN Amro, HSBC, IndusInd Bank, and Axis Bank, which speaks a lot about his extensive experience in the Industry.
                    </p>

                    <p className="bio-p text-justify pb-5">
                      Customizing the financial journey for every individual client, the basis of the client's risk appetite, capacity to invest, and the time horizon are a few of the essential fundamentals that he considers while suggesting a product. He truly understands the different phases of wealth management accumulation, preservation, and distribution. Abhishek holds the degree of B. Com from Lucknow university and a Licentiate from IRDA and NISM.

                      Having a financial planner like Abhishek is a step ahead in achieving your desired financial goal.
                    </p>
                    {/* <button
                      style={{
                        display: flag3 ? "block" : "none",
                        fontWeight: 700,
                      }}
                      className=""
                      onClick={() => setflag3(!flag3)}
                    >
                      Show Less
                    </button> */}
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
