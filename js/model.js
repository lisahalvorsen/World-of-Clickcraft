const model = {
    // Del 1
    app: {
        currentPage: 'homePage', //'login', 'register', 'createNew', 'map', 'shop', 'town', 'shop', 'cave', 'fight'
        userId: null,
        loggedInUser: '',
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
        { userId: 3, username: 'Jens', password: 'jens', email: 'jens.jensen@gmail.com' },
        { userId: 1, username: 'Lars', password: 'lars', email: 'lars.larsen@gmail.com' },
    ],

    characters: [
        { userId: 0, characterId: 0, classId: 1, areaId: 1 },
        { userId: 1, characterId: 1, classId: 2, areaId: 1 },
    ],

    stats: [
        { userId: 0, characterId: 0, hp: 100, level: 0, atk: 20, def: 30, spd: 10 },
        { userId: 1, characterId: 1, hp: 60, level: 0, atk: 30, def: 10, spd: 20 },
    ],

    inventories: [
        { userId: null, characterId: null, hasKey: false, money: 1000, pet: null },
    ],

    equippedItems: [
        { userId: null, characterId: null, weaponId: null, armorId: null, bootsId: null },
    ],

    classes: [
        { id: 1, class: 'Warrior', description: 'blah blah blah', picture: '🧑‍🚒', hp: 100, level: 0, atk: 20, def: 30, spd: 10 },
        { id: 2, class: 'Wizard', description: 'blah blah blah', picture:'🧙‍♂️', hp: 60, level: 0, atk: 30, def: 10, spd: 20 },
        { id: 3, class: 'Hunter', description: 'blah blah blah', picture: '🥷', hp: 80, level: 0, atk: 10, def: 20, spd: 30 },
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
        { id: 1, name: 'Cave Quest', currentMission: 'kill monster', progress: 0, },
    ],
};