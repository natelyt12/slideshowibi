let bgsong = document.getElementById('bgsong');
let startbtn = document.getElementById('control')
let container = document.getElementsByClassName('container')[0]
let more = document.getElementById('more')
let morecontainer = document.getElementsByClassName('more-container')[0]

function play() {
    bgsong.play();
    startbtn.style.transform = 'translate(-50%, 180px)'
    morecontainer.style.opacity = '0'
    more.style.opacity = '0'
    setTimeout(() => {
        startbtn.style.display = 'none'
        document.getElementsByClassName('text')[0].style.opacity = '1'
        morecontainer.style.display = 'none'
    }, 500);
    letsgo()
}

more.addEventListener('click', () => {
    let toggle = document.querySelector('.more-container');
    toggle.classList.toggle('toggle')

})

function letsgo() {
    setTimeout(() => {
        document.getElementsByClassName('text')[0].style.opacity = '0'
    }, 5000);
    setTimeout(() => {
        document.getElementsByClassName('intro')[0].style.width = '0'
        document.getElementsByClassName('c1')[0].style.width = '375px'
    }, 7200);
    setTimeout(() => {
        document.getElementsByClassName('c1')[0].style.width = '187.5px'
        document.getElementsByClassName('c2')[0].style.width = '187.5px'
    }, 7900);
    setTimeout(() => {
        document.getElementsByClassName('c1')[0].style.width = '0px'
        document.getElementsByClassName('c2')[0].style.width = '375px'
    }, 8600);

    setTimeout(() => {
        document.getElementsByClassName('c2')[0].style.width = '187.5px'
        document.getElementsByClassName('c3')[0].style.width = '187.5px'
    }, 9300);
    setTimeout(() => {
        document.getElementsByClassName('c2')[0].style.width = '0px'
        document.getElementsByClassName('c3')[0].style.width = '375px'
    }, 10000);

    setTimeout(() => {
        document.getElementsByClassName('c3')[0].style.width = '187.5px'
        document.getElementsByClassName('c4')[0].style.width = '187.5px'
    }, 10700);
    setTimeout(() => {
        document.getElementsByClassName('c3')[0].style.width = '0px'
        document.getElementsByClassName('c4')[0].style.width = '375px'
    }, 11400);

    setTimeout(() => {
        document.getElementsByClassName('c4')[0].style.width = '187.5px'
        document.getElementsByClassName('c5')[0].style.width = '187.5px'
    }, 12100);
    setTimeout(() => {
        document.getElementsByClassName('c4')[0].style.width = '0px'
        document.getElementsByClassName('c5')[0].style.width = '375px'
    }, 12800);

    setTimeout(() => {
        document.getElementsByClassName('c5')[0].style.width = '187.5px'
        document.getElementsByClassName('c6')[0].style.width = '187.5px'
    }, 13500);
    setTimeout(() => {
        document.getElementsByClassName('c5')[0].style.width = '0px'
        document.getElementsByClassName('c6')[0].style.width = '375px'
    }, 14200);

    setTimeout(() => {
        document.getElementsByClassName('c6')[0].style.width = '187.5px'
        document.getElementsByClassName('c7')[0].style.width = '187.5px'
    }, 14900);
    setTimeout(() => {
        document.getElementsByClassName('c6')[0].style.width = '0px'
        document.getElementsByClassName('c7')[0].style.width = '375px'
    }, 15600);

    setTimeout(() => {
        document.getElementsByClassName('c7')[0].style.width = '187.5px'
        document.getElementsByClassName('c8')[0].style.width = '187.5px'
    }, 16300);
    setTimeout(() => {
        document.getElementsByClassName('c7')[0].style.width = '0px'
        document.getElementsByClassName('c8')[0].style.width = '375px'
    }, 17000);

    setTimeout(() => {
        document.getElementsByClassName('c8')[0].style.width = '187.5px'
        document.getElementsByClassName('c9')[0].style.width = '187.5px'
    }, 17700);
    setTimeout(() => {
        document.getElementsByClassName('c8')[0].style.width = '0px'
        document.getElementsByClassName('c9')[0].style.width = '375px'
    }, 18400);

    setTimeout(() => {
        document.getElementsByClassName('c9')[0].style.width = '0px'
        document.getElementsByClassName('c10')[0].style.width = '375px'
    }, 19100);

    setTimeout(() => {
        document.getElementsByClassName('c10')[0].style.width = '0px'
        document.getElementsByClassName('c11')[0].style.width = '375px'
    }, 19800);

    setTimeout(() => {
        document.getElementsByClassName('c11')[0].style.width = '0px'
        document.getElementsByClassName('c12')[0].style.width = '375px'
    }, 20500);

    setTimeout(() => {
        document.getElementsByClassName('c12')[0].style.width = '0px'
        document.getElementsByClassName('c13')[0].style.width = '375px'
    }, 21200);

    setTimeout(() => {
        document.getElementsByClassName('c13')[0].style.width = '0px'
        document.getElementsByClassName('c14')[0].style.width = '375px'
    }, 21900);

    setTimeout(() => {
        document.getElementsByClassName('c14')[0].style.width = '0px'
        document.getElementsByClassName('c15')[0].style.width = '375px'
    }, 22600);

    setTimeout(() => {
        document.getElementsByClassName('c15')[0].style.width = '0px'
        document.getElementsByClassName('c16')[0].style.width = '375px'
    }, 23300);

    setTimeout(() => {
        document.getElementsByClassName('c16')[0].style.width = '0px'
        document.getElementsByClassName('c17')[0].style.width = '375px'
    }, 24000);

    setTimeout(() => {
        document.getElementsByClassName('c17')[0].style.width = '0px'
        document.getElementsByClassName('c18')[0].style.width = '375px'
    }, 24700);

    setTimeout(() => {
        document.getElementsByClassName('c18')[0].style.width = '0px'
        document.getElementsByClassName('c19')[0].style.width = '375px'
    }, 25400);

    setTimeout(() => {
        document.getElementsByClassName('c19')[0].style.width = '0px'
        document.getElementsByClassName('c20')[0].style.width = '375px'
    }, 26100);

    setTimeout(() => {
        document.getElementsByClassName('c20')[0].style.width = '0px'
        document.getElementsByClassName('c21')[0].style.width = '375px'
    }, 26800);

    setTimeout(() => {
        document.getElementsByClassName('c21')[0].style.width = '0px'
        document.getElementsByClassName('c22')[0].style.width = '100%'
        setTimeout(() => {
            container.style.position = 'absolute'
            if (window.matchMedia('(max-width: 720px)').matches) {
                container.style.transform = 'translate(-50%, -50%) rotate(90deg)'
            } else {
                container.style.transform = 'translate(-50%, -50%) scale(160%)'
            }
            container.style.width = '667px'
            container.style.height = '375px'
        }, 300);
    }, 27500);

    setTimeout(() => {
        document.getElementsByClassName('c22')[0].style.width = '333.5px'
        document.getElementsByClassName('c23')[0].style.width = '333.5px'
    }, 29600);

    setTimeout(() => {
        document.getElementsByClassName('c22')[0].style.width = '0px'
        document.getElementsByClassName('c23')[0].style.width = '667px'
    }, 30300);

    setTimeout(() => {
        document.getElementsByClassName('c23')[0].style.width = '333.5px'
        document.getElementsByClassName('c24')[0].style.width = '333.5px'
    }, 31000);

    setTimeout(() => {
        document.getElementsByClassName('c23')[0].style.width = '0px'
        document.getElementsByClassName('c24')[0].style.width = '667px'
    }, 31700);
}
