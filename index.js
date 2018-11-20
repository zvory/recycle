console.log('js running')

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    // document.getElementById(ev.target.id).style.opacity = '0.2';
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    console.log('drop', data);
    if (data === "napkin") {
        document.getElementById("gum").style.display = 'inline-block';
    } else if (data === 'gum') {
        document.getElementById("mathnews").style.display = 'inline-block';
    } else if (data == 'mathnews') {
        recycle();
    }
}

let leftup;
let rightup;
let legs;
let threaten;

const outWithOldInWithNew = () => {
    const old = document.getElementById('recycle')
    old.style.display = 'none'
    const theNew = document.getElementById('boss')
    theNew.style.display = 'inline-block'
    threaten.style.display = 'none'
}

let pixsize = 10;

const run = (visible = 'leftup') => {
    pixsize = Math.ceil(pixsize * 1.2);
    legs.style.display = 'none'

    let next;
    if (visible === 'leftup') {
        rightup.style.display = 'none'
        leftup.style.display = 'inline-block'
        rightup.style.width = pixsize;
        rightup.style.height = pixsize * 1.77;
        next = 'rightup'
    } else {
        rightup.style.display = 'inline-block'
        leftup.style.display = 'none'
        leftup.style.width = pixsize;
        leftup.style.height = pixsize  * 1.77;
        next = 'leftup'
    }

    const container = document.getElementById('legs-container')
    container.style.top = `${50-(pixsize/23)}%`

    if (pixsize >= 400) {
        menace()
    } else {
        setTimeout(() => run(next), 100)
    }
}

const menace = () => {
    leftup.style.display = 'none'
    rightup.style.display = 'none'
    legs.style.display = 'inline-block'
    legs.style.width = pixsize;
    legs.style.height = pixsize  * 1.77;
    legs.classList.add('shakeClass')

    threaten.style.display = 'block'


}

const recycle = () => {
    legs= document.getElementById('legs')
    leftup= document.getElementById('leftup')
    rightup= document.getElementById('rightup')
    threaten = document.getElementById('threaten')



    console.log('recycle or die!')
    outWithOldInWithNew()
    run()
}



// setTimeout(run, 600)
//setTimeout(recycle, 500)
// recycle();
