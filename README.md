# 🛒 Controlador de gastos con React + TypeScript

Aplicación práctica de **gestión de gastos**, desarrollada con **React + TypeScript** para reforzar conceptos clave de hooks, patrones de estado y buenas prácticas en desarrollo frontend.
La app permite:

- **Definir un presupuesto inicial**

- **Añadir y gestionar gastos dinámicamente**

- **Validar que no se exceda el presupuesto**

- **Visualizar gráficamente el porcentaje consumido**

---

## 🚀 Características principales

- 💸 **Visualización del gasto**: gráfico dinámico con el porcentaje del presupuesto gastado. 
- ⚡ **Rendimiento optimizado** con `useMemo` para cálculos derivados.  
- 🧩 **Gestión de estado avanzada** con  `useReducer`.  
- 🌍 **Estado global centralizado** con `useContext`.  
- 🎨 **UI responsive y moderna** con  **TailwindCSS**.  

---

**Hooks de React aplicados:**
- `useState` → Manejo de estados locales (inputs, selección de categorias, etc).  
- `useReducer` → Lógica del controlador de gastos (añadir, quitar, actualizar ).  
- `useMemo` → Optimización en cálculos de totales(totales y porcentajes).  
- `useContext` → Estado global sin necesidad de prop drilling..
---

## 📂 Estructura del proyecto

```
├─ components/ # Componentes reutilizables 
├─ context/ # Lógica para manejar el estado global BudgetContext
├─ helpers/ # Funciones auxiliares
├─ Hooks/ # Custom hooks (useBudget)
├─ reducer/ # Reducer principal  (BudgetReducer)
├─ types/ # Definición de types (Category, Expenses, etc.)
├─ data/ # Data local (categorías.)
└─ App.jsx # Punto de entrada principal
```
---

## 🛠️ Tecnologías utilizadas
- [Vite](https://vitejs.dev/) — entorno de desarrollo rápido.
- [React](https://react.dev/) — librería principal.
- [React-Toastify](https://fkhadra.github.io/react-toastify/) — notificaciones.
- [React Circular Progressbar](https://www.npmjs.com/package/react-circular-progressbar) — Visualización gráfica.
- [React Date Picker](https://www.npmjs.com/package/react-date-picker) — Selección de fechas.
- [React Swipeable List](https://www.npmjs.com/package/react-swipeable-list) — Listas interactivas.
- [UUID](https://www.npmjs.com/package/uuid) — Identificadores únicos.


---

## 🔧 Setup del proyecto

1. Clonar el repositorio:
   ```
   git clone https://github.com/thonyrm/control_gastos.git
   ```
2. Instalar dependencias:

    ```
    npm install
    ```

3. Ejecutar en modo desarrollo:
    ```
    npm run dev
    ```

---

## 🌐 Demo en línea
Puedes probar el proyecto funcionando aquí:  
👉 [Calculadora de propinas en Vercel](https://control-gastos-beryl-alpha.vercel.app/)