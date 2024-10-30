function bossQuestView() {
    let userId = model.app.loggedInUser
    let charactedId = model.app.loggedInCharacterId
    let questStatus = findQuestStatus(userId, charactedId)
    let messageLog = findCharacterMessageLog(userId, charactedId)
    let characterInfo = findCharacterInfo(userId, charactedId)

    if (questStatus.caveQuest===false||questStatus.desertQuest===false||questStatus.forestQuest===false||questStatus.mountainQuest===false) {
        messageLog.text.push(`Town Elder: Remember ${characterInfo.name} you can only reach the Demon Lord after you conquer the Army Generals who guard their territories.`)
       return mapPageView()
   
    } else {
        model.app.inGameScene = 'Boss Quest'
        return /*HTML*/`  
        <div class='bossQuest'></div>
        `;
    }
}
