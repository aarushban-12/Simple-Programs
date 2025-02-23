function toggle(){
    const light = document.querySelectorAll(".light");
    const dark = document.querySelectorAll(".dark");

    dark.forEach((item) => {
        if(item.tagName == 'DIV'){
            item.style.backgroundColor = "white";
        }
        item.classList.replace("dark", "light");
    });

    light.forEach((item) => {
        if(item.tagName == 'DIV'){
            item.style.backgroundColor = "black";
        }
        item.classList.replace("light", "dark");
    });
}