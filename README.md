# 🔐 Cipherhub — Cifrados clásicos, arquitectura moderna

**Cipherhub** es una SPA construida con **React + TypeScript y orquestada con Vite** que implementa algoritmos criptográficos clásicos con una arquitectura modular, escalable y visualmente clara. Este proyecto nace de la necesidad de migrar una implementación previa en HTML/CSS/JS con mucho código boilerplate hacia un entorno más profesional que permita continuidad, portabilidad y evolución técnica.

---

## ✨ Características principales

- 🔄 **Cifrado y descifrado dinámico** con algoritmos como César, Vigenère y Playfair
- 🧩 **Arquitectura modular** con separación clara entre lógica, configuración, vistas y componentes
- 🎨 **Interfaz responsiva** optimizada para móviles y escritorio
- 🧠 **Validación semántica** en formularios con expresiones regulares y tooltips explicativos
- ⚙️ **Sistema de configuración individual** para cada algoritmo
- 🚀 **Preparado para escalar** con animaciones, temas, historial y cualquier cosa que mejore la UI/UX

---
## 🧪 Algoritmos implementados

| Algoritmo | Descripción |
|-----------|-------------|
| César     | Desplaza letras según una clave numérica |
| Vigenère  | Usa una clave alfabética para enmascarar texto |
| Playfair  | Codifica un texto mediante digramas (pares de letras) utilizando una matriz 5x5 generada por clave |

---

## 🧱 Estructura del proyecto


src/

    ├── algorithms/       # Lógica de cifrado tipada y modular
    
    ├── config/           # Configuraciones por algoritmo (nombre, campos, validaciones)
    
    ├── components/       # Componentes reutilizables (formulario, layout, resultado)
    
    ├── views/            # Vistas por algoritmo
    
    ├── types/            # Tipos e interfaces compartidas
    
    ├── hooks/            # Hooks personalizados para estado y lógica
    
    ├── styles/           #  Contiene el CSS base de Tailwind

└── App.tsx           # Enrutamiento de la homepage y algoritmos

---

## 🛠️ Instalación y ejecución

```bash
git clone https://github.com/codebyhilde/cipherhub.git
cd cipherhub
npm install
npm run dev
```

---

## 📚 Roadmap técnico

- [x] Migración completa a React + TypeScript
- [x] Modularización de estilos y componentes (Resuelto con la migración a TailwindCSS)
- [x] Botón de limpieza global de inputs y resultados (Cleanup Button)
- [ ] Configuración centralizada de algoritmos
- [ ] Historial de cifrados con persistencia local
- [ ] Modo educativo con simulador visual
- [ ] Posibilidad de elegir entre varios temas (personalización visual)

### 📈 Próximas Mejoras

- [ ] **Auditoría de Rendimiento y Optimización:** Implementación de *debounce* en *inputs* controlados, memoización avanzada, y auditoría de Lighthouse.
- [ ] **Testing de Cobertura con Jest:** Implementación de pruebas unitarias para todos los algoritmos de cifrado.

> Nota: este roadmap es una guía evolutiva. Es posible que algunas ideas no se cumplan al pie de la letra, pudiendo cambiar y adaptarse según el rumbo del proyecto.
---

## 🤝 Contribuciones

Este proyecto está en constante evolución y se agradecen comentarios así como sugerencias para seguir mejorandolo. Puedes contribuir haciendo cosas como proponer nuevos algoritmos, mejoras en la UI/UX o refactorización de componentes. Saludos y gracias de antemano.
