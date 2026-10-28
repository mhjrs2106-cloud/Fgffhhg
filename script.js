document.addEventListener('DOMContentLoaded',()=>{
 const form=document.getElementById('application-form');
 if(!form)return;
 const result=document.getElementById('result');
 const formatted=document.getElementById('formatted');
 form.addEventListener('submit',(e)=>{
  e.preventDefault();
  if(!form.reportValidity())return;
  const d=new FormData(form);
  const message=`**تقديم إدارة — 𝐒𝐎𝐔𝐓𝐇 𝐋𝐈𝐅𝐄 𝐑𝐏**\n\n- 1 - الاسـم: ${d.get('name')}\n- 2 - عـمـرك: ${d.get('age')}\n- 3 - خـبـراتـك: ${d.get('experience')}\n- 4 - عـدد سـاعـات تـفـاعـلـك: ${d.get('hours')}\n- 5 - من أي دولة: ${d.get('country')}\n- 6 - هل قرأت القوانين: ${d.get('readRules')}\n- 7 - هل كنت إداريًا في سيرفر آخر: ${d.get('adminBefore')}\n- 8 - ما معنى الرول بلاي: ${d.get('roleplay')}\n\n**أتعهد بالالتزام بقوانين الإدارة.**\nرابط السيرفر: https://discord.gg/QUrHxS59Yv`;
  formatted.value=message;
  result.hidden=false;
  result.scrollIntoView({behavior:'smooth',block:'start'});
 });
 const copyBtn=document.getElementById('copy-btn');
 if(copyBtn)copyBtn.addEventListener('click',async()=>{
  const status=document.getElementById('copy-status');
  try{await navigator.clipboard.writeText(formatted.value);status.textContent='تم نسخ الطلب. افتح الديسكورد والصقه في قناة التقديم.';}
  catch(err){formatted.focus();formatted.select();status.textContent='حدد النص وانسخه يدوياً، ثم الصقه في الديسكورد.';}
 });
 form.addEventListener('reset',()=>{result.hidden=true;});
});