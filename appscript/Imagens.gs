/*
  Imagens.gs

  Registro do script usado no Apps Script para processar imagens/logos do Catalogo Geo.

  Funcao operacional no Apps Script:
  - ler a aba IMAGENS;
  - baixar a imagem indicada em url_origem_imagem;
  - salvar na pasta do Google Drive;
  - preencher url_drive_final;
  - atualizar imagem_url, fonte_imagem e credito_imagem nas abas BASES e SOFTWARES.

  Observacao:
  A versao operacional completa deve permanecer no projeto Apps Script da planilha.
  Este arquivo no GitHub funciona como registro tecnico e controle de arquitetura.
*/

const CONFIG_IMAGENS_CATALOGO = {
  PASTA_IMAGENS_ID: 'COLE_AQUI_O_ID_DA_PASTA_DE_IMAGENS',
  ABA_IMAGENS: 'IMAGENS',
  TAMANHO_THUMBNAIL: 'w400'
};

function processarImagensCatalogoGeo() {
  throw new Error('Script operacional completo registrado no Apps Script da planilha. Este arquivo e apenas referencia de versionamento.');
}

function reprocessarTodasImagensCatalogoGeo() {
  throw new Error('Script operacional completo registrado no Apps Script da planilha. Este arquivo e apenas referencia de versionamento.');
}
