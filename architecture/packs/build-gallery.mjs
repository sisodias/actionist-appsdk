import fs from "fs";
const { packs } = JSON.parse(fs.readFileSync("packs.json","utf8"));

// The reference screen. IDENTICAL for every pack — that is what makes the gallery a
// comparison rather than a showcase. Exercises the full Radix 1-12 role span:
// canvas, surface, border, input, focus ring, solid accent, muted text, status.
const REF = `
<div class="ref">
  <div class="ref-bar">
    <span class="dot"></span><span class="ref-title">Acme Ops</span>
    <span class="ref-spacer"></span><span class="pill">Live</span>
  </div>
  <div class="ref-body">
    <div class="stat">
      <div class="stat-l">Monthly revenue</div>
      <div class="stat-v">£48,209</div>
      <div class="stat-d">+12.4% vs last month</div>
    </div>
    <div class="row"><span>Invoice #4821</span><span class="ok">Paid</span></div>
    <div class="row"><span>Invoice #4822</span><span class="warn">Pending</span></div>
    <input class="fld" value="search orders" readonly>
    <div class="btns"><button class="b1">Approve</button><button class="b2">Cancel</button></div>
  </div>
</div>`;

const vars = (o) => Object.entries(o).map(([k,v])=>`${k}:${v}`).join(";");

const cards = packs.map(p => `
<figure class="card" data-pack="${p.id}">
  <div class="frame">
    <div class="face light" style="${vars({...p.shared, ...p.light})}">${REF}</div>
    <div class="face dark"  style="${vars({...p.shared, ...p.dark})}">${REF}</div>
  </div>
  <figcaption>
    <div class="cap-top"><h3>${p.name}</h3><span class="tier">Tier ${p.tier}</span></div>
    <p class="vibe">${p.vibe}</p>
    <ul class="knobs">
      <li>radius ${p.knobs.radius}</li><li>${p.knobs.shadowStyle}</li>
      <li>${p.knobs.density}</li><li>${p.knobs.typeClass}</li>
    </ul>
  </figcaption>
</figure>`).join("\n");

fs.writeFileSync("gallery.html", `<title>Pack Gallery</title>
<style>
:root{--pg-bg:#fafaf9;--pg-fg:#1c1917;--pg-mut:#78716c;--pg-line:#d6d3d1;--pg-card:#fff}
@media (prefers-color-scheme:dark){:root:not([data-theme=light]){--pg-bg:#0c0a09;--pg-fg:#f5f5f4;--pg-mut:#a8a29e;--pg-line:#292524;--pg-card:#1c1917}}
*{box-sizing:border-box}
body{margin:0;padding:40px 28px 72px;background:var(--pg-bg);color:var(--pg-fg);
  font:15px/1.5 Inter,system-ui,sans-serif}
header{max-width:1180px;margin:0 auto 32px}
h1{font-size:26px;margin:0 0 6px;letter-spacing:-.02em}
.sub{color:var(--pg-mut);margin:0;font-size:14px}
.grp{max-width:1180px;margin:0 auto 12px;font-size:11px;font-weight:750;letter-spacing:.09em;
  text-transform:uppercase;color:var(--pg-mut);padding-top:26px}
.grid{max-width:1180px;margin:0 auto;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}
@media(max-width:960px){.grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:640px){.grid{grid-template-columns:minmax(0,1fr)}}
.card{margin:0}
.frame{position:relative;border:1px solid var(--pg-line);border-radius:12px;overflow:hidden;
  height:430px;background:var(--pg-card)}
.face{position:absolute;inset:0;background:var(--background);color:var(--foreground);
  font-family:var(--font-body);letter-spacing:var(--tracking);padding:14px;
  transition:opacity .22s ease}
.face.dark{opacity:0}
.card:hover .face.dark{opacity:1}
.card:hover .face.light{opacity:0}
/* --- reference screen: every value comes from the pack --- */
.ref{height:100%;display:flex;flex-direction:column;gap:9px}
.ref-bar{display:flex;align-items:center;gap:7px;padding-bottom:8px;
  border-bottom:var(--border-width) solid var(--border)}
.dot{width:9px;height:9px;border-radius:var(--radius);background:var(--primary);flex:none}
.ref-title{font-family:var(--font-display);font-weight:700;font-size:12.5px}
.ref-spacer{flex:1}
.pill{font-size:8.5px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;
  padding:2px 6px;border-radius:var(--radius);background:var(--accent);color:var(--accent-foreground)}
.ref-body{display:flex;flex-direction:column;gap:7px;flex:1}
.stat{background:var(--card);color:var(--card-foreground);border:var(--border-width) solid var(--border);
  border-radius:var(--radius);padding:9px 11px;box-shadow:var(--shadow-2)}
.stat-l{font-size:8.5px;text-transform:uppercase;letter-spacing:.07em;color:var(--muted-foreground);font-weight:700}
.stat-v{font-family:var(--font-mono);font-size:19px;font-weight:750;font-variant-numeric:tabular-nums;margin:1px 0}
.stat-d{font-size:9px;color:var(--muted-foreground)}
.row{display:flex;justify-content:space-between;align-items:center;font-size:9.5px;
  min-height:var(--row-h);padding:0 9px;background:var(--card);color:var(--card-foreground);
  border:var(--border-width) solid var(--border);border-radius:var(--radius)}
.ok{color:var(--success);font-weight:750}
.warn{color:var(--warning);font-weight:750}
.fld{font:inherit;font-size:9.5px;height:var(--control-h);padding:0 var(--pad-x);width:100%;
  background:var(--background);color:var(--muted-foreground);
  border:var(--border-width) solid var(--input);border-radius:var(--radius);
  outline:none}
.btns{display:flex;gap:6px;margin-top:auto}
.b1,.b2{font:inherit;font-size:9.5px;font-weight:750;height:var(--control-h);
  padding:0 var(--pad-x);border-radius:var(--radius);cursor:default;
  border:var(--border-width) solid transparent;box-shadow:var(--shadow-1)}
.b1{background:var(--primary);color:var(--primary-foreground)}
.b2{background:var(--secondary);color:var(--secondary-foreground);border-color:var(--border)}
figcaption{padding:12px 2px 0}
.cap-top{display:flex;align-items:baseline;gap:8px}
h3{margin:0;font-size:15px;letter-spacing:-.01em}
.tier{font-size:9.5px;color:var(--pg-mut);font-weight:700}
.vibe{margin:3px 0 8px;font-size:12.5px;color:var(--pg-mut);line-height:1.45}
.knobs{list-style:none;display:flex;flex-wrap:wrap;gap:5px;margin:0;padding:0}
.knobs li{font-size:9.5px;font-weight:700;padding:2px 7px;border-radius:999px;
  border:1px solid var(--pg-line);color:var(--pg-mut)}
.note{max-width:1180px;margin:44px auto 0;padding-top:18px;border-top:1px solid var(--pg-line);
  font-size:12.5px;color:var(--pg-mut)}
</style>
<header>
  <h1>Design token packs</h1>
  <p class="sub">Same screen, every card — so you are comparing the design, not the content. Hover a card to see its dark mode. All packs pass WCAG AA text contrast and 1.4.11 boundary contrast in both modes.</p>
</header>
<div class="grp">Dense · built for tables and forms</div>
<div class="grid">${cards.split("</figure>").filter(Boolean).map(s=>s+"</figure>").filter(s=>/data-pack="(grid|console)"/.test(s)).join("")}</div>
<div class="grp">Branded · more character, still data-capable</div>
<div class="grid">${cards.split("</figure>").filter(Boolean).map(s=>s+"</figure>").filter(s=>/data-pack="paper"/.test(s)).join("")}</div>
<p class="note">3 of a planned 16. Nothing here is generated — every value is authored and gate-checked. The assembler may reference these token names and may never emit a literal.</p>
`);
console.log("gallery.html written:", fs.statSync("gallery.html").size, "bytes");
