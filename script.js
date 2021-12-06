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
let goDiv = document.querySelector('.submit-button')
let copyIcon = document.querySelector('.copy-icon-div').children[0]
let checkIcon = document.querySelector('.copy-icon-div').children[1]
let goWinxbetText = document.querySelector('.gowinxbet')
let arrowicon = document.querySelector('.arrowicon')
let textBrl = document.querySelector('.brl10')


codeDiv.addEventListener('click', function () {
    navigator.clipboard.writeText('10BRL');
    copyIcon.classList.add('done')
    console.log(checkIcon)
    checkIcon.classList.remove('done')
    copyIcon.style.transition = "all 2s";
    
})

codeDiv.addEventListener("mouseover",function(){
    codeDiv.style.backgroundColor="#000";
    copyIcon.style.color="#ffd300"
    checkIcon.style.color="#ffd300"
    textBrl.style.color="#ffd300"
    copyIcon.style.fontSize = '42px';
    checkIcon.style.fontSize = '42px';

})

goDiv.addEventListener("mouseover",function(){
    goDiv.style.backgroundColor="#000";
    goWinxbetText.style.color="#ffd300";
    arrowicon.style.color="#ffd300";
})

codeDiv.addEventListener("mouseleave",function(){
    codeDiv.style.backgroundColor="#fff"
    copyIcon.style.fontSize = '36px';
    checkIcon.style.fontSize = '36px';
    copyIcon.style.color="#000"
    checkIcon.style.color="#000"
    textBrl.style.color="#000"
})

goDiv.addEventListener("mouseleave",function(){
    goDiv.style.backgroundColor="#ffd300"
    goWinxbetText.style.color="#000";
    arrowicon.style.color="#000";
    goDiv.style.transition = "all 1s";
})
