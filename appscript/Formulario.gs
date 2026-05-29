const CONFIG_FORMULARIO_CATALOGO = {
  PASTA_DESTINO_ID: 'COLE_AQUI_O_ID_DA_PASTA_DESTINO',
  PLANILHA_RESPOSTAS_ID: 'COLE_AQUI_O_ID_DA_PLANILHA_DE_RESPOSTAS',
  ABA_CONFIG: 'CONFIG_SITE',
  TITULO_FORMULARIO: 'Contribuicoes para o Catalogo Geo'
};

function criarFormularioCatalogoGeo() {
  const ssPrincipal = SpreadsheetApp.getActiveSpreadsheet();
  const pastaDestino = DriveApp.getFolderById(CONFIG_FORMULARIO_CATALOGO.PASTA_DESTINO_ID);
  const ssRespostas = SpreadsheetApp.openById(CONFIG_FORMULARIO_CATALOGO.PLANILHA_RESPOSTAS_ID);

  const form = FormApp.create(CONFIG_FORMULARIO_CATALOGO.TITULO_FORMULARIO);

  form.setTitle(CONFIG_FORMULARIO_CATALOGO.TITULO_FORMULARIO);
  form.setDescription('Use este formulario para enviar sugestoes, criticas, elogios, correcoes, indicacao de novas bases de dados, softwares, aplicativos ou outras contribuicoes para melhoria do Catalogo Geo.');
  form.setCollectEmail(false);
  form.setAllowResponseEdits(false);
  form.setAcceptingResponses(true);
  form.setConfirmationMessage('Sua contribuicao foi registrada. Obrigado por colaborar com a melhoria do Catalogo Geo.');

  form.addMultipleChoiceItem()
    .setTitle('Tipo de contribuicao')
    .setChoiceValues([
      'Sugestao',
      'Critica',
      'Elogio',
      'Correcao de informacao',
      'Indicacao de nova base de dados',
      'Indicacao de software/aplicativo',
      'Problema tecnico no site',
      'Outro'
    ])
    .setRequired(true);

  form.addTextItem().setTitle('Nome').setHelpText('Campo opcional.').setRequired(false);
  form.addTextItem().setTitle('E-mail para retorno').setHelpText('Campo opcional. Preencha apenas se desejar receber retorno.').setRequired(false);
  form.addTextItem().setTitle('Assunto').setHelpText('Resumo curto da contribuicao.').setRequired(true);
  form.addParagraphTextItem().setTitle('Descricao da contribuicao').setHelpText('Descreva a sugestao, critica, elogio, correcao ou indicacao de base/software.').setRequired(true);
  form.addTextItem().setTitle('Link relacionado').setHelpText('Informe um link, caso sua contribuicao envolva uma base, software, portal, artigo, documento ou pagina especifica.').setRequired(false);
  form.addMultipleChoiceItem().setTitle('Deseja receber retorno?').setChoiceValues(['Sim', 'Nao']).setRequired(false);
  form.addParagraphTextItem().setTitle('Observacoes adicionais').setHelpText('Campo opcional.').setRequired(false);

  form.setDestination(FormApp.DestinationType.SPREADSHEET, ssRespostas.getId());

  const arquivoForm = DriveApp.getFileById(form.getId());
  const arquivoRespostas = DriveApp.getFileById(ssRespostas.getId());

  pastaDestino.addFile(arquivoForm);
  pastaDestino.addFile(arquivoRespostas);

  removerDaRaizSePossivel_(arquivoForm);
  removerDaRaizSePossivel_(arquivoRespostas);

  const urlFormularioPublico = form.getPublishedUrl();
  const urlFormularioEdicao = form.getEditUrl();
  const urlPlanilhaRespostas = ssRespostas.getUrl();

  gravarLinksFormularioNaPlanilha_(ssPrincipal, urlFormularioPublico, urlFormularioEdicao, urlPlanilhaRespostas);

  SpreadsheetApp.getUi().alert('Formulario criado com sucesso.\n\nLink publico:\n' + urlFormularioPublico + '\n\nPlanilha de respostas:\n' + urlPlanilhaRespostas);
}

function gravarLinksFormularioNaPlanilha_(ssPrincipal, urlPublico, urlEdicao, urlRespostas) {
  let sh = ssPrincipal.getSheetByName(CONFIG_FORMULARIO_CATALOGO.ABA_CONFIG);

  if (!sh) {
    sh = ssPrincipal.insertSheet(CONFIG_FORMULARIO_CATALOGO.ABA_CONFIG);
  }

  sh.clear();

  const dados = [
    ['chave', 'valor', 'observacao'],
    ['formulario_contribuicoes_url', urlPublico, 'Link publico para inserir no rodape do site.'],
    ['formulario_contribuicoes_edicao_url', urlEdicao, 'Link administrativo para editar o formulario.'],
    ['planilha_respostas_formulario_url', urlRespostas, 'Planilha onde as respostas serao armazenadas.'],
    ['ultima_atualizacao', new Date(), 'Data de criacao/atualizacao da configuracao.']
  ];

  sh.getRange(1, 1, dados.length, dados[0].length).setValues(dados);
  sh.getRange(1, 1, 1, 3).setFontWeight('bold').setBackground('#17324d').setFontColor('#ffffff').setHorizontalAlignment('center');
  sh.autoResizeColumns(1, 3);
}

function removerDaRaizSePossivel_(arquivo) {
  try {
    DriveApp.getRootFolder().removeFile(arquivo);
  } catch (erro) {
    // Nao interrompe o processo se nao conseguir remover da raiz.
  }
}
