//Start
export default async function handler(req, res) {
  try {
    const response = await fetch("https://carbon-backend-u1a2.onrender.com/healthz");
    const data = await response.text();
    console.log("Ping success:", data);
    return res.status(200).json({ ok: true, data });
  } catch (err) {
    console.error("Ping failed:", err);
    return res.status(500).json({ ok: false, error: err.message });
  }
}
