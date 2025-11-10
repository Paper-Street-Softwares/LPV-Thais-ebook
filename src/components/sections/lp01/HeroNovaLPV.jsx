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
                  width="192"
                  height="53"
                  alt="Logo da Thaís Costa"
                  className="w-[70%] flex m-auto"
                />
              </div>
              <i>
                {" "}
                <h1 className="font-Merriweather mt-2 phone2:mb-2 text-primary text-title4 tablet1:text-title6 text-center">
                  {contentLp01.hero.textArea.title}
                </h1>
              </i>
              <i>
                <p className="font-secondFont mb-8 w-[90%] text-paragraph5 leading-[18px] tablet1:w-[65%] tablet2:leading-[18px] text-center m-auto">
                  {contentLp01.hero.textArea.subtitle}
                </p>
              </i>

              <img
                src="/bgHeroInfluencerBook.webp"
                alt="Imagem do Livro na Seção Início"
                fetchPriority="high"
                width="468"
                height="525"
                className="w-[90%] m-auto"
              />
            </div>
          </SectionWrapper>
        </SectionArea>
      </div>

      <div className="hidden w-full bg-bottom bg-repeat bg-cover desktop1:flex font-mainFont">
        <SectionArea paddingTopAndBottom={false}>
          <SectionWrapper>
            <div className="max-w-[1215px] flex justify-between">
              <div className="flex flex-col justify-center ">
                <div>
                  <img
                    src={contentLp01.hero.logo.logoImg}
                    width="192"
                    height="53"
                    alt="Logo da Thaís Costa"
                    className="w-24 tablet1:w-48 mb-3 "
                  />
                </div>
                <i>
                  {" "}
                  <h1 className="font-Merriweather text-primary desktop1:text-title5">
                    {contentLp01.hero.textArea.title}
                  </h1>
                </i>
                <i>
                  {" "}
                  <p className="font-secondFont w-[50%] text-paragraph1 phone2:text-paragraph2 leading-[15px] phone3:text-paragraph3 tablet1:text-paragraph4 tablet1:w-[65%] tablet2:text-paragraph5 tablet2:leading-[18px] desktop1:w-[80%]">
                    {contentLp01.hero.textArea.subtitle}
                  </p>
                </i>
              </div>

              <div>
                <img
                  src="/bgHeroInfluencerBook.webp"
                  alt="Imagem do Livro na Seção Início"
                  width="468px"
                  height="525px"
                  fetchPriority="high"
                />
              </div>
            </div>
          </SectionWrapper>
        </SectionArea>
        ;
      </div>
    </div>
  );
}

export default HeroNovaLPV;
