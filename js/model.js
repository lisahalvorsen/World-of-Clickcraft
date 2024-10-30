const model = {
    // Del 1
    app: {
        currentPage: 'homePage', //'login', 'register', 'createNew', 'map', 'shop', 'town', 'shop', 'cave', 'fight',game
        userId: null,
        loggedInCharacterId: 0,
        loggedInUser: 0,
        currentCharacterInfo: null,
        inGameScene: 'Map'
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
        { userId: 0, characterId: 0, classId: 0, areaId: 1, name: 'Bob', gender: '♂', picture: '../images/warriorMale.png', currentQuest: '', currentQuestStep: '', },
        { userId: 1, characterId: 1, classId: 1, areaId: 1, name: 'Jack', gender: '♂', picture: '../images/wizardMale.png', currentQuest: '', currentQuestStep: '', },
        { userId: 1, characterId: 2, classId: 5, areaId: 1, name: 'Sarah', gender: '♀', picture: '../images/hunterFemale.png', currentQuest: '', currentQuestStep: '', },
    ],

    stats: [
        { userId: 0, characterId: 0, currenthp: 100, picture: '../images/warriorMale.png', hp: 100, level: 0, atk: 20, def: 30, spd: 10, xp: 0, money: 1000 },
        { userId: 1, characterId: 1, currenthp: 60, picture: '../images/wizardMale.png', hp: 60, level: 0, atk: 30, def: 10, spd: 20, xp: 0, money: 1000 },
        { userId: 1, characterId: 2, currenthp: 60, picture: '../images/hunterFemale.png', hp: 80, level: 0, atk: 10, def: 20, spd: 30, xp: 0, money: 1000 },
    ],

    inventories: [
        { userId: 0, characterId: 0, hasKey: false, keySelected: false, pet: null, money: 1000, items: [{ name: 'healthpotion', count: 10, symbol: '🧪' }, { name: 'Apple', count: 1, symbol: '🍎' },] },
        { userId: 1, characterId: 1, hasKey: false, keySelected: false, pet: null, money: 1000, items: [{ name: 'healthpotion', count: 10, symbol: '🧪' }, { name: 'Apple', count: 1, symbol: '🍎' },] },
        { userId: 1, characterId: 2, hasKey: false, keySelected: false, pet: null, money: 1000, items: [{ name: 'healthpotion', count: 10, symbol: '🧪' }, { name: 'Apple', count: 1, symbol: '🍎' },] },
    ],

    messageLog: [
        { userId: 0, characterId: 0, text: ['Welcome! Go to Town if you need a quest, else you may explore the World of ClickCraft!'] },
        { userId: 1, characterId: 1, text: ['Welcome! Go to Town if you need a quest, else you may explore the World of ClickCraft!'] },
        { userId: 1, characterId: 2, text: ['Welcome! Go to Town if you need a quest, else you may explore the World of ClickCraft!'] },
    ],

    equippedItems: [
        { userId: 0, characterId: 0, weaponId: 1, armorId: 1, bootsId: 1 },
        { userId: 1, characterId: 1, weaponId: 3, armorId: 3, bootsId: 1 },
        { userId: 1, characterId: 2, weaponId: 5, armorId: 5, bootsId: 1 },
    ],

    classes: [
        { id: 0, class: 'Warrior', gender: '♂', description: 'blah blah blah', picture: '../images/warriorMale.png', hp: 100, level: 0, atk: 20, def: 30, spd: 10, xp: 0, money: 1000 },
        { id: 1, class: 'Wizard', gender: '♂', description: 'blah blah blah', picture: '../images/wizardMale.png', hp: 60, level: 0, atk: 30, def: 10, spd: 20, xp: 0, money: 1000 },
        { id: 2, class: 'Hunter', gender: '♂', description: 'blah blah blah', picture: '../images/hunterMale.png', hp: 80, level: 0, atk: 10, def: 20, spd: 30, xp: 0, money: 1000 },
        { id: 3, class: 'Warrior', gender: '♀', description: 'blah blah blah', picture: '../images/warriorFemale.png', hp: 100, level: 0, atk: 20, def: 30, spd: 10, xp: 0, money: 1000 },
        { id: 4, class: 'Wizard', gender: '♀', description: 'blah blah blah', picture: '../images/wizardFemale.png', hp: 60, level: 0, atk: 30, def: 10, spd: 20, xp: 0, money: 1000 },
        { id: 5, class: 'Hunter', gender: '♀', description: 'blah blah blah', picture: '../images/hunterFemale.png', hp: 80, level: 0, atk: 10, def: 20, spd: 30, xp: 0, money: 1000 },
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
        { id: 1, userId: 0, characterId: 0, name: 'Cave Quest', currentQuestStep: 'Kill monster', progress: 0, questFinished: false, stoneWallPresent: true, doorPresent: false, stoneCount: 5 },
        { id: 2, userId: 0, characterId: 0, name: 'Cave monster', currentHp: 100, hp: 100, level: 1, atk: 10, def: 10, spd: 10, caveMonsterPresent: true },
        { id: 3, userId: 0, characterId: 0, name: 'Cave Boss', currentHp: 100, hp: 100, level: 3, atk: 30, def: 30, spd: 30, caveBossPresent: false },
        { id: 1, userId: 1, characterId: 1, name: 'Cave Quest', currentQuestStep: 'Kill monster', progress: 0, questFinished: false, stoneWallPresent: true, doorPresent: false, stoneCount: 5 },
        { id: 2, userId: 1, characterId: 1, name: 'Cave monster', currentHp: 100, hp: 100, level: 1, atk: 10, def: 10, spd: 10, caveMonsterPresent: true },
        { id: 3, userId: 1, characterId: 1, name: 'Cave Boss', currentHp: 100, hp: 100, level: 3, atk: 30, def: 30, spd: 30, caveBossPresent: false },
        { id: 1, userId: 1, characterId: 2, name: 'Cave Quest', currentQuestStep: 'Kill monster', progress: 0, questFinished: false, stoneWallPresent: true, doorPresent: false, stoneCount: 5 },
        { id: 2, userId: 1, characterId: 2, name: 'Cave monster', currentHp: 100, hp: 100, level: 1, atk: 10, def: 10, spd: 10, caveMonsterPresent: true },
        { id: 3, userId: 1, characterId: 2, name: 'Cave Boss', currentHp: 100, hp: 100, level: 3, atk: 30, def: 30, spd: 30, caveBossPresent: false }
    ],

    shop: [
        { id: 1, name: 'Pick', category: 'Equipment', description: 'A versatile item that can be used for many things', price: 150, symbol: '⛏️' },
        { id: 2, name: 'New boots', category: 'Clothing', description: 'Sturdy boots that are long lasting', price: 200, symbol: '🥾' },
        { id: 3, name: 'Owl', category: 'Pets', description: "Owl's can carry and pick up items for you", price: 300, symbol: '🦉' },
        { id: 4, name: 'Bow and arrow', category: 'Equipment', description: 'Bow and arrow made of solid materials', price: 350, symbol: '🏹' },
        { id: 5, name: 'Health potion', category: 'Consumables', description: 'A health potion that restores your HP', price: 50, symbol: '🧪' },
    ],
};