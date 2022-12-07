window.onscroll = function () {
    const docScrollTop = document.documentElement.scrollTop;

    if (window.innerWidth > 991) {
        if (docScrollTop > 100) {
            document.querySelector("header").classList.add("fixed");
        } else {
            document.querySelector("header").classList.remove("fixed");
        }
    }
}


document.getElementById("leftDisplay").addEventListener("click", addLeft)

function addLeft(){
    var workDeatils = document.getElementById('leftDescription');
    workDeatils.style.display = 'block'

}

document.getElementById("rightDisplay").addEventListener("click", addRight)

function addRight(){
    var workDeatils = document.getElementById('rightDescription');
    workDeatils.style.display = 'block';

}