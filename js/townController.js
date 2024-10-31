function generateMission() {
    let userId = model.app.loggedInUser
    let charactedId = model.app.loggedInCharacterId
    let characterInfo = findCharacterInfo(userId, charactedId)
    let intro = `Town Elder: Welcome, brave ${characterInfo.name}! Our gratitude for your courage knows no bounds. To free our land from darkness, you must defeat the Demon Lord and their fearsome army.
    Your journey will be fraught with danger, but fear not—you can track your progress on the Mission Board below. To reach the Demon Lord, you must first overcome the Army Generals who guard their domains: the Cave, the Desert, the Forest, and the Mountain.
    Begin your trials in the Cave. Should you need respite, return here to the town, and I will help restore your strength. Go forth with courage, hero, and may fortune be on your side!`;
    let statusMessage = `Town Elder: Heal up ${characterInfo.name}! You still have monsters to defeat. ${characterInfo.currentQuest} - ${characterInfo.currentQuestStep}.`;
    let messageLog = findCharacterMessageLog(userId, charactedId)
    let questStatus = findQuestStatus(userId, charactedId)
    let newQuestStatus = {userId:userId, characterId:charactedId, caveQuest:false, desertQuest: false, forestQuest: false, mountainQuest: false, bossQuest: false}
    let characterStats = findCharacterStats(userId, charactedId)
    
    if (questStatus) {
        addMessage(messageLog, statusMessage)
        characterStats.currenthp=characterStats.hp
    } else {
        addMessage(messageLog, intro)
        characterInfo.currentQuest = 'Cave Quest'
        model.questStatus.push(newQuestStatus)
    }
    gameTemplateView()
}

