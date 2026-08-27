// G1/G3/G5 gate. Deterministic, no model. WCAG 2.2 ratio + completeness + distinctness.
import fs from "fs";
const packs = JSON.parse(fs.readFileSync("packs.json","utf8")).packs;

// --- OKLCH -> sRGB (Ottosson) ---
const f=(x)=>x<=0.0031308?12.92*x:1.055*Math.pow(x,1/2.4)-0.055;
function oklchToRgb(L,C,h){
  const hr=h*Math.PI/180, a=C*Math.cos(hr), b=C*Math.sin(hr);
  const l_=L+0.3963377774*a+0.2158037573*b, m_=L-0.1055613458*a-0.0638541728*b, s_=L-0.0894841775*a-1.2914855480*b;
  const l=l_**3, m=m_**3, s=s_**3;
  return [ 4.0767416621*l-3.3077115913*m+0.2309699292*s,
          -1.2684380046*l+2.6097574011*m-0.3413193965*s,
          -0.0041960863*l-0.7034186147*m+1.7076147010*s ].map(v=>Math.min(1,Math.max(0,f(v))));
}
function parse(v){
  const m=String(v).match(/oklch\(\s*([\d.]+)%\s+([\d.]+)\s+([\d.]+)/);
  if(!m) return null;
  return oklchToRgb(parseFloat(m[1])/100, parseFloat(m[2]), parseFloat(m[3]));
}
const lin=(c)=>c<=0.04045?c/12.92:((c+0.055)/1.055)**2.4;
const lum=(rgb)=>0.2126*lin(rgb[0])+0.7152*lin(rgb[1])+0.0722*lin(rgb[2]);
function ratio(a,b){ const L1=lum(a),L2=lum(b); return (Math.max(L1,L2)+0.05)/(Math.min(L1,L2)+0.05); }

// text/bg pairs that must pass, and UI-boundary pairs (WCAG 1.4.11, >=3:1)
const TEXT=[["--foreground","--background"],["--card-foreground","--card"],
  ["--muted-foreground","--muted"],["--primary-foreground","--primary"],
  ["--secondary-foreground","--secondary"],["--accent-foreground","--accent"]];
const BOUNDARY=[["--border","--background"],["--input","--card"],["--ring","--background"]];
const REQUIRED=["--background","--foreground","--card","--card-foreground","--muted","--muted-foreground",
  "--primary","--primary-foreground","--secondary","--secondary-foreground","--accent","--accent-foreground",
  "--border","--input","--ring","--destructive","--success","--warning"];

let fail=0;
for(const p of packs){
  console.log(`\n=== ${p.name} (${p.id}) ===`);
  for(const mode of ["light","dark"]){
    const t=p[mode];
    const missing=REQUIRED.filter(k=>!(k in t));
    if(missing.length){ console.log(`  [G3] ${mode} MISSING: ${missing.join(", ")}`); fail++; }
    for(const [fg,bg] of TEXT){
      const a=parse(t[fg]), b=parse(t[bg]); if(!a||!b) continue;
      const r=ratio(a,b), pass=r>=4.5;
      if(!pass) fail++;
      console.log(`  [G1] ${mode.padEnd(5)} ${fg.padEnd(24)} on ${bg.padEnd(14)} ${r.toFixed(2)}:1 ${pass?"PASS":"FAIL(<4.5)"}`);
    }
    for(const [a_,b_] of BOUNDARY){
      const a=parse(t[a_]), b=parse(t[b_]); if(!a||!b) continue;
      const r=ratio(a,b), pass=r>=3.0;
      if(!pass) fail++;
      console.log(`  [1.4.11] ${mode.padEnd(3)} ${a_.padEnd(24)} on ${b_.padEnd(14)} ${r.toFixed(2)}:1 ${pass?"PASS":"FAIL(<3.0)"}`);
    }
  }
}
// G5 distinctness
const seen=new Map();
for(const p of packs){ const v=JSON.stringify(p.knobs); if(seen.has(v)){ console.log(`\n[G5] ${p.id} duplicates ${seen.get(v)}`); fail++; } seen.set(v,p.id); }
console.log(`\n${fail===0?"ALL GATES PASS":"FAILURES: "+fail}`);
process.exit(fail?1:0);
