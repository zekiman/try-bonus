var arrowColl = document.querySelector('.arrowColl')
var coll = document.querySelectorAll('.collapsible');
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].onmouseover = (e) => {
        e.target.style.backgroundColor = '#fff'
        e.target.style.transition = "all 1s";
    }
    coll[i].onmouseleave = (e) => {
        e.target.style.backgroundColor = '#ffd300'
        e.target.style.transition = "all 1s";
    }
    coll[i].addEventListener("click", function (e) {
        var whichArrow = e.target.children[0]

        if (whichArrow.textContent == '⮞') {
            whichArrow.textContent = '⮟'
        } else {
            whichArrow.textContent = '⮞'
        }

        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        };
    });
}

let codeDiv = document.querySelector('.promo-code-div')
let copyIcon = document.querySelector('.copy-icon-div').children[0]


codeDiv.addEventListener('click', function () {
    navigator.clipboard.writeText('10BRL');
    copyIcon.style.color="green"
    copyIcon.style.transition = "all 2s";
})

codeDiv.addEventListener("mouseover",function(){
    copyIcon.style.fontSize = '42px';

})

codeDiv.addEventListener("mouseleave",function(){
    copyIcon.style.fontSize = '36px';

})