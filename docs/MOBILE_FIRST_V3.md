# Otimização mobile-first — Landing 01 (27/10/2026)

Objetivo: priorizar visitas por celulares vindas de Instagram e WhatsApp, preservando identidade editorial.
Mudanças: abertura mais compacta, fotografia visível na primeira tela, títulos com quebra e escala fluida, redução de espaços vazios e cenas longas, botões com área de toque confortável, barreira contra overflow horizontal, metadados de dimensões das imagens, redução de movimentos, conteúdo visível quando JS falha, CTA discreto de WhatsApp durante cenas narrativas (oculto no quiz), cache-bust de CSS/JS.
Arquivos: treino-e-rotina/index.html, shared/brand.css, shared/motion.js.
Validação local em navegador de teste: larguras 320, 360, 390, 430, 768 e 1366 px; sem overflow horizontal; interação de duas etapas funcional; teste de preferências de movimento; fontes externas foram removidas apenas na prévia offline de validação.
Pendências: medir Core Web Vitals com público real, conferir fontes pela rede e testar também iOS Safari e Android Chrome reais. O GitHub contém as mudanças; deploy Cloudflare deve ser confirmado separadamente.
Observação: fotos continuam conceituais e conteúdo educativo requer aprovação final da nutricionista.