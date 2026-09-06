# Licenças e Atribuições de Assets

Este documento lista todas as licenças dos recursos multimídia (imagens, ícones e sons) utilizados no projeto **Atratora Kids**.

## Identidade Visual e Logo
- **Atratora Kids Logo**: Proprietária e exclusiva do projeto. Os recortes de logotipo e favicon presentes em `public/icons` e `src/assets/brand` derivam da imagem original oficial e não podem ser utilizados sem autorização.

## Imagens e Ilustrações de Conteúdo (Animais, Brinquedos, Alfabeto, Números)
- **Emojis Nativos do Sistema**: Utilizados temporariamente como representação visual para as modalidades de aprendizagem. Eles pertencem ao respectivo sistema operacional do usuário (Apple, Google, Microsoft, Twitter, etc.) e são exibidos nativamente pelo navegador sem necessidade de distribuição de fonte customizada.

## Efeitos Sonoros e Áudio
- O aplicativo faz uso intenso da API nativa de **Web Audio API** para gerar os efeitos de som de navegação, sucesso (arpejos) e erro (oscilador) algoritmicamente em tempo de execução, portanto **não há arquivos mp3 protegidos por direitos autorais sendo distribuídos para o sistema de UI.**
- O suporte para áudios locais nos itens através de `AudioService.playAsset()` está implementado. Quando adicionados em atualizações futuras na pasta `public/audio/`, as licenças desses arquivos deverão ser discriminadas nesta seção (recomendado: uso de áudios licenciados como CC0 ou royalty-free providenciados pelo cliente).
- **Text-to-Speech (Vozes)**: Utiliza a API `window.speechSynthesis` nativa do navegador, sem custos adicionais de licenciamento, e cujas vozes e distribuição pertencem ao motor instalado no dispositivo do usuário (ex: Siri no iOS, Google TTS no Android, Narrator no Windows).

## Políticas de Privacidade
O aplicativo armazena o progresso localmente (sem conta, sem login e sem backend). Nenhum analytics, tracker ou telemetria está implementado, não havendo envio intencional de progresso infantil ao servidor.

O uso da API de síntese de voz (Text-to-Speech) depende do navegador, sistema operacional e vozes instaladas. Seu funcionamento offline não é garantido universalmente.

Quaisquer requisitos legais e de privacidade (como COPPA, GDPR-K, e LGPD) deverão ser reavaliados antes de qualquer distribuição comercial ou coleta futura de dados.
