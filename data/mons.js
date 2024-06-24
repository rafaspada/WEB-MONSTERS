const mons = {
    Blazit: {
        id: 1,
        position: {
          x: 280,
          y: 325,
        },
        img: {src: '/assets/embySprite.png'},
        frames: {
          max: 4,
          hold: 30
        },
        animate: true,
        name: 'Blazit',
        attacks: [attacks.Tackle, attacks.FireBall],
        type: 'Fire'
      },

    Draggle: {
        id: 2,
        position: {
          x: 800,
          y: 100,
        },
        img: {src: '/assets/draggleSprite.png'},
        frames: {
          max: 4,
          hold: 30
        },
        animate: true,
        isEnemy: true,
        name: 'Draggle',
        attacks: [attacks.Tackle, attacks.FireBall],
        type: 'Dragon'
      },

    Bamboom: {
        id: 3,
        position: {
          x: 800,
          y: 100,
        },
        img: {src: '/assets/bamboo.png'},
        frames: {
          max: 4,
          hold: 30
        },
        animate: true,
        isEnemy: true,
        name: 'Bamboom',
        attacks: [attacks.Pound, attacks.Leafage],
        type: 'Grass'
    },

    Octelly: {
      id: 4,
      position: {
        x: 800,
        y: 100,
      },
      img: {src: '/assets/octopus.png'},
      frames: {
        max: 4,
        hold: 30
      },
      animate: true,
      isEnemy: true,
      name: 'Octelly',
      attacks: [attacks.Tackle, attacks.WaterSplash],
      type: 'Water'
  },

    Mistairy: {
      id: 5,
      position: {
        x: 800,
        y: 100,
      },
      img: {src: '/assets/spirit.png'},
      frames: {
        max: 4,
        hold: 30
      },
      animate: true,
      isEnemy: true,
      name: 'Mistairy',
      attacks: [attacks.Pound, attacks.PixieBlast],
      type: 'Fairy'
  },
}