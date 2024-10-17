const model = {
    // Del 1
    app: {
        currentPage: 'characterSelection', //'login', 'register', 'createNew', 'map', 'shop', 'town', 'shop', 'cave', 'fight'
        userId: 1,
    },

    // Del 2
    inputs: {
        loginPage: {
            email: 'ola@gmail.com',
            password: 'ola',
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
<<<<<<< Updated upstream
        { userId: 0, username: 'username', password: 'password', email: 'example@Email.com' },
=======
        { userId: 1, username: 'Ola', password: 'ola', email: 'ola@gmail.com' },
        { userId: 2, username: 'Per', password: 'per', email: 'per@gmail.com' },
>>>>>>> Stashed changes
    ],

    characters: [
        { userId: null, characterId: null, classId: null, areaId: 1 },
    ],

    stats: [
        { userId: null, characterId: null, hp: null, level: null, atk: null, def: null, spd: null },
    ],

    inventories: [
        { userId: null, characterId: null, hasKey: false, money: 1000, pet: null },
    ],

    equippedItems: [
        { userId: null, characterId: null, weapon: null, armor: null, boots: null },
    ],

    classes: [
        { id: 1, class: 'Warrior', description: 'blah blah blah', picture: 'picture', hp: 100, level: 0, atk: 20, def: 30, spd: 10 },
        { id: 2, class: 'Wizard', description: 'blah blah blah', picture: 'picture', hp: 60, level: 0, atk: 30, def: 10, spd: 20 },
        { id: 3, class: 'Hunter', description: 'blah blah blah', picture: 'picture', hp: 80, level: 0, atk: 10, def: 20, spd: 30 },
    ],

    weapons: [
        { id: 1, name: 'Old sword', description: '+5 atk', atk: 5 },
        { id: 2, name: 'New sword', description: '+15 atk', atk: 15 },
        { id: 3, name: 'Old staff', description: '+5 atk', atk: 5 },
        { id: 4, name: 'New staff', description: '+15 atk', atk: 15 },
        { id: 5, name: 'Old bow', description: '+5 atk', atk: 5 },
        { id: 6, name: 'New bow', description: '+15 atk', atk: 15 },
    ],

    armors: [
        { id: 1, name: 'Old chainmail armor', description: '+5 def', def: 5 },
        { id: 2, name: 'New chainmail armor', description: '+15 def', def: 15 },
        { id: 3, name: 'Old cloak', description: '+5 def', def: 5 },
        { id: 4, name: 'New cloak', description: '+15 def', def: 15 },
        { id: 5, name: 'Old leather armor', description: '+5 def', def: 5 },
        { id: 6, name: 'New leather armor', description: '+15 def', def: 15 },
    ],

    boots: [
        { id: 1, name: 'Old sandals', description: '+5 spd', spd: 5 },
        { id: 2, name: 'New sandals', description: '+15 spd', spd: 15 },
    ],
};