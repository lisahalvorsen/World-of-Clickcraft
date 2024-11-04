const model = {
    // Del 1
    app: {
        currentPage: 'homePage',
        loggedInCharacterId: 0,
        loggedInUser: 0,
        currentCharacterInfo: null,
        inGameScene: 'Map',
        selectedCategory: null,
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

    // Del 3
    users: [
        { userId: 0, username: 'Jens', password: 'jens', email: 'jens.jensen@gmail.com' },
        { userId: 1, username: 'Lars', password: 'lars', email: 'lars.larsen@gmail.com' },
        { userId: 2, username: 'Petter', password: 'petter', email: 'petter.pettersen@gmail.com' },
    ],

    characters: [
        { userId: 0, characterId: 0, classId: 0, areaId: 1, name: 'Bob', gender: '♂', picture: 'images/warriorMale.png', currentQuest: '', currentQuestStep: '', },
        { userId: 1, characterId: 1, classId: 1, areaId: 1, name: 'Jack', gender: '♂', picture: 'images/wizardMale.png', currentQuest: '', currentQuestStep: '', },
        { userId: 1, characterId: 2, classId: 5, areaId: 1, name: 'Sarah', gender: '♀', picture: 'images/hunterFemale.png', currentQuest: '', currentQuestStep: '', },
    ],

    stats: [
        { userId: 0, characterId: 0, currenthp: 100, picture: 'images/warriorMale.png', hp: 100, level: 0, atk: 20, def: 30, spd: 10, xp: 0, money: 1000 },
        { userId: 1, characterId: 1, currenthp: 60, picture: 'images/wizardMale.png', hp: 60, level: 0, atk: 30, def: 10, spd: 20, xp: 0, money: 1000 },
        { userId: 1, characterId: 2, currenthp: 60, picture: 'images/hunterFemale.png', hp: 80, level: 0, atk: 10, def: 20, spd: 30, xp: 0, money: 1000 },
    ],

    inventories: [
        { userId: 0, characterId: 0, hasKey: false, keySelected: false, pet: null, money: 1000, items: [{ name: 'Health potion', category: 'Consumables', quantity: 10, symbol: '🧪' }, { name: 'Apple', category: 'Consumables', quantity: 1, symbol: '🍎' },] },
        { userId: 1, characterId: 1, hasKey: false, keySelected: false, pet: null, money: 1000, items: [{ name: 'Health potion', category: 'Consumables', quantity: 10, symbol: '🧪' }, { name: 'Apple', category: 'Consumables', quantity: 1, symbol: '🍎' },] },
        { userId: 1, characterId: 2, hasKey: false, keySelected: false, pet: null, money: 1000, items: [{ name: 'Health potion', category: 'Consumables', quantity: 10, symbol: '🧪' }, { name: 'Apple', category: 'Consumables', quantity: 1, symbol: '🍎' },] },
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
        { id: 0, class: 'Warrior', gender: '♂', description: 'Fearless and resilient, Warriors are experts in close-range combat, relying on strength and heavy armor to withstand enemy attacks. They act as shields for their allies, charging into battle with powerful weapons. Their high defense and endurance make them ideal for those who crave direct combat and unwavering protection of their team, bringing balance between offense and defense to any skirmish.', picture: 'images/warriorMale.png', hp: 100, level: 0, atk: 20, def: 30, spd: 10, xp: 0, money: 1000 },
        { id: 1, class: 'Wizard', gender: '♂', description: 'Masters of arcane arts, Wizards wield elemental forces and magic to devastate from afar. With intellect and mystic power, they can control the battlefield, casting spells to inflict damage and support allies. While physically vulnerable, their magical range and versatility make them crucial for strategic play, perfect for those who embrace the thrill of high-risk, high-reward magical combat.', picture: 'images/wizardMale.png', hp: 60, level: 0, atk: 30, def: 10, spd: 20, xp: 0, money: 1000 },
        { id: 2, class: 'Hunter', gender: '♂', description: 'Skilled in precision and survival, Hunters use agility and stealth to take down foes with calculated ranged attacks. Masters of the wild, they use traps and swift strikes to keep enemies at bay. Though less armored, their speed and adaptability make them ideal for hit-and-run tactics, preferred by players who value quick, tactical maneuvers and striking from the shadows for victory.', picture: 'images/hunterMale.png', hp: 80, level: 0, atk: 10, def: 20, spd: 30, xp: 0, money: 1000 },
        { id: 3, class: 'Warrior', gender: '♀', description: 'Fearless and resilient, Warriors are experts in close-range combat, relying on strength and heavy armor to withstand enemy attacks. They act as shields for their allies, charging into battle with powerful weapons. Their high defense and endurance make them ideal for those who crave direct combat and unwavering protection of their team, bringing balance between offense and defense to any skirmish.', picture: 'images/warriorFemale.png', hp: 100, level: 0, atk: 20, def: 30, spd: 10, xp: 0, money: 1000 },
        { id: 4, class: 'Wizard', gender: '♀', description: 'Masters of arcane arts, Wizards wield elemental forces and magic to devastate from afar. With intellect and mystic power, they can control the battlefield, casting spells to inflict damage and support allies. While physically vulnerable, their magical range and versatility make them crucial for strategic play, perfect for those who embrace the thrill of high-risk, high-reward magical combat.', picture: 'images/wizardFemale.png', hp: 60, level: 0, atk: 30, def: 10, spd: 20, xp: 0, money: 1000 },
        { id: 5, class: 'Hunter', gender: '♀', description: 'Skilled in precision and survival, Hunters use agility and stealth to take down foes with calculated ranged attacks. Masters of the wild, they use traps and swift strikes to keep enemies at bay. Though less armored, their speed and adaptability make them ideal for hit-and-run tactics, preferred by players who value quick, tactical maneuvers and striking from the shadows for victory.', picture: 'images/hunterFemale.png', hp: 80, level: 0, atk: 10, def: 20, spd: 30, xp: 0, money: 1000 },
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

    questStatus: [
        { userId: 0, characterId: 0, caveQuest: false, desertQuest: false, forestQuest: false, mountainQuest: false, bossQuest: false },
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
        { id: 3, userId: 1, characterId: 2, name: 'Cave Boss', currentHp: 100, hp: 100, level: 3, atk: 30, def: 30, spd: 30, caveBossPresent: false },
    ],

    shop: [
        { id: 1, name: 'Pick', category: 'Equipment', description: 'A versatile item that can be used for many things', price: 100, originalPrice: 100, symbol: '⛏️', quantity: 1 },
        { id: 2, name: 'New boots', category: 'Clothing', description: 'Sturdy boots that are long lasting', price: 200, originalPrice: 200, symbol: '🥾', quantity: 1 },
        { id: 3, name: 'Owl', category: 'Pets', description: "Owl's can carry and pick up items for you", price: 300, originalPrice: 300, symbol: '🦉', quantity: 1 },
        { id: 4, name: 'Bow and arrow', category: 'Equipment', description: 'Bow and arrow made of solid materials', price: 350, originalPrice: 350, symbol: '🏹', quantity: 1 },
        { id: 5, name: 'Health potion', category: 'Consumables', description: 'A health potion that restores your HP', price: 50, originalPrice: 50, symbol: '🧪', quantity: 1 },
        { id: 6, name: 'Dagger', category: 'Equipment', description: 'A small dagger that can come in handy in combat', price: 150, originalPrice: 150, symbol: '🗡️', quantity: 1 },
        { id: 7, name: 'Apple', category: 'Consumables', description: 'A delicious red apple to enjoy', price: 5, originalPrice: 5, symbol: '🍎', quantity: 1 },
        { id: 8, name: 'Mushroom', category: 'Consumables', description: 'An edible mushroom', price: 10, originalPrice: 10, symbol: '🍄‍🟫', quantity: 1 },
        { id: 9, name: 'Monkey', category: 'Pets', description: 'A little helper', price: 250, originalPrice: 250, symbol: '🐒', quantity: 1 },
        { id: 10, name: 'Herb', category: 'Consumables', description: 'Can be used to make health potions', price: 30, originalPrice: 30, symbol: '🌿', quantity: 1 },
    ],
};