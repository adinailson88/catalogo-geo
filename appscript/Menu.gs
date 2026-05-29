const URL_CATALOGO_GEO = 'https://sites.google.com/cja.ufsb.edu.br/catalogogeo/cat%C3%A1logo-de-bases-geoespaciais';

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Catalogo Geo')
    .addItem('Abrir site', 'abrirCatalogoGeo')
    .addSeparator()
    .addItem('Processar imagens', 'processarImagensCatalogoGeo')
    .addItem('Reprocessar todas as imagens', 'reprocessarTodasImagensCatalogoGeo')
    .addSeparator()
    .addItem('Criar formulario de contribuicoes', 'criarFormularioCatalogoGeo')
    .addToUi();
}

function abrirCatalogoGeo() {
  const html = HtmlService.createHtmlOutput(`
    <script>
      window.open('${URL_CATALOGO_GEO}', '_blank');
      google.script.host.close();
    </script>

    <div style="font-family: Arial, sans-serif; padding: 16px;">
      <p>Se o site nao abrir automaticamente, clique abaixo:</p>
      <a href="${URL_CATALOGO_GEO}" target="_blank">
        Abrir Catalogo Geo
      </a>
    </div>
  `)
    .setWidth(340)
    .setHeight(130);

  SpreadsheetApp.getUi().showModalDialog(html, 'Catalogo Geo');
}
