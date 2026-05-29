# Catálogo Geo — Registro dos scripts do Apps Script

Este repositório mantém o registro dos scripts utilizados no **Catálogo de Bases e Ferramentas Geoespaciais**, publicado em Google Sites e operado com Google Apps Script e Google Sheets.

Site oficial do catálogo:

https://sites.google.com/cja.ufsb.edu.br/catalogogeo/catálogo-de-bases-geoespaciais

Página GitHub Pages deste repositório:

https://adinailson88.github.io/catalogo-geo/

A página do GitHub Pages não será usada como página de divulgação própria. Ela funciona apenas como redirecionamento para o site oficial no Google Sites.

## Finalidade do repositório

Este repositório serve para registrar, versionar e documentar os scripts usados no projeto, especialmente:

- HTML do catálogo publicado via Apps Script;
- funções do Apps Script para leitura da planilha;
- funções de menu no Google Sheets;
- scripts auxiliares de imagens/logos;
- scripts auxiliares de formulário de contribuições;
- documentação técnica do funcionamento.

## Arquitetura adotada

```text
Google Sheets
├── BASES
├── SOFTWARES
├── IMAGENS
└── CONFIG_SITE

Google Apps Script
├── Code.gs
├── Menu.gs
├── Imagens.gs
├── Formulario.gs
└── Index.html

Google Sites
└── Página oficial de divulgação e acesso ao catálogo

GitHub
└── Registro e versionamento dos scripts utilizados
```

## Observação técnica

O HTML funcional do catálogo depende de `google.script.run` para chamar funções do Apps Script e carregar os dados da planilha. Por isso, ele deve ser executado no ambiente do Google Apps Script, e não diretamente como página estática do GitHub Pages.

## Responsável

Desenvolvido e mantido por **Adinailson Guimarães**.

Contato: adinailson88@gmail.com
