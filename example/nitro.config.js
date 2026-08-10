export default defineNitroConfig({
  preset: "edgeone",
  compatibilityDate: "2026-08-10",
  storage: {
    db: {
      driver: "kv",
      base: "waline_db"
    }
  }
})
