import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/graph.ts', // Your entry TypeScript file
  output: {
    file: 'dist/bundle.js', // Output bundle file
    format: 'iife', // Immediately Invoked Function Expression, suitable for browsers
    name: 'MyD3Project' // Global variable for your project
  },
  plugins: [
    resolve(), // Resolves external dependencies
    commonjs(), // Converts CommonJS modules to ES6
    typescript() // Compiles TypeScript
  ]
};
