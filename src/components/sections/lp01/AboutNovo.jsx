import React from "react";
import SectionArea from "../../sectionElements/SectionArea";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import Button from "../../interactives/Button";
import SectionHeader from "../../sectionElements/SectionHeader";
import contentLp01 from "../../../content/contentLp01";

function AboutNovo() {
  return (
    <div
      style={{
        backgroundImage: `url(${contentLp01.about.paralaxe})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "bg-cover",
      }}
      className="relative bg-scroll bg-center bg-cover desktop1:bg-fixed"
    >
      <div className="absolute inset-0 bg-primary/90 z-0 pointer-events-none" />
      <SectionArea>
        <SectionWrapper>
          <div className="flex flex-col tablet2:flex-row justify-evenly m-auto gap-6 table2:gap-0 text-white max-w-[700px] z-10">
            <section className="flex flex-col items-center gap-14 tablet2:max-w-[50%]">
              <div className="flex items-center justify-center relative">
                <img
                  src={contentLp01.about.imgAbout.img}
                  alt="Imagem da Thaís Costa"
                  width="280"
                  height="413"
                  className="w-[80%] rounded-md"
                />
                <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[50%] h-[4px] bg-black blur-sm rounded-full"></div>
              </div>

              <div className="flex flex-col gap-3 p-7 border-white/30 bg-black/40 border-[1px] rounded-xl">
                <p className="text-paragraph3 font-secondFont text-white/70">
                  Com esse conhecimento, você estará pronto(a) para mudar sua
                  realidade financeira, construir patrimônio e dar o primeiro
                  passo rumo à independência que sempre sonhou!
                </p>
              </div>
            </section>

            <section className="tablet2:max-w-[50%]">
              <div className="flex flex-col m-auto">
                <p className="text-paragraph1 mb-2 w-full tracking-[5px]">
                  A grande jogada <span className="">...</span>
                </p>
                <h1 className="text-title1 text-white leading-[25px] font-mainFont">
                  Conhecer o mundo{" "}
                  <span className="font-semibold">dos leilões</span>
                </h1>

                <div className="relative max-w-[450px] h-[2px] overflow-hidden my-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-transparent animate-glowLine"></div>
                </div>

                <div className="flex flex-col gap-3 p-7 border-white/30 bg-black/40 border-[1px] rounded-xl max-w-[450px]">
                  <div>
                    <h1 className="font-bold text-title2">...</h1>
                    <h1 className="font-bold text-title1 mb-2">Entenda</h1>
                    <p className="text-paragraph3 font-secondFont text-white/70 w-full">
                      Este e-book foi criado para te mostrar, de forma simples e
                      direta, como conquistar imóveis com total segurança
                      jurídica, pagando muito menos do que no mercado
                      tradicional. Aqui você vai aprender os principais
                      cuidados, estratégias e segredos para participar de
                      leilões sem medo, identificando oportunidades reais e
                      evitando prejuízos.
                      <br />
                      <br />
                      <Button
                        label="Quero conquistar imóveis em leilão!"
                        size="small"
                        textclassName="text-center text-white "
                        color="bg-gradient-to-r from-red-900 to-red-950 border-r-2 border-yellow-500 border-t-[1px] border-b-[1px]"
                        buttonLink="https://pay.kiwify.com.br/2jENvFn"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </SectionWrapper>
      </SectionArea>{" "}
    </div>
  );
}

export default AboutNovo;
