const CONFIG_CATALOGO_GEO = {
  // Preencha com o ID da planilha principal do catalogo.
  SPREADSHEET_ID: 'COLE_AQUI_O_ID_DA_PLANILHA',
  ABA_BASES: 'BASES',
  ABA_SOFTWARES: 'SOFTWARES',
  TITULO_WEBAPP: 'Catalogo de Bases e Ferramentas Geoespaciais'
};

function doGet(e) {
  return HtmlService
    .createHtmlOutputFromFile('Index')
    .setTitle(CONFIG_CATALOGO_GEO.TITULO_WEBAPP)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function obterCatalogo() {
  const ss = SpreadsheetApp.openById(CONFIG_CATALOGO_GEO.SPREADSHEET_ID);

  return {
    bases: lerAbaComoObjetos_(ss, CONFIG_CATALOGO_GEO.ABA_BASES),
    softwares: lerAbaComoObjetos_(ss, CONFIG_CATALOGO_GEO.ABA_SOFTWARES)
  };
}

function lerAbaComoObjetos_(ss, nomeAba) {
  const sh = ss.getSheetByName(nomeAba);

  if (!sh) {
    throw new Error('A aba "' + nomeAba + '" nao foi encontrada.');
  }

  const values = sh.getDataRange().getDisplayValues();

  if (values.length < 2) {
    return [];
  }

  const headers = values[0].map(normalizarCabecalho_);
  const linhas = values.slice(1);

  return linhas
    .filter(function (linha) {
      return linha.some(function (celula) {
        return String(celula || '').trim() !== '';
      });
    })
    .map(function (linha) {
      const obj = {};

      headers.forEach(function (header, index) {
        if (!header) return;
        obj[header] = linha[index] || '';
      });

      return obj;
    });
}

function normalizarCabecalho_(texto) {
  return String(texto || '')
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_]/g, '');
}
