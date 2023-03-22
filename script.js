// Define o arquivo JSON
const dados = [
  {
    nome: "DETRAN-AC",
    image: "./imagens/AC.png",
    url: "https://www.ac.getran.com.br/site/apps/veiculo/consulta/filtro-consulta-veiculo.jsp",
  },
  {
    nome: "DETRAN/AL",
    image: "./imagens/AL.png",
    url: "https://www.detran.al.gov.br/veiculos/consulta-veiculo/menu_lateral",
  },
  {
    nome: "DETRAN/AP",
    image: "./imagens/AP.png",
    url: "http://www.detran.ap.gov.br/detranap/veiculo/consulta-de-veiculos/",
  },
  {
    nome: "DETRAN/AM",
    image: "./imagens/AM.png",
    url: "https://digital.detran.am.gov.br/#focoMenu",
  },
  {
    nome: "DETRAN/BA",
    image: "./imagens/BA.png",
    url: "https://servicos.detran.ba.gov.br/",
  },
  {
    nome: "DETRAN/DF",
    image: "./imagens/DF.png",
    url: "https://getran.detran.df.gov.br/site/veiculos/consultas/filtroplacarenavam-consultaveiculo.jsp",
  },
  {
    nome: "DETRAN/ES",
    image: "./imagens/ES.png",
    url: "https://publicodetran.es.gov.br/NovoConsultaVeiculoES.asp",
  },
  {
    nome: "DETRAN/GO",
    image: "./imagens/GO.png",
    url: "https://www.detran.go.gov.br/psw/#/pages/pagina-inicial",
  },
  {
    nome: "DETRAN/MA",
    image: "./imagens/MA.png",
    url: "https://portal.detrannet.detran.ma.gov.br/Veiculo/Veiculos.cshtml",
  },
  {
    nome: "DETRAN/MT",
    image: "./imagens/MT.png",
    url: "http://www.mt.gov.br/detran-consulta-veiculo",
  },
  {
    nome: "DETRAN/MS",
    image: "./imagens/MS.png",
    url: "http://www.detran.ms.gov.br/consulta-de-debitos/",
  },
  {
    nome: "DETRAN/MG",
    image: "./imagens/MG.png",
    url: "https://www.detran.mg.gov.br/veiculos/situacao-do-veiculo/consultar-situacao-do-veiculo",
  },
  {
    nome: "DETRAN/PB",
    image: "./imagens/PB.png",
    url: "https://detran.pb.gov.br/formularios/consultar-veiculos",
  },
  {
    nome: "DETRAN/PR",
    image: "./imagens/PR.png",
    url: "https://www.extratodebito.detran.pr.gov.br/detranextratos/geraExtrato.do?action=iniciarProcesso",
  },
  {
    nome: "DETRAN/PE",
    image: "./imagens/PE.png",
    url: "https://www.detran.pe.gov.br/veiculos",
  },
  {
    nome: "DETRAN/PI",
    image: "./imagens/PI.png",
    url: "http://taxas.detran.pi.gov.br/licenciamento/index.jsf",
  },
  {
    nome: "DETRAN/RJ",
    image: "./imagens/RJ.png",
    url: "http://www.detran.rj.gov.br/_monta_aplicacoes.asp?cod=16&tipo=consulta_multa",
  },
  {
    nome: "DETRAN/RN",
    image: "./imagens/RN.png",
    url: "http://www.detran.rn.gov.br/",
  },
  {
    nome: "DETRAN/RS",
    image: "./imagens/RS.png",
    url: "https://www.portaldetransito.rs.gov.br/dtw2/app/servico/vei/consulta-veiculo-form.xhtml",
  },
  {
    nome: "DETRAN/RO",
    image: "./imagens/RO.png",
    url: "https://consulta.detran.ro.gov.br/CentralDeConsultasInternet/Software/ViewConsultaVeiculos.aspx",
  },
  {
    nome: "DETRAN/RR",
    image: "./imagens/RR.png",
    url: "https://www.rr.getran.com.br/site/apps/veiculo/filtroplacarenavam-consultaveiculo.jsp",
  },
  {
    nome: "DETRAN/SC",
    image: "./imagens/SC.png",
    url: "http://www.detran.sc.gov.br/informacoes/veiculos",
  },
  {
    nome: "DETRAN/SP",
    image: "./imagens/SP.png",
    url: "https://www.ipva.fazenda.sp.gov.br/IPVANET_Consulta/Consulta.aspx",
  },
  {
    nome: "DETRAN/TO",
    image: "./imagens/TO.png",
    url: "https://www.to.gov.br/detran/veiculos",
  },
];

// Obtém a referência da tabela
const tabela = document.getElementById("tabela");

tabela.classList.add("table");
tabela.classList.add("table-responsive");

// Cria as células da tabela com base nos dados do JSON
dados.forEach((item) => {
  const linha = document.createElement("tr");

  const nome = document.createElement("td");
  const link = document.createElement("a");
  link.href = item.url;
  link.textContent = item.nome;
  link.target = "_blank"; // Abre o link em outra janela
  nome.appendChild(link);

  const url = document.createElement("td");
  url.textContent = item.url;

  const imagem = document.createElement("img");
  imagem.src = item.image;
  imagem.alt = item.nome;

  imagem.width = 50; // Define o tamanho da imagem

  const flag = document.createElement("td");
  flag.classList.add("flag");
  flag.classList.add(item.nome.toLowerCase()); // Adiciona classe para o país
  flag.appendChild(imagem);

  linha.appendChild(nome);
  linha.appendChild(flag);

  tabela.appendChild(linha);
});

const inputBusca = document.getElementById("busca");

inputBusca.addEventListener("input", function () {
  const termoBusca = inputBusca.value.toLowerCase().trim();

  for (let i = 1; i < tabela.rows.length; i++) {
    const nomeDetran = tabela.rows[i].cells[0].textContent.toLowerCase();
    if (nomeDetran.includes(termoBusca)) {
      tabela.rows[i].style.display = "";
    } else {
      tabela.rows[i].style.display = "none";
    }
  }
});
