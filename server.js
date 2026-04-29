import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Proxy attivo");
});

app.get("/test-google", async (req, res) => {
  try {
    const r = await fetch("https://www.google.com");
    res.json({
      ok: true,
      status: r.status
    });
  } catch (e) {
    res.json({
      ok: false,
      error: String(e)
    });
  }
});

app.get("/test-snai", async (req, res) => {
  res.json({
    message: "Route SNAI raggiunta correttamente, fetch non eseguita"
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server avviato");
});
