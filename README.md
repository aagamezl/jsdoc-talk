# JSDoc Talk Setup

Install TypeScript compiler:

```bash
npm i -D typescript
```

Create tsconfig file:

```json
// tsconfig.json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
    "strict": true,
  }
}
```

Enable the following settings in VSCode to get immediate visual feedback:

```json
"javascript.validate.enable": true,
```
