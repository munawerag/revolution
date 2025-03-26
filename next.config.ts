import type { NextConfig } from "next";
import type { Configuration, RuleSetRule } from "webpack";

// Define types for webpack loaders
interface ModuleLoader {
  loader?: string;
  options?: {
    modules?: {
      exportLocalsConvention?: string;
      localIdentName?: string;
      [key: string]: any;
    };
    [key: string]: any;
  };
  [key: string]: any;
}

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Empty experimental object can sometimes cause issues
  experimental: {},
  webpack: (config: any, { dev, isServer }) => {
    // Only apply in build mode to avoid dev server issues
    if (!dev) {
      // Find the CSS module rules
      const rules = (config.module?.rules as Array<any>)
        .find((rule) => typeof rule.oneOf === 'object')
        ?.oneOf.filter((rule: any) => Array.isArray(rule.use));

      // Modify CSS module loaders to clean up class names
      if (rules) {
        rules.forEach((rule: any) => {
          if (rule.use) {
            (rule.use as Array<any>).forEach((moduleLoader: any) => {
              if (
                moduleLoader.loader?.includes('css-loader') && 
                !moduleLoader.loader?.includes('postcss-loader')
              ) {
                if (moduleLoader.options?.modules) {
                  moduleLoader.options.modules.exportLocalsConvention = 'camelCase';
                  moduleLoader.options.modules.localIdentName = '[local]__[hash:base64:5]';
                }
              }
            });
          }
        });
      }
    }

    return config;
  },
};

export default nextConfig;