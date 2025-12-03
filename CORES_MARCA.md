# 🎨 Cores da Marca Bella Joias

Cores extraídas automaticamente da logo `LogoBellaJoias.png`

## Paleta Principal

| Cor | HEX | RGB | Uso Recomendado |
|-----|-----|-----|-----------------|
| **Primary** | `#c43484` | RGB(196, 52, 132) | Cor principal (escolha da cliente) - botões, logo, textos de destaque |
| **Secondary** | `#d1b273` | RGB(209, 178, 115) | Cor secundária - elementos de destaque, badges |
| **Accent 1** | `#a8865b` | RGB(168, 134, 91) | Acento marrom dourado - bordas, separadores |
| **Accent 2** | `#f1e39b` | RGB(241, 227, 155) | Acento amarelo claro - backgrounds, hero sections |
| **Accent 3** | `#bc3484` | RGB(188, 52, 132) | Acento rosa escuro - hover states |
| **Accent 4** | `#dc4898` | RGB(220, 72, 152) | Acento rosa claro - elementos secundários |

## Uso no Tailwind CSS

As cores estão disponíveis no `tailwind.config.js`:

```javascript
colors: {
  brand: {
    primary: '#c43484',    // Rosa/magenta (escolha da cliente)
    secondary: '#d1b273',   // Dourado/bege
    accent1: '#a8865b',
    accent2: '#f1e39b',
    accent3: '#bc3484',
    accent4: '#dc4898',
  }
}
```

### Exemplos de uso:

```jsx
// Botão primário
<button className="bg-brand-primary text-white">Comprar</button>

// Botão secundário
<button className="bg-brand-secondary text-white">Adicionar</button>

// Background suave
<div className="bg-brand-accent2">Hero Section</div>

// Hover state
<button className="hover:bg-brand-accent3">Interagir</button>
```

## Compatibilidade

Para manter compatibilidade com o código existente, as seguintes classes foram mapeadas:

- `dark-green` → `brand-primary` (#c43484 - rosa/magenta)
- `light-beige` → `brand-accent2` (#f1e39b)

Isso significa que todos os componentes existentes continuam funcionando sem alterações.

