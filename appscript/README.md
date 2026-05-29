# Scripts do Google Apps Script

Esta pasta registra a estrutura dos scripts usados no Catalogo Geo.

## Ambiente de execucao

Os arquivos devem ser usados no projeto Apps Script vinculado a planilha principal do catalogo.

O HTML funcional do catalogo nao deve ser executado diretamente pelo GitHub Pages, pois depende de google.script.run para carregar dados da planilha por meio do Apps Script.

## Estrutura recomendada

```text
Code.gs
Menu.gs
Imagens.gs
Formulario.gs
Index.html
```

## Funcao de cada arquivo

| Arquivo | Funcao |
|---|---|
| Code.gs | Publicacao do Web App e leitura das abas da planilha. |
| Menu.gs | Criacao do menu superior na planilha. |
| Imagens.gs | Processamento de imagens/logos, salvamento no Drive e atualizacao das colunas imagem_url, fonte_imagem e credito_imagem. |
| Formulario.gs | Criacao do formulario de contribuicoes e vinculo com planilha de respostas. |
| Index.html | Interface visual do catalogo publicada via Apps Script. |

## Site oficial

https://sites.google.com/cja.ufsb.edu.br/catalogogeo/catálogo-de-bases-geoespaciais
