import Button from "../../interactives/Button";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { X, MoveRight } from "lucide-react";

function FooterNovo() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const onClick = () => {
    setModalTitle("Política de Privacidade");

    setModalContent(
      <div className="text-paragraph3 text-secondary">
        <h2>
          <strong>Informações Importantes</strong>
        </h2>
        <p>
          Esta Política de Privacidade descreve como coletamos, utilizamos,
          armazenamos e compartilhamos suas informações pessoais. Em
          conformidade com a Lei Geral de Proteção de Dados (LGPD) - Lei nº
          13.709, de 14 de agosto de 2018,{" "}
          <strong>Thaís Costa - Advocacia e Consultoria Jurídica</strong> se
          compromete a proteger a privacidade e os dados pessoais dos usuários
          de nossos serviços.
        </p>

        <br />

        <h2>
          <strong>Definições</strong>
        </h2>
        <p>
          <strong>Autoridade Nacional de Proteção de Dados (ANPD):</strong>{" "}
          Órgão responsável pela fiscalização e orientação da aplicação da LGPD,
          além da aplicação de sanções administrativas em caso de violações.
        </p>

        <p>
          <strong>Base Legal para Tratamento:</strong> Permissões para o
          tratamento de dados pessoais conforme a LGPD, incluindo consentimento
          do titular, cumprimento de obrigações legais ou regulatórias, execução
          de contratos, análise de crédito e interesses legítimos de{" "}
          <strong>Thaís Costa - Advocacia e Consultoria Jurídica</strong> ou do
          titular.
        </p>

        <p>
          <strong>Consentimento:</strong> Manifestação livre, informada e
          inequívoca pela qual o titular concorda com o tratamento de seus dados
          pessoais para uma finalidade determinada.
        </p>

        <p>
          <strong>Dado Pessoal:</strong> Qualquer dado relacionado à pessoa
          natural identificada ou identificável, tais como: IP, geolocalização,
          nome, RG, CPF, endereço, telefone, conta bancária, dados de veículo,
          dentre outros.
        </p>

        <p>
          <strong>Dado Pessoal Sensível:</strong> Dado pessoal que apresente
          origem racial ou étnica, convicção religiosa, opinião política,
          filiação a sindicato, dado referente à saúde ou à vida sexual, dado
          genético ou biométrico.
        </p>

        <p>
          <strong>Finalidade:</strong> Razão ou motivação para que seja
          realizado o tratamento de dados pessoais.
        </p>

        <p>
          <strong>Legítimo Interesse:</strong> Tratamento de dados realizado
          pelo controlador, em razão de um interesse seu, de outras empresas ou
          da sociedade, sem que o tratamento afete os direitos e liberdades
          individuais do titular.
        </p>

        <p>
          <strong>Lei Geral de Proteção de Dados (LGPD):</strong> Lei nº 13.709,
          de 14 de agosto de 2018.
        </p>

        <p>
          <strong>Livre Acesso:</strong> Direito do titular de ter acesso a
          todas as informações referentes ao tratamento de seus dados pessoais.
        </p>

        <p>
          <strong>Oposição:</strong> Direito do titular de não querer que seu
          dado seja tratado. Esse direito pode ser exercido em determinadas
          situações específicas.
        </p>

        <p>
          <strong>Segurança:</strong> Utilização de medidas técnicas e
          administrativas aptas a proteger os dados pessoais de acessos não
          autorizados e de situações acidentais ou ilícitas de destruição,
          perda, alteração, comunicação ou difusão.
        </p>

        <p>
          <strong>Tratamento:</strong> Toda operação realizada com o dado
          pessoal, tais como: coleta, produção, recepção, classificação,
          utilização, acesso, reprodução, transmissão, distribuição,
          processamento, arquivamento, armazenamento, eliminação, avaliação,
          controle de informação, comunicação, transferência, difusão ou
          extração.
        </p>

        <p>
          <strong>Titular:</strong> Pessoa natural a que se referem os dados
          pessoais que são objeto de tratamento.
        </p>

        <p>
          <strong>Transparência:</strong> Garantia, aos titulares, de
          informações claras, precisas e facilmente acessíveis sobre a
          realização do tratamento e respectivos agentes de tratamento,
          observados os segredos comercial e industrial.
        </p>

        <br />

        <h2>
          <strong>Resumo dos Direitos da Política de Privacidade</strong>
        </h2>
        <p>
          <strong>Minimização de Dados:</strong> Coletamos apenas os dados
          pessoais necessários para a funcionalidade do produto.
        </p>
        <p>
          <strong>Direito dos Titulares:</strong> Garantimos ao usuário o
          direito de acesso, correção e exclusão dos dados tratados.
        </p>
        <p>
          <strong>Prazo de Retenção:</strong> Os dados coletados são tratados
          pelo prazo máximo de 5 anos, e em caso de exclusão de conta do
          usuário, pelo prazo máximo de 1 ano.
        </p>
        <p>
          <strong>Coleta de Dados de Terceiros:</strong> As ferramentas de
          coleta de dados são as indicadas nesta Política.
        </p>

        <br />

        <h2>
          <strong>Introdução</strong>
        </h2>
        <p>
          Temos o compromisso de proteger a privacidade dos usuários de nossos
          Serviços. Esta política se aplica quando atuamos como um controlador
          de dados em relação aos dados pessoais de usuários de nossos Serviços.
        </p>
        <p>
          Nós usamos cookies em nosso site. Na medida em que esses cookies não
          sejam estritamente necessários para a navegação em nosso site e/ou o
          fornecimento de nossos Serviços, solicitaremos que você concorde com o
          uso de cookies quando visitar o nosso site pela primeira vez.
        </p>
        <p>
          Nossos sites incorporam funcionalidades que lhe permitem configurar
          suas preferências sobre seus dados pessoais e sua privacidade, os
          chamados controles de privacidade. Ao usar os controles de
          privacidade, você pode especificar como deseja que{" "}
          <strong>Thaís Costa - Advocacia e Consultoria Jurídica</strong> lide
          com seus dados pessoais.
        </p>
        <p>
          Nesta política, “nós” e “nosso” se referem a{" "}
          <strong>Thaís Costa - Advocacia e Consultoria Jurídica</strong>.
        </p>

        <br />

        <h2>
          <strong>Seus Dados Pessoais e como os Utilizamos</strong>
        </h2>
        <p>
          Podemos tratar dados referentes ao uso dos nossos sites, produtos,
          serviços de nuvem e aplicativos e por meio da utilização destes
          (“Serviços”). O uso de dados pode incluir seu endereço de IP,
          localização geográfica, tipo e versão de navegador, sistema
          operacional, tempo da visita aos nossos sites (“Uso de Dados”), número
          de utilizações dos Serviços, data da visita, dentre outras. A fonte do
          Uso de Dados é Google Analytics. O Uso de Dados pode ser realizado
          para o propósito de análise de uso dos Serviços, produtos e serviços
          de <strong>Thaís Costa - Advocacia e Consultoria Jurídica</strong>. A
          base legal para o tratamento de tais dados é o legítimo interesse de{" "}
          <strong>Thaís Costa - Advocacia e Consultoria Jurídica</strong>, como
          meio de garantir a plena execução e funcionalidades dos Serviços.
        </p>

        <p>
          Podemos tratar os dados de seu cadastro nos Serviços (“Dados de
          Cadastro”). Os cadastros podem incluir nome, endereço de e-mail,
          endereço, CPF, telefone, imagem, foto, áudio, entre outros. Os Dados
          de Cadastro podem ser tratados para fins de operação dos Serviços,
          fornecimento de produtos e serviços, garantia da segurança de nossos
          Serviços, produtos e serviços, manutenção de backup de bases de dados
          e comunicação com nossos clientes, incluindo a disponibilização e
          acesso a todas as funcionalidades dos Serviços. A base legal para o
          tratamento de tais dados é o consentimento.
        </p>

        <p>
          Podemos tratar dados a partir de questionamentos que nos sejam
          enviados em relação a atendimento ao consumidor (“Dados de Relação do
          Consumidor”). Os Dados de Questionamentos do Consumidor podem incluir
          detalhes sobre suas perguntas e problemas com produtos e/ou serviços e
          podem ser tratados para fins de oferta de novos produtos e/ou
          serviços, marketing, atualização de processos de resposta e melhoria
          de atendimento ao consumidor. A base legal para o tratamento de tais
          dados é o legítimo interesse de{" "}
          <strong>Thaís Costa - Advocacia e Consultoria Jurídica</strong> e de
          seus clientes e cumprimento de obrigação legal.
        </p>

        <p>
          Podemos tratar seus dados obtidos a partir de transações financeiras
          realizadas a partir de nossos Serviços, inclusive para aquisição de
          produtos e/ou serviços (“Dados de Transações”). Os Dados de Transações
          podem incluir seu endereço, CPF, dados financeiros, bancários e número
          de cartão de crédito, dentre outros, e são tratados para o
          fornecimento de produtos e/ou serviços, manutenção de arquivos,
          cumprimento de obrigações fiscais. A base legal para o tratamento de
          tais dados é o cumprimento de obrigação legal, especificamente
          legislação fiscal.
        </p>

        <p>
          Podemos tratar seus dados pessoais para o envio de anúncios,
          propagandas e marketing direto, relacionados aos interesses do cliente
          de acordo com suas preferências. A base legal para o tratamento de
          tais dados é o consentimento, bem como legítimo interesse do
          controlador.
        </p>

        <p>
          Em alguns casos, o produto{" "}
          <strong>Thaís Costa - Advocacia e Consultoria Jurídica</strong> poderá
          captar dados de terceiros do ambiente (“Dados de Terceiros”). Os dados
          podem incluir imagens faciais, gravações, áudio, que podem ser
          classificados como dados pessoais, protegidos por lei. A
          responsabilidade pela proteção dos dados de terceiros, captados a
          partir dos produtos de{" "}
          <strong>Thaís Costa - Advocacia e Consultoria Jurídica</strong>, são
          de inteira responsabilidade do usuário, cabendo a este aplicar todos
          os meios necessários para a proteção efetiva dos dados.{" "}
          <strong>Thaís Costa - Advocacia e Consultoria Jurídica</strong> não é
          responsável pelo uso ilegal dos dados coletados por intermédio de seus
          produtos, pois inacessível a gestão dos mesmos.
        </p>

        <br />

        <h2>
          <strong>Transferência de Dados para Terceiros</strong>
        </h2>
        <p>
          Podemos divulgar seus dados pessoais a qualquer membro de nosso grupo
          de empresas (isso significa nossas subsidiárias, nossos controladores
          e todas as suas controladas), na medida do razoavelmente necessário
          para as finalidades informadas e de acordo com a legislação aplicável.
        </p>

        <p>
          Podemos divulgar seus dados pessoais às nossas seguradoras e/ou
          consultores profissionais, na medida do razoavelmente necessário para
          os fins de obter ou manter cobertura de seguro, gerenciar riscos,
          obter aconselhamento profissional ou o ingresso, exercício ou defesa
          em ações administrativas, arbitrais e/ou legais. Ademais, podemos
          divulgar seus dados para nossos fornecedores na medida do
          razoavelmente necessário para lhe fornecer nossos produtos e/ou
          serviços e assegurar a segurança na utilização de nossos serviços.
        </p>

        <p>
          As transações financeiras relacionadas aos nossos serviços e à
          aquisição de nossos produtos e/ou serviços são tratadas por nossos
          provedores de serviços de pagamento, sendo que compartilhamos os dados
          da transação com nossos prestadores de serviços de pagamento apenas na
          extensão necessária para os fins de processar seus pagamentos,
          reembolsar valores e lidar com reclamações e consultas relacionadas a
          essas questões.
        </p>

        <p>
          Além das divulgações específicas de dados pessoais estabelecidas nesta
          Cláusula 4, podemos divulgar seus dados pessoais sempre que tal
          divulgação for necessária para o cumprimento de uma obrigação legal
          e/ou regulatória a qual{" "}
          <strong>Thaís Costa - Advocacia e Consultoria Jurídica</strong> está
          sujeita.
        </p>

        <p>
          <strong>Thaís Costa - Advocacia e Consultoria Jurídica</strong> e
          outras empresas de seu grupo possuem escritórios e instalações em
          outros países, bem como fornecedores em outros países (hospedagem de
          sites, serviços de nuvem, gateways de pagamento, suporte técnico,
          desenvolvimento, modelagem, customização, entre outros). Dessa forma,
          podemos transmitir seus dados para fora do Brasil com vistas aos
          propósitos indicados acima.{" "}
          <strong>Thaís Costa - Advocacia e Consultoria Jurídica</strong> adota
          todas as medidas adequadas e celebra contratos necessários para
          garantir que o tratamento de dados pessoais fora do Brasil seja
          realizado de acordo com a LGPD.
        </p>

        <br />

        <h2>
          <strong>Armazenamento e Deleção de Dados Pessoais</strong>
        </h2>
        <p>
          Os dados pessoais que tratamos para qualquer finalidade não devem ser
          mantidos por mais tempo do que o necessário para tais finalidades.
        </p>

        <p>Reteremos seus dados pessoais da seguinte maneira:</p>
        <ul>
          <li>
            (a) Eventuais dados pessoais, tais como CPF, e-mail, endereço,
            telefone coletados por intermédio do site, serão mantidos por um
            período mínimo de 5 (cinco) anos após a coleta do dado e por um
            período máximo de 10 (dez) anos;
          </li>
          <li>
            (b) Em alguns casos, não é possível especificar com antecedência os
            períodos pelos quais seus dados pessoais serão retidos. Nesses
            casos, determinaremos o período de retenção com base em critérios
            como: (i) existência de lei ou regulação específica; (ii) políticas
            internas de{" "}
            <strong>Thaís Costa - Advocacia e Consultoria Jurídica</strong>;
            (iii) existência de processos judiciais; e (iv) solicitações de
            autoridades governamentais.
          </li>
        </ul>
      </div>
    );

    setVisible(true);
  };
  return (
    <div className="flex flex-col justify-center p-2 items-center">
      <h5 className="text-paragraph3 text-center mt-3">
        Todos os direitos reservados.
      </h5>
      <Button
        className="underline"
        color="bg-transparent"
        onClick={onClick}
        label="Políticas de Privacidade"
        textclassName="text-paragraph3"
        size="small"
        animation={false}
      />
      <Dialog
        className="font-secondFont"
        closeIcon={<X size={20} />}
        header={<span className="text-secondary">{modalTitle}</span>}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "4000px": "641px", "1024px": "641px", "641px": "85vw" }}
      >
        {modalContent}
      </Dialog>
    </div>
  );
}

export default FooterNovo;
