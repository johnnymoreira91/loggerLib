import typescript from '@rollup/plugin-typescript';
import dts from "rollup-plugin-dts";

export default [
  {
    input: 'src/index.ts', 
    output: {
      file: 'lib/index.js', 
      format: 'cjs',
      sourcemap: true,
    },
    // external: ['sequelize', 'dotenv', 'zod'],
    plugins: [typescript()] 
  }, 
  {
    input: 'lib/index.d.ts', 
    output: {
      file: 'lib/index.d.ts', 
      format: 'es'
    },
    plugins: [dts()]
  }
];

// const typescript = require('@rollup/plugin-typescript');
// const dts = require("rollup-plugin-dts");

// module.exports = [
//   {
//     input: 'src/index.ts',
//     output: {
//       file: 'lib/index.js', 
//       format: 'cjs',
//       sourcemap: true,
//     },
//     external: ['sequelize', 'dotenv', 'zod'],
//     plugins: [typescript] 
//   }, 
//   {
//     input: 'lib/index.d.ts', 
//     output: {
//       file: 'lib/index.d.ts', 
//       format: 'es'
//     },
//     plugins: [dts] 
//   }
// ];
