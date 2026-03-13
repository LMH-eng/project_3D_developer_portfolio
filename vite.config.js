import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/project_3D_developer_portfolio/', // 必须和你的仓库名完全一致
})
