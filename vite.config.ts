import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import windicss from "vite-plugin-windicss";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), windicss()],
});
