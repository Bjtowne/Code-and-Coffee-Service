import { resolve, dirname } from "path";
import { defineConfig } from "vite";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  build: {
    lib: {
      entry: {
        CoffeeCalendar: resolve(__dirname, "src/CoffeeCalendar.ts"),
      },
      fileName: "coffee-calendar",
    },
  },
});
