# Valéria Bastos — Experiências Digitais

Um único repositório, experiências acessadas por URLs independentes, identidade e scripts compartilhados. Sem catálogo ou links internos entre landings.

## Estrutura
- `/treino-e-rotina/` — primeiro piloto (educativo, protótipo)
- `/shared/brand.css` — tokens e componentes estilísticos compartilhados
- `/shared/motion.js` — progressão narrativa, controle de movimento, interação educativa
- `/assets/` — logos oficiais e fotografias conceituais provisórias
- `/` — página neutra, sem listagem de experiências

## Hospedagem na Cloudflare
Este protótipo pode ser hospedado como site estático (Cloudflare Workers Static Assets / Cloudflare Pages). Defina a pasta pública de publicação com arquivos do site na raiz. Para Workers Static Assets, configure `assets.directory` com a saída da compilação/cópia; não use `single-page-application` para essa versão multipágina. Rotas futuras usam pastas próprias.

## Atenção
- Link não divulgado não significa acesso privado: quem conhecer ou descobrir uma URL pode abri-la.
- Para pacientes, adicionar autenticação antes de publicar conteúdos restritos.
- SEO intencionalmente `noindex` neste piloto. Robots não é mecanismo de segurança.
- Não há coleta de contatos, rastreamento ou oferta comercial configurada.
- Imagens conceituais geradas anteriormente; substituir por fotos aprovadas antes de campanha pública.
- Textos educativos precisam de validação final da nutricionista; não são prescrição individual.
- Motion respeita `prefers-reduced-motion`; controle manual disponível.

## Fontes de fundamentação
- Ministério da Saúde, Guia Alimentar para a População Brasileira, 2a ed.
- ISSN Position Stand: protein and exercise (2017).
- ISSN Position Stand: diets for body weight reduction (publicado online em outubro/2026).
- W3C, WCAG 2.2, Animation from Interactions.

## Próximos incrementos
- Conectar endereço/WhatsApp comercial após confirmação e revisão da Valéria.
- Substituir fotos de conceito e revisar a identidade por dispositivo.
- Migrar a biblioteca de interações para React + TS quando for vantajoso para a diversidade de experiências; manter os mesmos tokens e rotas.
