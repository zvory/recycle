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

const outWithOldInWithNew = () => {
    const old = document.getElementById('recycle')
    old.style.display = 'none'
    const theNew = document.getElementById('boss')
    theNew.style.display = 'inline-block'
}

const recycle = () => {
    console.log('recycle or die!')
    outWithOldInWithNew()
}

setTimeout(recycle, 500)
// recycle();