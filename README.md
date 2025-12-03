# Bella Joias - E-commerce

Site de e-commerce moderno desenvolvido com React, Vite e Tailwind CSS v3, seguindo o design system definido em `design.json`.

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool e dev server
- **Tailwind CSS v3** - Framework CSS utility-first
- **React Router** - Roteamento para aplicações React

## 📦 Instalação

```bash
npm install
```

## 🏃 Executar

```bash
npm run dev
```

O servidor de desenvolvimento estará disponível em `http://localhost:5173`

## 🏗️ Build para Produção

```bash
npm run build
```

## 📁 Estrutura do Projeto

```
BellaJoias/
├── src/
│   ├── components/      # Componentes reutilizáveis
│   │   ├── TopBar.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── FilterBar.jsx
│   │   ├── ProductCard.jsx
│   │   └── CategoryCard.jsx
│   ├── pages/          # Páginas da aplicação
│   │   ├── Home.jsx
│   │   ├── ProductDetail.jsx
│   │   └── Checkout.jsx
│   ├── data/           # Dados mockados
│   │   └── products.js
│   ├── App.jsx         # Componente principal
│   ├── main.jsx        # Entry point
│   └── index.css       # Estilos globais e Tailwind
├── design.json         # Sistema de design
├── tailwind.config.js  # Configuração do Tailwind
└── package.json
```

## 🎨 Design System

O projeto segue o design system definido em `design.json`, que inclui:

- **Cores**: Verde escuro (#1a5d3a), bege claro (#f5f0e8), e tons neutros
- **Tipografia**: Escala hierárquica de fontes (hero, h1-h3, body, small)
- **Espaçamento**: Sistema de espaçamento consistente
- **Componentes**: Cards, botões, inputs, etc.

## 📄 Páginas

- **Home** (`/`) - Página inicial com hero, filtros e grid de produtos
- **Product Detail** (`/product/:id`) - Detalhes do produto com opções de cor
- **Checkout** (`/checkout`) - Página de finalização de pedido

## 🎯 Funcionalidades

- ✅ Navegação responsiva
- ✅ Grid de produtos com cards
- ✅ Filtros e ordenação
- ✅ Página de detalhes do produto
- ✅ Seletor de cores
- ✅ Página de checkout
- ✅ Design responsivo (mobile-first)

