const player = new Plyr('#player');

player.source = {
    type: 'video',
    sources: [{
            src: 'https://d3afmojm4b7xq7.cloudfront.net/daed48a0-139e-42be-a4ea-ad54f45fc983/FileGroup1/BigBuckBunny_480.mp4',
            type: 'video/mp4',
            size: 480,
        },
        {
            src: 'https://d3afmojm4b7xq7.cloudfront.net/daed48a0-139e-42be-a4ea-ad54f45fc983/FileGroup1/BigBuckBunny_720.mp4',
            type: 'video/mp4',
            size: 720,
        },
        {
            src: 'https://d3afmojm4b7xq7.cloudfront.net/daed48a0-139e-42be-a4ea-ad54f45fc983/FileGroup1/BigBuckBunny_1080.mp4',
            type: 'video/mp4',
            size: 1080,
        },
    ],
    poster: 'thumb.jpg',
};

// Expose player so it can be used from the console
window.player = player;