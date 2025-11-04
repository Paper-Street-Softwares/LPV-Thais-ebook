import React from "react";
import SectionArea from "../../sectionElements/SectionArea";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import Button from "../../interactives/Button";
import contentLp01 from "../../../content/contentLp01";
import { Gift, Shield } from "lucide-react";

function AcessoNovo() {
  return (
    <div
      style={{
        backgroundImage: `url(${contentLp01.about.paralaxe})`,
        backgroundRepeat: "no-repeat",
      }}
      className="relative bg-scroll bg-center bg-cover desktop1:bg-fixed"
    >
      <div className="absolute inset-0 bg-primary/90 z-0 pointer-events-none" />

      <SectionArea>
        <SectionWrapper>
          <div className="bg-gradient-to-r from-backgroundLClaro to-backgroundRClaro text-primary p-8 relative max-w-[337px] rounded-md">
            <p className=" flex justify-center items-center"> ...</p>
            <h1 className="text-title3 w-full text-center leading-[20px] font-mainFont">
              O que você <span>terá</span> <br />
              <span className="font-semibold"> acesso:</span>
            </h1>

            <div className="relative max-w-[450px] h-[2px] overflow-hidden my-3">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-transparent animate-glowLine"></div>
            </div>

            <div className="flex flex-col gap-1 items-start font-secondFont">
              Apresentação
              <p className="text-paragraph1">
                <span className="text-red-900">Capítulo 1</span> — O Primeiro
                Passo: Entendendo o Mundo dos Leilões
                <br />
                <span className="text-red-900">Capítulo 2</span> — Por que os
                Leilões são uma Oportunidade de Ouro
                <br />
                <span className="text-red-900">Capítulo 3</span> — Mitos e
                Verdades sobre os Leilões Imobiliários
                <br />
                <span className="text-red-900">Capítulo 4</span> — Como
                Encontrar Leilões e Escolher Boas Oportunidades
                <br />
                <span className="text-red-900">Capítulo 5</span> — Como Analisar
                um Edital (Checklist Básico e Seguro)
                <br />
                <span className="text-red-900">Capítulo 6</span> — Como Funciona
                o Processo de Arrematação
                <br />
                <span className="text-red-900">Capítulo 7</span> — Riscos e
                Cuidados na Arrematação: o que ninguém te conta
                <br />
                <span className="text-red-900">Capítulo 8</span> — O
                Pós-Arrematação: Regularização, Posse e o Início do Seu
                Patrimônio
              </p>
            </div>

            <div className="relative max-w-[450px] h-[2px] overflow-hidden my-3">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-transparent animate-glowLine"></div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex gap-1 font-mainFont">
                <h6 className="text-paragraph3 mt-3">RS</h6>
                <div className="flex">
                  <h1 className="text-title5">26,</h1>
                  <h6 className="text-title3 mt-2">70</h6>
                </div>
                <p className="text-paragraph1 mt-6">À vista</p>
              </div>
              <h5 className="text-paragraph2 font-secondFont flex gap-2 items-center">
                <span>
                  <Gift width={18} />
                </span>
                Preço especial de lançamento!
              </h5>
              <h5 className="text-paragraph2 font-secondFont flex gap-2 items-center">
                <span>
                  <Shield width={18} />
                </span>
                Pagamento rápido e seguro
              </h5>
            </div>

            <div className="py-3 flex justify-center">
              <Button
                label="Aprender os segredos dos leilões!"
                size="small"
                textclassName="text-start text-white "
                color="bg-gradient-to-r from-red-900 to-red-950"
                buttonLink="https://pay.kiwify.com.br/2jENvFn"
              />
            </div>

            {/* IMAGEM CENTRAL FIXA */}
            <div className="absolute bottom-[650px] inset-0 flex justify-center items-center z-10">
              <div className=" bg-primary w-14 h-[60px] p-2 rounded-full ">
                <img
                  src={contentLp01.hero.logoBrasao}
                  alt=""
                  className="w-8 object-contain absolute bottom-[-20px] "
                />
              </div>
            </div>

            {/* BORDA */}
            <div className="absolute border border-primary w-[40%] left-[29%] top-0"></div>
          </div>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}

export default AcessoNovo;
