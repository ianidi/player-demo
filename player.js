const players = Array.from(document.querySelectorAll(".js-player")).map(
  (elem) => {
    const player = new Plyr(elem);
  }
);
