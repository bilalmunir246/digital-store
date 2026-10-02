const wa="923198682932";
const catalogEl=document.getElementById("catalog");
function waLink(service){
  const text=`Hi DIGITAL STORE, I want to order: ${service}`;
  return `https://wa.me/${wa}?text=${encodeURIComponent(text)}`;
}
const icons={pink:"◈",purple:"✦",green:"✧",red:"▶",blue:"▣",magenta:"♥",gold:"✦",cyan:"◆"};
CATALOG.forEach((cat,i)=>{
  const card=document.createElement("article");
  card.className=`service-card reveal`;
  card.innerHTML=`<div class="service-head"><div><div class="service-no">0${String(i+1).padStart(2,"0")}</div><div class="service-title">${cat.category}</div></div><div style="color:#d6aa58;font-size:18px">${icons[cat.accent]||"✦"}</div></div><div class="service-list"></div>`;
  const list=card.querySelector(".service-list");
  cat.items.forEach(item=>{
    const [name,meta,price,old]=item;
    const row=document.createElement("div");
    row.className="service-row";
    row.innerHTML=`<div><div class="service-name">${name}</div><span class="service-meta">${meta}</span></div><div style="text-align:right"><div class="price">${old?`<s style="color:#68696c;font-size:10px;margin-right:5px">${old}</s> ❌ → `:""}${price}</div><button class="order-mini" type="button">ORDER NOW</button></div>`;
    row.querySelector("button").addEventListener("click",()=>window.open(waLink(name),"_blank","noopener"));
    list.appendChild(row);
  });
  catalogEl.appendChild(card);
});
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target)}});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));
document.querySelectorAll("details").forEach(d=>d.addEventListener("toggle",()=>{if(d.open)d.querySelector("summary span").textContent="−";else d.querySelector("summary span").textContent="+";}));
