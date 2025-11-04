import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'fs'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Get theme file path from command line args or environment variable
  const themeFile = process.env.THEME_FILE || undefined;
  
  return {
    plugins: [
      // Plugin to serve JSON files from src/themes directory (must be before react plugin)
      {
        name: 'serve-theme-json',
        enforce: 'pre', // Run before other plugins
        configureServer(server) {
          // Add middleware early in the chain
          server.middlewares.use((req, res, next) => {
            if (!req.url) {
              next();
              return;
            }
            
            // Skip Vite's module requests - they have query parameters like ?import, ?url, etc.
            // Only intercept plain fetch requests (no query params or specific params)
            const hasViteQuery = req.url.includes('?import') || 
                                 req.url.includes('?url') || 
                                 req.url.includes('?t=') ||
                                 req.url.includes('?raw');
            
            if (hasViteQuery) {
              // Let Vite handle module imports
              next();
              return;
            }
            
            // Remove base path if present
            let urlPath = req.url.split('?')[0]; // Remove query string
            const basePath = '/matter-site-config-prototype';
            if (urlPath.startsWith(basePath)) {
              urlPath = urlPath.substring(basePath.length);
            }
            
            // Serve JSON files from src/themes when requested (only for fetch requests)
            if (urlPath.startsWith('/src/themes/') && urlPath.endsWith('.json')) {
              try {
                // Remove leading slash for resolve
                const relativePath = urlPath.startsWith('/') ? urlPath.substring(1) : urlPath;
                const filePath = resolve(process.cwd(), relativePath);
                
                console.log('[serve-theme-json] Serving:', urlPath, '->', filePath);
                
                // Verify file exists and is readable
                const content = readFileSync(filePath, 'utf-8');
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Cache-Control', 'no-cache');
                res.end(content);
                return;
              } catch (error: any) {
                console.error('[serve-theme-json] Error:', error.message);
                console.error('[serve-theme-json] Requested path:', urlPath);
                console.error('[serve-theme-json] Resolved path:', resolve(process.cwd(), urlPath.startsWith('/') ? urlPath.substring(1) : urlPath));
                // File not found, continue to next middleware
              }
            }
            next();
          });
        }
      },
      react()
    ],
    base: '/matter-site-config-prototype/',
    server: {
      port: 4000,
      host: true
    },
    define: {
      __THEME_FILE__: themeFile ? JSON.stringify(themeFile) : 'undefined'
    }
  }
})