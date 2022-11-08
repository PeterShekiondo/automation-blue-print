
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3001/graphql",
  documents: "lib/graphql/**/*.graphql",
  generates: {
    "lib/graphql/generated": {
      preset: "client",
      plugins: ["typescript", "typescript-operations", "typescript-react-query"]
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
