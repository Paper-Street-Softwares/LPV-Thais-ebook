import React from "react";
import SectionArea from "../../sectionElements/SectionArea";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import Card4PontosFeatures from "../../cards/Card4PontosFeatures";
import SectionHeader from "../../sectionElements/SectionHeader";

function FeaturesLP4Pontos() {
  return (
    <div className="bg-primary">
      {/* BLOCO VERMELHO 1 - Letreiro */}
      <div className=" bg-rolagem text-white overflow-hidden ">
        <div className="flex gap-6 whitespace-nowrap animate-letreiro py-2 font-mainFont">
          <span>
            O primeiro passo - Mitos e Verdades - Análise de Edital - Riscos e
            Cuidados
          </span>
          <span>
            O primeiro passo - Mitos e Verdades - Análise de Edital - Riscos e
            Cuidados
          </span>
        </div>
      </div>

      <SectionArea>
        <SectionWrapper>
          <div className="w-full">
            <section className="text-white">
              <div className="max-w-[1215px] m-auto px-6 text-center">
                {/* Título principal */}
                {/* <SectionHeader
                  sectionHeaderTitle="LEILÃO DE SUCESSO"
                  sectionHeaderSubtitle=" para iniciantes"
                  miniTitleBgColor={false}
                  className="mb-[10px]"
                /> */}

                <h2 className="font-mainFont text-title3 phone2:text-title4 tablet1:text-title5 font-light mb-2 leading-[30px]">
                  LEILÃO DE <span className="font-semibold">SUCESSO</span>{" "}
                  <br />
                  para iniciantes
                </h2>
                <div className="relative w-40 h-[2px] m-auto overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-glowLine"></div>
                </div>

                {/* Subtítulo */}
                <p className="font-secondFont text-paragraph3 tablet1:text-paragraph4 text-white mt-2 mb-10">
                  Aprenda, com este e-book, a entrar no mundo dos leilões com
                  confiança e respaldo jurídico - do início ao fim.
                </p>
              </div>

              <div>
                <Card4PontosFeatures />
              </div>
            </section>
            {/* <section className="bg-green-500 justify-between m-auto max-w-[500px] h-auto flex flex-col items-center gap-3 text-center tablet1:flex-row tablet1:text-start ">
              <div className="w-[200px] h-[200px] bg-red-900">
                <div className=" bg-orange-600 "></div>
              </div>
              <div className="max-w-[200px] flex flex-col my-auto tablet1:mr-20 ">
                <p className="text-paragraph1">
                  LETRAS MIUDAS NA{" "}
                  <span className="text-white">PARTE ACIMA</span>
                </p>
                <h1 className="text-title1">M.E.S.S</h1>
                <p className="text-paragraph3 bg-white">
                  descricao com leve texto médiodescricao com leve texto médio
                  descricao com leve texto médio
                </p>
              </div>
            </section> */}
          </div>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}

export default FeaturesLP4Pontos;
