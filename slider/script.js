var models = [
    {
        name: "bmw",
        image: "img/bmw.jpg",
        link: "#"
    },
    {
        name: "mazda",
        image: "img/mazda.jpg",
        link: "#"
    },
    {
        name: "volvo",
        image: "img/volvo.jpg",
        link: "#"
    },
    {
        name: "skoda",
        image: "img/skoda.jpg",
        link: "#"
    },
    {
        name: "honda",
        image: "img/honda.jpg",
        link: "#"
    }
];
let index = 0;
let slaytcount = models.length;
var interval;
var setting = {
    duration: "1000",
    random: true
};
init(setting);
document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseenter",function(){
        clearInterval(interval);
    })
});
document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseleave",function(){
        init(setting);
    })
});
function init(setting) {
    var prev;
    interval=setInterval(function () {
        if (setting.random) {
            do {
                index = Math.floor(Math.random() * slaytcount);
            } while (index == prev);
            prev = index;
        }
        else {
            if(slaytcount==index+1){
                index=-1;
            }
            showslide(index);
            console.log(index);
            index++;
        }
        showslide(index);
    }, setting.duration)

}

showslide(index);
function showslide(i) {
    index = i;
    if (i < 0) {
        index = slaytcount - 1;
    }
    if (i >= slaytcount) {
        index = 0;
    }
    document.querySelector(".card-title").textContent = models[index].name;

    document.querySelector(".card-img-top").setAttribute("src", models[index].image);

    document.querySelector(".card-link").setAttribute("href", models[index].link);
}

document.querySelector(".fa-arrow-circle-left").addEventListener("click", function () {
    index--;
    showslide(index);
    console.log(index);
});
document.querySelector(".fa-arrow-circle-right").addEventListener("click", function () {
    index++;
    showslide(index);
    console.log(index);
});