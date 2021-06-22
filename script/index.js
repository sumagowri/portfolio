const rubber = document.querySelectorAll(".rubber");

window.addEventListener("load",init);

function init(){
    rubber.forEach(content =>{
        content.addEventListener("mouseover",(e)=>{
            e.target.classList.add("animated")
            e.target.addEventListener("animationend",(e)=>{
                e.target.classList.remove("animated");
            })
        });
    })
}

function preventGoTo(){
  return false;
}