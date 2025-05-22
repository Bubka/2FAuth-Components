import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  "./packages/formcontrols/vite.config.ts",
  "./playground/vue/vite.config.ts",
  "./packages/ui/vite.config.ts",
  "./packages/stores/vite.config.ts"
])
