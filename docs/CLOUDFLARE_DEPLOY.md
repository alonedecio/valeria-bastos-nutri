# Cloudflare Workers Builds — configuração do deploy

## Sintoma
O deploy executa `npx wrangler deploy` e falha:

```
The directory specified by the "assets.directory" field in your configuration file does not exist: /opt/buildhome/repo/dist
```

## Causa
O `wrangler.jsonc` configura `assets.directory: "./dist"`. Essa pasta **não fica versionada** e deve ser gerada antes do deploy, pelo script `npm run build` (`node scripts/build.mjs`).

Os logs mostram instalação com Bun e deploy direto com Wrangler, **sem execução de build entre eles**.

## Corrigir no painel Cloudflare
1. Workers & Pages → selecione o Worker → **Settings → Builds**.
2. **Build command:** `npm run build`
3. **Deploy command:** `npx wrangler deploy`
4. **Root directory:** raiz do repositório (valor padrão, sem apontar para `dist`)
5. **Production branch:** `main`
6. Salve e **Retry** no build com falha.

**Alternativa equivalente:** deixar o Build command vazio e usar Deploy command `npm run deploy`, porque `package.json` define `deploy` como `npm run build && wrangler deploy`.

Não use ambas as opções ao mesmo tempo, pois isso recompila desnecessariamente.

## Verificação local
```bash
npm install
npm run build
test -f dist/index.html
test -f dist/treino-e-rotina/index.html
npx wrangler deploy
```
Apenas o último comando publica.

## O que esperar nos novos logs
- `Executing build command: npm run build` (ou `npm run deploy`, se escolheu a alternativa).
- `Site estático preparado em dist/`
- A seguir `wrangler deploy`, que lê `wrangler.jsonc` e publica o conteúdo de `dist/`.

## Arquitetura do projeto
`/treino-e-rotina/` é uma landing independente. Não existe catálogo de landings e não deve haver links entre materiais. O diretório `dist` inclui a raiz neutra, a rota da landing, `assets/` e `shared/`.

**Importante:** a branch `main` contém o piloto V1. A revisão de copy e fotografia V2 ainda não foi incorporada ao repositório. Resolver o build não significa publicar automaticamente a V2.

Fonte: [Cloudflare Workers Builds — Configuration](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/).
