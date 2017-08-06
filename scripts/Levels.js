import {SCALE} from './Constants';

/**
 * Game levels definition.
 *
 * Adjusts the way Spaceguard is going to handle each level. The game should become more and more hard to
 * play as the user progress advances.
 *
 * @type {Object[]}
 */
export default [
    // lvl 1
    {
        time: 1, // minutes
        background: 'img-path', // image element id
        guard: {
            shield: 100, // % percent
            defuseRadius: 80
        },
        starship: {
            shield: 100 // % percent
        },
        comet: {
            speed: 7 * SCALE, // points
            damage: 10, // points
            creationRate: 15  // % percent
        },
        bomb: {
            creationRate: 35 // % percent
        },
        guardShield: {
            creationRate: 20 // % percent
        },
        starshipShield: {
            creationRate: 10 // % percent
        }
    },
    // lvl 2
    {
        time: 2,
        background: 'img-path',
        guard: {
            shield: 100,
            defuseRadius: 85
        },
        starship: {
            shield: 100
        },
        comet: {
            speed: 8 * SCALE,
            damage: 13,
            creationRate: 20  // if higher less will be created
        },
        bomb: {
            creationRate: 40
        },
        guardShield: {
            creationRate: 20
        },
        starshipShield: {
            creationRate: 12
        }
    },
    // lvl 3
    {
        time: 2,
        background: 'img-path',
        guard: {
            shield: 100,
            defuseRadius: 85
        },
        starship: {
            shield: 100
        },
        comet: {
            speed: 8 * SCALE,
            damage: 13,
            creationRate: 25  // if higher less will be created
        },
        bomb: {
            creationRate: 40
        },
        guardShield: {
            creationRate: 22
        },
        starshipShield: {
            creationRate: 15
        }
    },
    // lvl 4
    {
        time: 3,
        background: 'img-path',
        guard: {
            shield: 100,
            defuseRadius: 90
        },
        starship: {
            shield: 100
        },
        comet: {
            speed: 8 * SCALE,
            damage: 20,
            creationRate: 35  // if higher less will be created
        },
        bomb: {
            creationRate: 45
        },
        guardShield: {
            creationRate: 30
        },
        starshipShield: {
            creationRate: 25
        }
    },
    // lvl 5
    {
        time: 3,
        background: 'img-path',
        guard: {
            shield: 100,
            defuseRadius: 90
        },
        starship: {
            shield: 100
        },
        comet: {
            speed: 9 * SCALE,
            damage: 20,
            creationRate: 40  // if higher less will be created
        },
        bomb: {
            creationRate: 50
        },
        guardShield: {
            creationRate: 35
        },
        starshipShield: {
            creationRate: 25
        }
    },
    // lvl 6
    {
        time: 3,
        background: 'img-path',
        guard: {
            shield: 100,
            defuseRadius: 95
        },
        starship: {
            shield: 100
        },
        comet: {
            speed: 9 * SCALE,
            damage: 20,
            creationRate: 40  // if higher less will be created
        },
        bomb: {
            creationRate: 50
        },
        guardShield: {
            creationRate: 35
        },
        starshipShield: {
            creationRate: 25
        }
    },
    // lvl 7
    {
        time: 3,
        background: 'img-path',
        guard: {
            shield: 100,
            defuseRadius: 95
        },
        starship: {
            shield: 100
        },
        comet: {
            speed: 9 * SCALE,
            damage: 20,
            creationRate: 40  // if higher less will be created
        },
        bomb: {
            creationRate: 50
        },
        guardShield: {
            creationRate: 35
        },
        starshipShield: {
            creationRate: 25
        }
    },
    // lvl 8
    {
        time: 3,
        background: 'img-path',
        guard: {
            shield: 100,
            defuseRadius: 95
        },
        starship: {
            shield: 100
        },
        comet: {
            speed: 9 * SCALE,
            damage: 20,
            creationRate: 40  // if higher less will be created
        },
        bomb: {
            creationRate: 50
        },
        guardShield: {
            creationRate: 35
        },
        starshipShield: {
            creationRate: 25
        }
    },
    // lvl 9
    {
        time: 3,
        background: 'img-path',
        guard: {
            shield: 100,
            defuseRadius: 100
        },
        starship: {
            shield: 100
        },
        comet: {
            speed: 9 * SCALE,
            damage: 20,
            creationRate: 40  // if higher less will be created
        },
        bomb: {
            creationRate: 50
        },
        guardShield: {
            creationRate: 35
        },
        starshipShield: {
            creationRate: 25
        }
    },
    // lvl 10
    {
        time: 3,
        background: 'img-path',
        guard: {
            shield: 100,
            defuseRadius: 110
        },
        starship: {
            shield: 100
        },
        comet: {
            speed: 9 * SCALE,
            damage: 20,
            creationRate: 40  // if higher less will be created
        },
        bomb: {
            creationRate: 50
        },
        guardShield: {
            creationRate: 35
        },
        starshipShield: {
            creationRate: 25
        }
    }
];