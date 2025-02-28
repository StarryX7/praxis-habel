/// <reference types="vite/client" />

// Deklaration für Vue-Komponenten
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
