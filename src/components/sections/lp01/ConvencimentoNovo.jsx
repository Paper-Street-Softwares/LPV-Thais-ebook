import React from "react";
import SectionArea from "../../sectionElements/SectionArea";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import contentLp01 from "../../../content/contentLp01";
import SectionHeader from "../../sectionElements/SectionHeader";

function ConvencimentoNovo() {
  const imagesWhyus = Object.values(contentLp01.whyUs.cards.imagens);

  return (
    <SectionArea>
      <SectionWrapper>
        <div className="relative flex flex-col gap-6 tablet2:flex-row justify-evenly items-center text-primary">
          <div className="tablet2:max-w-[45%]">
            <p className="text-paragraph1 mb-2 w-full tracking-[5px]">
              É PARA VOCÊ <span className="">...</span>
            </p>

            <h1 className="text-title1 font-mainFont text-primary leading-[25px]">
              PARA <span className="text-rolagem underline">QUEM É</span> O
              E-BOOK LEILÃO DE SUCESSO?
            </h1>

            <div className="relative w-full h-[2px] overflow-hidden my-3">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-transparent animate-glowLine"></div>
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <p className="text-paragraph3 font-secondFont">
                  Participar de leilões sem entender as regras pode transformar
                  uma grande oportunidade em prejuízo. Muitos acreditam que
                  basta dar o maior lance, mas há detalhes jurídicos e prazos
                  que exigem atenção. Sem preparo, o que parecia um ótimo
                  negócio pode virar dor de cabeça.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-paragraph3 font-secondFont border border-l-2 border-t-0 border-b-0 border-r-0 border-red-800 pl-3">
                  <strong className="text-rolagem underline">Antes: </strong>
                  Sem orientação, é comum cair em armadilhas, enfrentar dívidas
                  ocultas e perder dinheiro.
                </p>
                <p className="text-paragraph3 font-secondFont border border-l-2 border-t-0 border-b-0 border-r-0 border-red-800 pl-3">
                  <strong className="text-rolagem underline">Depois: </strong>
                  Com o <i>E-book Leilão de Sucesso</i>, você aprende a analisar
                  editais, evitar riscos e conquistar imóveis a partir de
                  <strong> R$ 5.000,00</strong> com segurança.
                </p>
              </div>
            </div>
          </div>
          <div className="tablet2:max-w-[45%] flex flex-col gap-6">
            <section className="flex flex-col items-start">
              {/* <h1 className="text-start mb-3 text-title3 font-mainFont">
                Antes
              </h1> */}
              <div className="flex flex-wrap justify-between">
                {/* {imagesWhyus.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Imagem ${index + 1}`}
                className="rounded-md object-cover w-[120px] h-auto"
              />
            ))} */}

                <img
                  src={contentLp01.whyUs.cards.imagens.img1}
                  alt=""
                  width="164"
                  height="208"
                  className="rounded-md w-[30%]"
                />
                <img
                  src={contentLp01.whyUs.cards.imagens.img2}
                  alt=""
                  width="164"
                  height="208"
                  className="rounded-md w-[30%]"
                />
                <img
                  src={contentLp01.whyUs.cards.imagens.img3}
                  alt=""
                  width="164"
                  height="208"
                  className="rounded-md w-[30%]"
                />
              </div>
            </section>

            <section>
              {/* <h1 className="text-start mb-3 text-title3 font-mainFont">
                Depois
              </h1> */}
              <div className="flex flex-wrap justify-between">
                <img
                  src={contentLp01.whyUs.cards.imagens.img4}
                  alt=""
                  width="164"
                  height="208"
                  className="rounded-md w-[30%]"
                />
                <img
                  src={contentLp01.whyUs.cards.imagens.img5}
                  alt=""
                  width="164"
                  height="208"
                  className="rounded-md w-[30%]"
                />
                <img
                  src={contentLp01.whyUs.cards.imagens.img6}
                  alt=""
                  width="164"
                  height="208"
                  className="rounded-md w-[30%]"
                />
              </div>
            </section>
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

export default ConvencimentoNovo;
