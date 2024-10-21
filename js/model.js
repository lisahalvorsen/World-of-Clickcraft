const model = {
    // Del 1
    app: {
        currentPage: 'homePage', //'login', 'register', 'createNew', 'map', 'shop', 'town', 'shop', 'cave', 'fight',game
        userId: null,
        loggedInCharacterId: 0,
        loggedInUser: 0,
    },

    // Del 2
    inputs: {
        loginPage: {
            email: '',
            password: '',
        },
        registerPage: {
            username: '',
            email: '',
            password: '',
            userId: null,
        },
        createNewCharacterPage: {
            characterName: '',
            gender: '',
            classId: null,
        },
    },

    // Del 3 Data
    users: [
        { userId: 0, username: 'Jens', password: 'jens', email: 'jens.jensen@gmail.com' },
        { userId: 1, username: 'Lars', password: 'lars', email: 'lars.larsen@gmail.com' },
        { userId: 2, username: 'Petter', password: 'petter', email: 'petter.pettersen@gmail.com' },
    ],

    characters: [
        { userId: 0, characterId: 0, classId: 1, areaId: 1, name: 'Bob', gender: '♂', picture: '../images/warriorMale.jpg' },
        { userId: 1, characterId: 1, classId: 2, areaId: 1, name: 'Jack', gender: '♂', picture: '../images/wizardMale.jpg' },
        { userId: 1, characterId: 2, classId: 3, areaId: 1, name: 'Sarah', gender: '♀', picture: '../images/hunterFemale.jpg' },
    ],

    stats: [
        { userId: 0, characterId: 0, currenthp: 100, hp: 100, level: 0, atk: 20, def: 30, spd: 10, xp:0, money: 1000},
        { userId: 1, characterId: 1, currenthp: 60, hp: 60, level: 0, atk: 30, def: 10, spd: 20, xp:0, money: 1000},
    ],

    inventories: [
        { userId: null, characterId: null, hasKey: false, pet: null },
    ],

    equippedItems: [
        { userId: null, characterId: null, weaponId: null, armorId: null, bootsId: null },
    ],

    classes: [
        { id: 1, class: 'Warrior', description: 'blah blah blah', picture: '🧑‍🚒', hp: 100, level: 0, atk: 20, def: 30, spd: 10, xp: 0, money:1000},
        { id: 2, class: 'Wizard', description: 'blah blah blah', picture: '🧙‍♂️', hp: 60, level: 0, atk: 30, def: 10, spd: 20, xp: 0, money:1000},
        { id: 3, class: 'Hunter', description: 'blah blah blah', picture: '🥷', hp: 80, level: 0, atk: 10, def: 20, spd: 30, xp: 0, money:1000},
    ],

    weapons: [
        { id: 1, class: 'Warrior', name: 'Old sword', description: '+5 atk', atk: 5 },
        { id: 2, class: 'Warrior', name: 'New sword', description: '+15 atk', atk: 15 },
        { id: 3, class: 'Wizard', name: 'Old staff', description: '+5 atk', atk: 5 },
        { id: 4, class: 'Wizard', name: 'New staff', description: '+15 atk', atk: 15 },
        { id: 5, class: 'Hunter', name: 'Old bow', description: '+5 atk', atk: 5 },
        { id: 6, class: 'Hunter', name: 'New bow', description: '+15 atk', atk: 15 },
    ],

    armors: [
        { id: 1, class: 'Warrior', name: 'Old chainmail armor', description: '+5 def', def: 5 },
        { id: 2, class: 'Warrior', name: 'New chainmail armor', description: '+15 def', def: 15 },
        { id: 3, class: 'Wizard', name: 'Old cloak', description: '+5 def', def: 5 },
        { id: 4, class: 'Wizard', name: 'New cloak', description: '+15 def', def: 15 },
        { id: 5, class: 'Hunter', name: 'Old leather armor', description: '+5 def', def: 5 },
        { id: 6, class: 'Hunter', name: 'New leather armor', description: '+15 def', def: 15 },
    ],

    boots: [
        { id: 1, name: 'Old sandals', description: '+5 spd', spd: 5 },
        { id: 2, name: 'New sandals', description: '+15 spd', spd: 15 },
    ],

    caveQuest: [
        { id: 1, name: 'Cave Quest', currentMission: 'kill monster', progress: 0, abondenQuest: false, },
        { id: 2, name: 'Cave monster', currentHp: 100, hp: 100, level: 1, atk: 10, def: 10, spd: 10 },

    ],
};