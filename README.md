# Lumilo

Aplicativo educacional infantil multilíngue e local-first para aprendizagem através da associação entre imagem, palavra, pronúncia, sons e interação.

**Slogan:** Aprender é descobrir

**Versão:** 0.1.0 Alpha (Desenvolvimento)
**Desenvolvedora:** Atratora Labs

## Funcionalidades

- **Múltiplos Idiomas:** Suporte integrado e instantâneo para Português (Brasil), English (US) e Español.
- **Modalidades de Aprendizagem:**
  - **Alfabeto:** Letras de A a Z com palavras de exemplo em cada idioma e associações visuais.
  - **Números:** Contagem de 0 a 20 com representação visual em pontos e agrupamentos lógicos.
  - **Animais:** Associação de imagem, nome e som real (recurso em desenvolvimento).
  - **Brinquedos:** Exploração de brinquedos comuns do dia a dia infantil.
- **Áudio Nativo:** Pronúncia das palavras utilizando a API de `SpeechSynthesis` do navegador e efeitos de interface com `Web Audio API`.
- **Experiência Premium:** Design moderno e infantil com paleta de cores alegre, microanimações suaves e profundidade visual (estética 3D/cartoon).
- **Acessibilidade e Responsividade:** Funciona perfeitamente em telas de 360px a 1920px. Suporte para temas de alto contraste, leitores de tela e `prefers-reduced-motion`.
- **Privacidade e Local-First:** Funciona sem criação de conta, sem analytics, sem rastreamento de dados de crianças e totalmente centrado no dispositivo (progresso mantido via `localStorage`).
- **PWA (Progressive Web App):** Instalável no celular, tablet e PC.

## Arquitetura

- **Frontend:** React 19 + TypeScript + Vite.
- **Estilização:** Vanilla CSS (CSS Modules) baseada em design tokens customizados para alto desempenho e modularidade.
- **Gestão de Estado:** React Hooks nativos.
- **Armazenamento:** `localStorage` (via `StorageService`).

## Configuração e Execução Local

### Pré-requisitos
- Node.js (v24 recomendado)
- npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/antoniomoraes85/atratora-kids.git

# Entre no diretório
cd atratora-kids

# Instale as dependências
npm install
```

### Comandos Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila o projeto para produção.
- `npm run typecheck`: Executa a verificação estática do TypeScript.
- `npm run lint`: Executa a análise de código com Oxlint.
- `npm test`: Roda a bateria de testes via Vitest.
- `npm run preview`: Visualiza localmente o build de produção.

## Áudio e Licenças
Veja o arquivo [ASSETS_LICENSES.md](ASSETS_LICENSES.md) para detalhes sobre as fontes de mídia. No momento, o aplicativo não distribui arquivos sonoros de terceiros; a pronúncia é feita pela síntese de voz do sistema operacional.

## Roadmap
- Adicionar sons CC0 reais de animais e brinquedos.
- Melhorias no LetterTracing para dispositivos móveis.
- Relatórios avançados para os pais.
- Expansão do catálogo de idiomas.
