import React from "react";
import SectionArea from "../../sectionElements/SectionArea";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import contentLp01 from "../../../content/contentLp01";

function HeroNovaLPV() {
  return (
    <div>
      <div className=" desktop1:hidden z-10 bg-contain bg-center w-full bg-no-repeat min-h-[40vw] m-auto">
        <SectionArea paddingTopAndBottom={false}>
          <SectionWrapper>
            <div className="desktop1:hidden items-center mt-4">
              <div className="mb-8">
                <img
                  src={contentLp01.hero.logo.logoImg}
                  alt=""
                  className="w-[70%] flex m-auto"
                />
              </div>
              <i>
                {" "}
                <h1 className="font-Calistoga mt-2 phone2:mb-2 text-primary text-title4 tablet1:text-title6 text-center">
                  {contentLp01.hero.textArea.title}
                </h1>
              </i>
              <i>
                <p className="font-secondFont text-copys mb-8 w-[90%] text-paragraph5 leading-[18px] tablet1:w-[65%] tablet2:leading-[18px] text-center m-auto">
                  {contentLp01.hero.textArea.subtitle}
                </p>
              </i>

              <img
                src={contentLp01.hero.imgPerson}
                alt=""
                className="w-[90%]"
              />
            </div>
          </SectionWrapper>
        </SectionArea>
      </div>

      <div
        className="relative hidden desktop1:flex z-10 bg-contain bg-center w-full bg-no-repeat min-h-[40vw] max-h-[50vw] m-auto"
        style={{ backgroundImage: `url(${contentLp01.hero.bgImg})` }}
      >
        <SectionArea paddingTopAndBottom={false}>
          <SectionWrapper>
            <div className="absolute hidden desktop1:flex flex-col top-1/2 -translate-y-1/2 left-0 px-6 tablet1:left-12 tablet1:-translate-y-20 desktop1:left-24 desktop1:-translate-y-24 desktop3:left-[200px] [@media(min-width:1800px)]:left-[10%] [@media(min-width:1800px)]:-translate-y-44">
              <div>
                <img
                  src={contentLp01.hero.logo.logoImg}
                  alt=""
                  className="w-24 tablet1:w-48 mb-3 [@media(min-width:1800px)]:w-112"
                />
              </div>
              <i>
                {" "}
                <h1 className="font-Calistoga text-primary desktop1:text-title5 [@media(min-width:1800px)]:text-[72px]">
                  {contentLp01.hero.textArea.title}
                </h1>
              </i>
              <i>
                {" "}
                <p className="font-secondFont text-copys w-[50%] text-paragraph1 phone2:text-paragraph2 leading-[15px] phone3:text-paragraph3 tablet1:text-paragraph4 tablet1:w-[65%] tablet2:text-paragraph5 tablet2:leading-[18px] desktop1:w-[80%] [@media(min-width:1800px)]:text-[32px] [@media(min-width:1800px)]:leading-[32px]">
                  {contentLp01.hero.textArea.subtitle}
                </p>
              </i>
            </div>
          </SectionWrapper>
        </SectionArea>
        ;
      </div>
    </div>
  );
}

export default HeroNovaLPV;
