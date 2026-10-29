interface ViteTypoOptions {
    strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
  readonly VITE_OWM_APIKEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}