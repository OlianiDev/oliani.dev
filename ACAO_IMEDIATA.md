# Checklist: Próximas Ações para Indexação

## 🎯 Ações Imediatas (Hoje)

### 1. **Deploy do Site**
```
- Fazer push do código para produção
- Acessar https://oliani.dev (confirmar que está online)
- Verificar que robots.txt está acessível:
  → https://oliani.dev/robots.txt
  → https://oliani.dev/sitemap.xml
```

### 2. **Google Search Console** (30 minutos)
```
1. Ir para: https://search.google.com/search-console
2. Clicar em "+ Adicionar propriedade"
3. Selecionar "URL prefix"
4. Digitar: https://oliani.dev
5. Verificar propriedade (via arquivo HTML na raiz)
6. Após verificação:
   - Ir para Sitemaps
   - Clicar "Enviar um novo sitemap"
   - Digitar: sitemap.xml
   - Enviar
7. Monitorar "Status da indexação"
```

### 3. **Google Analytics** (20 minutos)
```
1. Ir para: https://analytics.google.com
2. Clicar em "Criar"
3. Preencher dados:
   - Nome da conta: Oliani
   - Nome da propriedade: oliani.dev
   - Fuso horário: São Paulo (UTC-3)
   - Moeda: BRL
4. Aceitar termos
5. Copiar o ID de medição (formato: G-XXXXXXXXXX)
6. [DEPOIS] Adicionar tag no layout.tsx (vejo se precisa ajustar)
```

### 4. **Bing Webmaster Tools** (opcional, mas recomendado)
```
1. Ir para: https://www.bing.com/webmasters
2. Clicar em "Add"
3. Digitar URL: https://oliani.dev
4. Importar de Google Search Console (mais fácil)
5. Submeter sitemap
```

---

## 🖼️ Atividade Crítica: Criar Imagens

### OG Image (Obrigatório)
```
Tamanho: 1200px × 630px
Formato: PNG ou JPG
Conteúdo sugerido:
  - Logo da Oliani
  - Texto: "Oliani - Agência Digital"
  - Gradiente ou background bacana
  
Salvar em: public/og-image.png
```

### Favicon (Recomendado)
```
Tamanho: 32px × 32px (ou 64px × 64px)
Formato: PNG com fundo transparente
Salvar em: public/favicon.ico
```

### Apple Touch Icon (Mobile)
```
Tamanho: 180px × 180px
Formato: PNG
Salvar em: public/apple-touch-icon.png

Adiciona automaticamente no iOS
```

---

## 📞 Links Importantes para Testar

Depois que publicar, testar em:

1. **Teste de compatibilidade mobile**
   - https://search.google.com/test/mobile-friendly

2. **Teste de estrutura de dados**
   - https://search.google.com/test/rich-results

3. **PageSpeed Insights**
   - https://pagespeed.web.dev/

4. **Teste de URL**
   - https://search.google.com/test/mobile-friendly
   - Insira: https://oliani.dev

---

## 📊 Compartilhar no Social (Teste de Preview)

### Testar preview do OG image:

**Facebook:**
```
1. Ir para: https://developers.facebook.com/tools/debug/
2. Colar: https://oliani.dev
3. Clicar "Scrape Again"
4. Ver preview
```

**Twitter:**
```
1. Ir para: https://tweetdeck.twitter.com/ (ou postar normalmente)
2. Cole a URL e veja o preview
3. Confirme que a imagem aparece
```

**LinkedIn:**
```
1. Tente postar a URL
2. Veja se a imagem, título e descrição aparecem correto
```

**WhatsApp:**
```
1. Cole a URL em uma conversa
2. Confirme que mostra preview com imagem
```

---

## ⏱️ Tempo de Indexação Esperado

- **Google**: 24-72 horas para primeira indexação
- **Bing**: 24-48 horas
- **Posicionamento**: 2-4 semanas (depende da concorrência)

**Dica**: Você pode acelerar no GSC indo em:
- Inspecionador de URLs → Pedir indexação

---

## 🔐 Verificação Final

### Antes de considerar pronto:

- [ ] robots.txt está acessível via URL
- [ ] sitemap.xml está acessível via URL
- [ ] All meta tags são renderizadas (ver source code no navegador)
- [ ] Google Search Console mostra propriedade verificada
- [ ] Sitemap foi submetido
- [ ] PageSpeed Insights mostra bom resultado
- [ ] Mobile friendly test passa
- [ ] OG image aparece ao compartilhar
- [ ] SSL/HTTPS está funcionando (🔒 na URL)

---

## 🚀 Performance Recomendada

Após tudo estar online, monitore:

```
Core Web Vitals (alvo):
- Largest Contentful Paint (LCP): < 2.5s ✅ Seu site é rápido
- First Input Delay (FID): < 100ms ✅
- Cumulative Layout Shift (CLS): < 0.1 ✅

Verificar com: https://pagespeed.web.dev/
```

---

## 📝 Ordem Recomendada

```
1. Publicar site em produção
2. Testar robots.txt e sitemap.xml
3. Google Search Console (core)
4. Google Analytics (tracking)
5. Criar imagens OG
6. Bing Webmaster (bônus)
7. Monitorar posições por 4 semanas
```

---

## 💬 Dúvidas Comuns

**P: Quanto tempo leva para aparecer no Google?**
R: Normalmente 24-72 horas após submeter ao GSC.

**P: Preciso de mais conteúdo?**
R: Para um site coming soon, está bom. Adicione mais quando tiver serviços/blog.

**P: Qual keyword focar?**
R: "agência digital", "web design", "desenvolvimento web" + localidade.

**P: Preciso de SSL?**
R: Sim! Google favorece HTTPS. Verifique se seu host já tem.

---

**Status: ✅ SEO Pronto para Indexação**

Próximo: Execute os passos acima! 🚀
