import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Proxy attivo");
});

app.get("/snai-palinsesto", async (req, res) => {
  const url = "https://www.snai.it/_next/data/ZF6BXTGqNgrfGWKxie0QO/sport/palinsesto.json";

  try {
    const r = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124 Safari/537.36",
        "Accept": "application/json,text/plain,*/*",
        "Accept-Language": "it-IT,it;q=0.9,en;q=0.8",
        "Referer": "https://www.snai.it/sport/palinsesto"
      }
    });

    const text = await r.text();

    res.status(200).json({
      ok: r.ok,
      status: r.status,
      statusText: r.statusText,
      preview: text.slice(0, 1000)
    });

  } catch (e) {
    res.status(200).json({
      ok: false,
      error: String(e),
      stack: e.stack
    });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server avviato");
});
