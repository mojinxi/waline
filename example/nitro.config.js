export default defineNitroConfig({
  preset: "edgeone",
  storage: {
    db: {
      driver: "kv",
      base: "waline_db"
    }
  }
})
