const panels = document.querySelectorAll(".panel");
console.log(panels);
panels.forEach(function (item){
    item.addEventListener('click', hoverPanel);
})
function hoverPanel(){
    this.classList.toggle('.open');
}
