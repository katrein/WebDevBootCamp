var bullets = document.querySelectorAll("li");

for(var i = 0; i < bullets.length; i++){
    bullets[i].addEventListener("mouseover", function(){
        this.classList.add("selected");
    })
    bullets[i].addEventListener("mouseout", function(){
        this.classList.remove("selected");
    })
    bullets[i].addEventListener("click", function(){
        this.classList.toggle("done");
    })
}
