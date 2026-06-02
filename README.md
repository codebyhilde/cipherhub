# 🔐 Cipherhub — Cifrados clásicos, arquitectura moderna

**Cipherhub** es una aplicación web full-stack construida con **Next.js (App Router), TypeScript y TailwindCSS (v4)** que implementa algoritmos criptográficos clásicos con una arquitectura híbrida, modular y altamente optimizada para motores de búsqueda (SEO). Este proyecto evoluciona de una SPA tradicional en Vite hacia un entorno profesional que aprovecha el renderizado en el servidor (SSR/SSG), optimización nativa de recursos y enrutamiento dinámico robusto.

---

## ✨ Características principales

- 🔄 **Cifrado y descifrado dinámico** con algoritmos como César, Vigenère y Playfair.
- ⚡ **Arquitectura híbrida (Next.js App Router):** Combinación estratégica de *Server Components* para un SEO e indexación óptimos junto a *Client Components* aislados para interactividad en tiempo real.
- 🔍 **SEO Técnico Avanzado:** Inyección nativa de metadatos, títulos, descripciones y palabras clave optimizadas de forma independiente por cada ruta criptográfica.
- 🚀 **Rendimiento optimizado (Core Web Vitals):** Carga asíncrona y precarga de fuentes locales mediante `next/font/local` para eliminar el salto visual del texto (CLS), junto a optimización automática de imágenes con `next/image`.
- 🧩 **Estructura modular limpia:** Separación estricta entre algoritmos matemáticos tipados, configuraciones dinámicas, contextos globales heredados y vistas desacopladas.
- 🧠 **Validación semántica** en formularios con expresiones regulares y tooltips explicativos retro-modernos.

---
## 🧪 Algoritmos implementados

| Algoritmo | Descripción |
|-----------|-------------|
| César     | Desplaza letras según una clave numérica |
| Vigenère  | Usa una clave alfabética para enmascarar texto |
| Playfair  | Codifica un texto mediante digramas (pares de letras) utilizando una matriz 5x5 generada por clave |

---

## 🧱 Estructura del proyecto (Next.js App Router)

```text
src/
  ├── algorithms/       # Lógica matemática pura de cifrado, modular y tipada
  ├── config/           # Configuraciones por algoritmo (campos de formulario, validaciones)
  ├── components/       # Componentes de UI reutilizables (CipherForm, CipherResult, Layouts)
  ├── context/          # Contexto global (CipherProvider) heredado en cascada por el layout raíz
  ├── hooks/            # Hooks personalizados para abstracción de estado interactivo
  ├── types/            # Interfaces, tipos estrictos y contratos compartidos
  │
  └── app/              # Enrutamiento nativo basado en carpetas (File-system Routing)
      ├── globals.css   # Estilos base y variables de tema estructuradas con TailwindCSS v4
      ├── layout.tsx    # Layout raíz: Configuración global, carga de fuentes locales y Providers
      ├── page.tsx      # Landing Page estática (Server Component) optimizada para SEO
      │
      ├── caesar/       # Ruta /caesar (Estructura híbrida para SEO individual)
      │   ├── page.aspx             -> Server Component (Metadatos estáticos)
      │   └── CaesarClientView.tsx  -> Client Component (Formularios e interactividad)
      │
      ├── vigenere/     # Ruta /vigenere
      │   ├── page.tsx
      │   └── VigenereClientView.tsx
      │
      └── playfair/     # Ruta /playfair
          ├── page.tsx
          └── PlayfairClientView.tsx

```

---
## 📖 Documentación  
  
Para una documentación exhaustiva (en inglés) que cubre la arquitectura, patrones de diseño y guías de desarrollo, consulta la [wiki oficial del proyecto](https://deepwiki.com/codebyhilde/cipherhub/1-overview).


## 🛠️ Instalación y ejecución

```bash
git clone https://github.com/codebyhilde/cipherhub.git
cd cipherhub
npm install # O pnpm install (recomendado)
npm run dev # O pnpm dev
```

El servidor se levantará de inmediato en `http://localhost:3000`.

---

## 📚 Roadmap técnico y funcionalidades planeadas

- [x] Migración completa a React + TypeScript
- [x] Modularización de estilos y componentes (Resuelto con la migración a TailwindCSS)
- [x] Botón de limpieza global de inputs y resultados (Cleanup Button)
- [x] Migración completa a la arquitectura Next.js App Router y optimización de SEO.
- [ ] Implementación de sistema de usuarios e historial de últimos 10 textos cifrados en la web
- [ ] Implementación de creador de cifrados personalizados, usando los cifrados disponibles

> Nota: este roadmap actúa como una guía de desarrollo evolutivo y puede adaptarse dinámicamente según el rumbo y necesidades técnicas del sistema.
---

## 🤝 Contribuciones

Este proyecto está en constante evolución y se agradecen comentarios así como sugerencias para seguir mejorandolo. Puedes contribuir haciendo cosas como proponer nuevos algoritmos, mejoras en la UI/UX o refactorización de componentes. Saludos y gracias de antemano.