import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // 1) IGNORA LOS BUILD DE FRONT
  {
    ignores: [
      "dist/**",
      "node_modules/**",
    ]
  },
  // 2) CONFIGURACION DEL BACKEND
  { 
    files: ["**/*.{js}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      ecmaVersion: "latest", 
      sourceType: "module",
      globals: { ...globals.node } 
    } 
  },

  // 3) CODIGO DEL FRONTEND
  { 
    files: ["/src/**/*.{js,msj}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      ecmaVersion: "latest", 
      sourceType: "module",
      globals: { ...globals.node } 
    } 
  },

  // 4) OPCIONAL SI HAY JS EN PUBLIC
  { 
    files: ["/public/**/*.{js,msj}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      ecmaVersion: "latest", 
      sourceType: "module",
      globals: { ...globals.node } 
    } 
  },

  // 2.1) CONFIGURACION DE VITE
  { 
    files: ["vite.config.js"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      ecmaVersion: "latest", 
      sourceType: "module",
      globals: { ...globals.node } 
    } 
  },
]);