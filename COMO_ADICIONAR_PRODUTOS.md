# 📦 Como Adicionar Produtos

## Estrutura de Pastas

```
BellaJoias/
├── public/
│   └── images/
│       └── products/          ← Coloque as imagens aqui
│           ├── produto-1.jpg
│           ├── produto-2.jpg
│           └── ...
└── src/
    └── data/
        └── products.jsx        ← Dados dos produtos
```

## Passo a Passo

### 1. Adicionar Imagens
- Coloque as imagens na pasta `public/images/products/`
- Use nomes descritivos sem espaços (ex: `anel-diamante-ouro.jpg`)
- Formatos aceitos: `.jpg`, `.jpeg`, `.png`, `.webp`

### 2. Adicionar Dados do Produto

Edite o arquivo `src/data/products.jsx` e adicione um novo objeto no array `products`:

```jsx
{
  id: 9,  // Próximo número disponível
  name: 'Nome do Produto',
  description: 'Descrição completa do produto',
  shortDescription: 'Descrição curta para o card',
  price: 299.99,
  image: '/images/products/nome-da-imagem.jpg',  // Caminho da imagem
  images: [  // Imagens adicionais (opcional)
    '/images/products/produto-1.jpg',
    '/images/products/produto-2.jpg'
  ],
  reviews: 0,
  rating: 5,
  colors: ['ouro', 'prata'],  // Cores disponíveis
  category: 'Anéis',  // Categoria do produto
  material: 'Ouro 18k',  // Material (opcional)
  inStock: true,
  tags: ['novo', 'promoção']  // Tags (opcional)
}
```

## Campos Disponíveis

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `id` | number | ✅ | ID único do produto |
| `name` | string | ✅ | Nome do produto |
| `description` | string | ✅ | Descrição completa |
| `price` | number | ✅ | Preço em reais |
| `image` | string | ✅ | Caminho da imagem principal |
| `reviews` | number | ❌ | Número de avaliações (padrão: 0) |
| `rating` | number | ❌ | Nota de 1 a 5 (padrão: 5) |
| `colors` | array | ❌ | Cores disponíveis |
| `category` | string | ❌ | Categoria do produto |
| `material` | string | ❌ | Material do produto |
| `inStock` | boolean | ❌ | Se está em estoque (padrão: true) |
| `tags` | array | ❌ | Tags para filtros |

## Exemplo Completo

```jsx
{
  id: 10,
  name: 'Anel de Diamante em Ouro 18k',
  description: 'Anel solitário com diamante de 0.5ct em ouro 18k. Acompanha certificado de autenticidade.',
  shortDescription: 'Anel solitário com diamante',
  price: 2999.99,
  image: '/images/products/anel-diamante-ouro.jpg',
  images: [
    '/images/products/anel-diamante-ouro-1.jpg',
    '/images/products/anel-diamante-ouro-2.jpg'
  ],
  reviews: 45,
  rating: 5,
  colors: ['ouro', 'rosa'],
  category: 'Anéis',
  material: 'Ouro 18k',
  inStock: true,
  tags: ['destaque', 'novo']
}
```

## Dica

Se você tiver muitas imagens e descrições, pode:
1. Criar um arquivo `produtos.txt` ou `produtos.csv` com as informações
2. Ou me enviar as descrições e eu ajudo a formatar no código

