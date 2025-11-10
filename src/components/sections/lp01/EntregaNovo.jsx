import React from "react";
import SectionArea from "../../sectionElements/SectionArea";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import CardEntrega from "../../cards/CardEntrega";
import SectionHeader from "../../sectionElements/SectionHeader";

function EntregaNovo() {
  return (
    <SectionArea>
      <SectionWrapper>
        <div className="font-mainFont">
          <div className="max-w-[1215px] m-auto px-6 text-center">
            {/* Título principal */}
            {/* <SectionHeader
              sectionHeaderTitle="O que você vai encontrar no ebook:"
              titleColorSet="text-primary"
              miniTitleBgColor={false}
              className="mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px]"
            /> */}
            <h1 className="text-title4 font-mainFont text-primary leading-[30px] mb-12">
              O que você vai{" "}
              <span className="text-backgroundLEscuro">encontrar</span> no
              e-book:
            </h1>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <CardEntrega
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-book-icon lucide-book"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                </svg>
              }
              title="E-book Completo"
              children={
                <p>
                  ✓ Conteúdo exclusivo com passo a passo para você conquistar
                  imóveis em leilão com segurança <br />
                  ✓ Linguagem simples, prática e focada em resultados
                  <br />
                  ✓ Estratégias para avaliar riscos, aproveitar oportunidades e
                  evitar prejuízos
                  <br />
                  Tudo que você precisa para começar do jeito certo!
                </p>
              }
            />

            <CardEntrega
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-user-search-icon lucide-user-search"
                >
                  <circle cx="10" cy="7" r="4" />
                  <path d="M10.3 15H7a4 4 0 0 0-4 4v2" />
                  <circle cx="17" cy="17" r="3" />
                  <path d="m21 21-1.9-1.9" />
                </svg>
              }
              title="Tira-Dúvidas Exclusivo"
              children={
                <p>
                  ✓ Acesso ao suporte para esclarecimento de dúvidas diretamente
                  na plataforma <br />
                  ✓ Possibilidade de grupo exclusivo no WhatsApp <br />
                  ✓ 30 dias de acompanhamento direto com a especialista
                  <br />
                  Você não estará sozinho(a) nessa jornada!
                </p>
              }
            />

            <CardEntrega
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-circle-dollar-sign-icon lucide-circle-dollar-sign"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                  <path d="M12 18V6" />
                </svg>
              }
              title="Investimento"
              children={
                <p>
                  🔥 Preço especial de lançamento! <br />
                  💰 Apenas R$ 26,70 <br />
                  📌 Pagamento rápido e seguro
                  <br />
                  Um investimento acessível para transformar sua vida e
                  construir patrimônio!{" "}
                </p>
              }
            />
          </div>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}

export default EntregaNovo;
