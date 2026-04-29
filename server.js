import express from "express";

const app = express();

app.get("/snai-palinsesto", async (req, res) => {
  const url = "https://www.snai.it/_next/data/ZF6BXTGqNgrfGWKxie0QO/sport/palinsesto.json";

  const r = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124 Safari/537.36",
      "Accept": "application/json,text/plain,*/*",
      "Accept-Language": "it-IT,it;q=0.9,en;q=0.8",
      "Referer": "https://www.snai.it/sport/palinsesto"
    }
  });

  const text = await r.text();
  res.status(r.status).type("application/json").send(text);
});

app.listen(process.env.PORT || 3000);