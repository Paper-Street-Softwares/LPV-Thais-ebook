import React from "react";
import contentLp01 from "../../content/contentLp01";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";

function Card4PontosFeatures() {
  return (
    <SectionArea paddingTopAndBottom={false}>
      <SectionWrapper>
        <div className="flex flex-col items-center gap-6 tablet1:gap-0 tablet2:flex-row justify-evenly desktop1:mt-8">
          <div className="flex flex-col-reverse gap-12 tablet2:flex-row tablet2:gap-0 items-center">
            <section className="flex flex-col gap-6 text-center tablet1:flex-row tablet2:flex-col tablet2:gap-2 tablet2:text-start desktop1:gap-8">
              <div className="w-[90%] tablet2:max-w-[250px] m-auto min-h-[110px] desktop1:max-w-[200px] flex items-center tablet2:items-start flex-col">
                <h1 className="mb-1 font-mainFont">
                  1 - <span className="text-white">Especialização</span>
                </h1>
                <p className="text-paragraph2 font-secondFont tablet1:text-paragraph1 desktop1:text-paragraph2 text-white/50">
                  Especialista em Leilões Imobiliários, com atuação voltada para
                  análise jurídica dos editais, regularização de imóveis e
                  segurança na aquisição em leilões judiciais e extrajudiciais.
                </p>
              </div>
              <div className="w-[90%] tablet2:max-w-[250px] m-auto min-h-[110px] desktop1:max-w-[200px] flex items-center tablet2:items-start flex-col">
                <h1 className="mb-1 font-mainFont">
                  2 - <span className="text-white">Experiência</span>
                </h1>
                <p className="text-paragraph2 font-secondFont tablet1:text-paragraph1 desktop1:text-paragraph2 text-white/50">
                  Advogada com foco em Leilões, atuando na conferência
                  documental, identificação de riscos e proteção dos direitos do
                  arrematante durante todo o processo.
                </p>
              </div>
            </section>

            <section>
              {" "}
              <div className="relative w-fit mx-auto">
                {/* GRID DOS 4 QUADRADOS */}
                <div className="grid grid-cols-2 gap-2">
                  {/* E */}
                  <div className="relative bg-gradient-to-tl from-backgroundLEscuro to-backgroundREscuro text-white flex justify-center items-center w-[100px] h-[100px] desktop1:w-[150px] desktop1:h-[150px] rounded-[20px]">
                    <span className="absolute -translate-x-1 -translate-y-1.5 text-title6 desktop1:text-title7 font-mainFont">
                      1
                    </span>
                    <div className="bg-white p-1 w-8 h-8 flex items-center justify-center rounded-full absolute -translate-y-[49px] desktop1:-translate-y-[74px] z-10 border border-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#430f0f"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-gavel-icon lucide-gavel"
                      >
                        <path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381" />
                        <path d="m16 16 6-6" />
                        <path d="m21.5 10.5-8-8" />
                        <path d="m8 8 6-6" />
                        <path d="m8.5 7.5 8 8" />
                      </svg>
                    </div>
                  </div>

                  {/* A */}
                  <div className="relative bg-gradient-to-tl from-backgroundLClaro to-backgroundRClaro text-primary flex justify-center items-center w-[100px] h-[100px] desktop1:w-[150px] desktop1:h-[150px] rounded-[20px]">
                    <span className="absolute translate-x-1 -translate-y-1.5 text-title6 desktop1:text-title7 font-mainFont">
                      2
                    </span>
                    <div className="bg-white p-1 w-8 h-8 flex items-center justify-center rounded-full absolute -translate-y-[49px] desktop1:-translate-y-[74px] z-10 border border-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#430f0f"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-scale-icon lucide-scale"
                      >
                        <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                        <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                        <path d="M7 21h10" />
                        <path d="M12 3v18" />
                        <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                      </svg>
                    </div>
                  </div>

                  {/* A */}
                  <div className="relative bg-gradient-to-tl from-backgroundLClaro to-backgroundRClaro text-primary flex justify-center items-center w-[100px] h-[100px] desktop1:w-[150px] desktop1:h-[150px] rounded-[20px]">
                    <span className="absolute -translate-x-1 translate-y-1.5 text-title6 desktop1:text-title7 font-mainFont">
                      3
                    </span>
                    <div className="bg-white p-1 w-8 h-8 flex items-center justify-center rounded-full absolute translate-y-[49px] desktop1:translate-y-[74px] z-10 border border-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#430f0f"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-file-text-icon lucide-file-text"
                      >
                        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
                        <path d="M14 2v5a1 1 0 0 0 1 1h5" />
                        <path d="M10 9H8" />
                        <path d="M16 13H8" />
                        <path d="M16 17H8" />
                      </svg>
                    </div>
                  </div>

                  {/* E */}
                  <div className="relative bg-gradient-to-tl from-backgroundLEscuro to-backgroundREscuro text-white flex justify-center items-center w-[100px] h-[100px] desktop1:w-[150px] desktop1:h-[150px] rounded-[20px]">
                    <span className="absolute translate-x-1 translate-y-1.5 text-title6 desktop1:text-title7 font-mainFont">
                      4
                    </span>
                    <div className="bg-white p-1 w-8 h-8 flex items-center justify-center rounded-full absolute translate-y-[49px] desktop1:translate-y-[74px] z-10 border border-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#430f0f"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-hourglass-icon lucide-hourglass"
                      >
                        <path d="M5 22h14" />
                        <path d="M5 2h14" />
                        <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
                        <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* IMAGEM CENTRAL FIXA */}
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className=" bg-primary w-24 h-22 p-3 rounded-full ">
                    <img
                      src={contentLp01.hero.logoBrasao}
                      alt="imagem Brasão da Logo"
                      width="64"
                      height="81"
                      className="w-16 object-contain "
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section className="flex flex-col gap-6 text-center tablet1:flex-row tablet2:flex-col tablet2:gap-2 tablet2:text-start desktop1:gap-8">
            <div className="w-[90%] tablet2:max-w-[250px] m-auto min-h-[110px] desktop1:max-w-[200px] flex items-center tablet2:items-start flex-col">
              <h1 className="mb-1 font-mainFont">
                3 - <span className="text-white">Atuação</span>
              </h1>
              <p className="text-paragraph2 font-secondFont tablet1:text-paragraph1 desktop1:text-paragraph2 text-white/50">
                Atuação especializada em contratos de arrematação, assegurando
                que todas as cláusulas estejam alinhadas aos interesses do
                cliente e às normas legais aplicáveis.
              </p>
            </div>
            <div className="w-[90%] tablet2:max-w-[250px] m-auto min-h-[110px] desktop1:max-w-[200px] flex items-center tablet2:items-start flex-col">
              <h1 className="mb-1 font-mainFont">
                4 - <span className="text-white">Acompanhamento</span>
              </h1>
              <p className="text-paragraph2 font-secondFont tablet1:text-paragraph1 desktop1:text-paragraph2 text-white/50">
                Experiência no acompanhamento completo de leilões, desde a
                investigação prévia do imóvel até a posse segura, garantindo
                suporte jurídico estratégico ao arrematante.
              </p>
            </div>
          </section>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

export default Card4PontosFeatures;
