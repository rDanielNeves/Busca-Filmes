# 🎬 BuscarFilmes

Aplicação web para buscar filmes e séries em tempo real, consultar detalhes completos (sinopse, elenco, nota IMDb) e navegar entre páginas de resultados — com um visual inspirado em streamings.

🔗 **Acesse:** [buscafilmes-pi.vercel.app](https://buscafilmes-pi.vercel.app/)

---

## ✨ Funcionalidades

| Recurso | Descrição |
|---|---|
| 🔍 Busca inteligente | Busca por título, via botão ou tecla Enter |
| 📄 Paginação | Navegação entre páginas de resultados da API |
| 🗂️ Modal de detalhes | Sinopse, elenco e nota IMDb ao clicar em um card |
| 📊 Ordenação | Resultados organizados do mais recente ao mais antigo |
| ⏳ Loading state | Feedback visual durante o carregamento |
| ⚠️ Tratamento de erros | Mensagens claras quando nada é encontrado |
| 📱 Design responsivo | Grid fluido com `clamp()`, sem frameworks CSS |
| 🕳️ Empty state | Tela inicial amigável antes da primeira busca |

---

## 🛠️ Tecnologias

- **[React](https://react.dev/)** — biblioteca para construção da interface
- **[Vite](https://vitejs.dev/)** — build tool e servidor de desenvolvimento
- **[OMDb API](https://www.omdbapi.com/)** — fonte dos dados de filmes e séries
- **CSS puro** — Grid, Flexbox e `clamp()` para responsividade fluida

---

## 📚 O que aprendi

Este foi meu primeiro projeto consumindo uma API externa em React, construído do zero como preparação para integrar o front-end de um trabalho em grupo na faculdade. Principais conceitos aplicados na prática:

- **Hooks:** `useState` para gerenciamento de estado e `useEffect` para sincronizar buscas com mudanças de página
- **Requisições assíncronas:** `fetch` + `async/await`, incluindo uma segunda chamada de API para detalhes sob demanda
- **Renderização condicional:** listas dinâmicas com `.map()`, estados de erro, loading e vazio
- **Depuração real:** identifiquei e resolvi um bug causado por uma extensão do navegador interferindo no DOM controlado pelo React
- **Deploy:** publicação via Vercel, com deploy contínuo a partir do GitHub

---

Feito por [Daniel Neves](https://github.com/rDanielNeves) 👋