function generateMission() {
    let userId = model.app.loggedInUser
    let charactedId = model.app.loggedInCharacterId
    let characterInfo = findCharacterInfo(userId, charactedId)
    let intro = `Town Elder: Greetings, ${characterInfo.name}! We are deeply grateful for your help. 
    To free our land, you must defeat the Demon Lord and their formidable army. 
    You can track your quest's progress on the Mission Board below. 
    To reach the Demon Lord, you must first conquer the Army Generals who guard their territories: the Cave, the Desert, the Forest, and the Mountain. Good luck, hero!`;
    let statusMessage = `Town Elder: Heal up ${characterInfo.name}! You still have monsters to defeat: ${characterInfo.currentQuest} - ${characterInfo.currentQuestStep}.`;
    let messageLog = findCharacterMessageLog(userId, charactedId)
    let questStatus = findQuestStatus(userId, charactedId)
    let newQuestStatus = {userId:userId, characterId:charactedId, caveQuest:false, desertQuest: false, forestQuest: false, mountainQuest: false, bossQuest: false}
    let characterStats = findCharacterStats(userId, charactedId)
    if (questStatus) {
        messageLog.text.push(statusMessage)
        characterStats.currenthp=characterStats.hp
    } else {
        messageLog.text.push(intro)
        model.questStatus.push(newQuestStatus)
    }
    gameTemplateView()
}