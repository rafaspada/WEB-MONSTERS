const audio = {
    Map: new Howl({
        src: './audio/map.wav',
        html5: true,
        volume: 0.4
    }),
    initBattle: new Howl({
        src: './audio/initBattle.wav',
        html5: true,
        volume: 0.01
    }),
    battle: new Howl({
        src: './audio/battle.mp3',
        html5: true,
        volume: 0.3
    }),
    tackleHit: new Howl({
        src: './audio/tackleHit.wav',
        html5: true,
        volume: 0.3
    }),
    fireballHit: new Howl({
        src: './audio/fireballHit.wav',
        html5: true,
        volume: 0.4
    }),
    initFireball: new Howl({
        src: './audio/initFireball.wav',
        html5: true,
        volume: 0.4
    }),
    victory: new Howl({
        src: './audio/victory.wav',
        html5: true,
        volume: 1
    })
}