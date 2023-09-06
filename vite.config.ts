/** @type {import('vite').UserConfig} */

import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import postcssNesting from "postcss-nesting";

// https://vitejs.dev/config/

export default {
  plugins: [react(), svgr({ exportAsDefault: true })],
  css: {
    postcss: {
      plugins: [postcssNesting],
    },
  },
};
