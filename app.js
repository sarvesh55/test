function openApp(u){window.open(u,'_blank')}
document.getElementById('theme').onclick=()=>document.body.classList.toggle('dark');
document.getElementById('search').oninput=e=>{
let v=e.target.value.toLowerCase();
document.querySelectorAll('.card').forEach(c=>c.style.display=c.dataset.name.toLowerCase().includes(v)?'block':'none');
};