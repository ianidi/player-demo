function initPlayer(elem, instance) {
    let res;
    let httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", elem.dataset.source, true);
    httpRequest.send();
    httpRequest.addEventListener("readystatechange", function() {
        if (this.readyState === this.DONE) {
            res = JSON.parse(this.response);
            instance.source = res;
        }
    });

}

const players = Array.from(document.querySelectorAll('.js-player')).map(elem => {
    const player = new Plyr(elem);
    initPlayer(elem, player);
});