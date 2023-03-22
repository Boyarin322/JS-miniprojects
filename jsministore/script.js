const tabs = document.querySelectorAll(".tab");
function openTab(){
    tabs.forEach(item=>{item.classList.remove('active')});
    this.classList.add('active');
}
tabs.forEach(item=>{item.addEventListener('click', openTab)});