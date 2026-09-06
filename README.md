# Atratora Kids

Aplicativo educacional infantil multilíngue e local-first para aprendizagem através da associação entre:
- imagem;
- palavra;
- pronúncia;
- sons;
- interação.

**Status: Alpha — v0.1.0**

*Nota: Os emojis atuais são placeholders temporários para as ilustrações visuais finais. O projeto atualmente não é considerado production-ready.*

## Sobre

Atratora Kids é uma plataforma educacional segura e local-first focada no desenvolvimento infantil por meio de jogos e exploração sensorial. Projetada com foco total na privacidade (sem contas, sem backend e sem trackers), a aplicação roda inteiramente no dispositivo da criança, oferecendo uma experiência fluida mesmo offline.

## Modalidades

- **Alfabeto**: Associação de letras e pronúncia.
- **Números**: Contagem e representação numérica.
- **Animais**: Nomes e sons de animais.
- **Brinquedos**: Objetos lúdicos e vocabulário do dia a dia.

## Idiomas

- Português (Brasil)
- English
- Español

## Recursos

- **Progresso Local**: Acompanhamento da jornada de aprendizado do usuário diretamente no dispositivo.
- **Painel dos Responsáveis**: Ambiente dedicado para monitorar a interação da criança.
- **Áudio Nativo**: Síntese de voz e efeitos sonoros usando APIs do navegador para máxima performance.
- **Teclado Virtual**: Interface interativa adaptada para o público infantil.
- **Tracing (Traçado)**: Exercícios motores de caligrafia (letras e números).

## Tecnologias

- **Frontend**: React, TypeScript, Vite
- **Estilização**: Vanilla CSS (Tokens de Design Customizados)
- **APIs Nativas**: Web Audio API, Web Speech API (SpeechSynthesis)
- **PWA**: Suporte completo offline via Service Workers

## Como executar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/antoniomoraes85/atratora-kids.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## Testes

Para rodar os testes unitários via Vitest:

```bash
npm test
```

## Build

Para gerar os arquivos estáticos de produção:

```bash
npm run build
```

## PWA

O aplicativo suporta instalação como um Progressive Web App (PWA). Em navegadores compatíveis ou sistemas móveis (iOS/Android), os usuários podem "Adicionar à Tela Inicial" para uma experiência nativa. O Service Worker garante cache eficiente de assets essenciais.

## Privacidade

O Atratora Kids é construído sob uma forte premissa de privacidade (Privacy-by-Design):
- Não coleta dados pessoais.
- Não possui analytics, cookies ou trackers embutidos.
- Todo o progresso e as interações são salvos via `localStorage`.
- Não se conecta a nenhum backend para sincronização em nuvem.

Consulte o arquivo `ASSETS_LICENSES.md` para mais informações.

## Assets

Todas as atribuições e licenças dos recursos (visuais e sonoros) encontram-se documentadas em `ASSETS_LICENSES.md`.

## Estado do projeto

Este repositório encontra-se em fase de testes fechada (**Alpha — v0.1.0**). Pode haver quebras de layout, falhas em dispositivos legados ou alterações abruptas de dados salvos.

## Limitações atuais

- A consistência do **SpeechSynthesis** pode variar drasticamente entre navegadores e sistemas operacionais diferentes, bem como depender da disponibilidade das vozes instaladas localmente pelo usuário.
- O funcionamento em modo offline (PWA) é confiável, porém a síntese de voz (TTS) em alguns dispositivos móveis pode exigir conexão com a internet nativamente do sistema para processamento neural, fugindo ao controle do aplicativo.
- Emojis são placeholders.

## Roadmap

- Substituição dos emojis por artes customizadas.
- Melhoria no suporte multitoque no componente de Tracing.
- Inclusão de novas modalidades (Cores, Formas, Instrumentos Musicais).

## Licença e marca

O código-fonte pode estar sujeito a licenciamentos abertos específicos descritos em `LICENSE`. A identidade visual (logotipos "Atratora Kids") e artes proprietárias pertencem exclusivamente ao projeto original e não podem ser redistribuídas comercialmente sem autorização.
