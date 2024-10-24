function goToTownIsland() {
    //  alert('Town Island clicked!');
     gameView = townQuestView();
     gameTemplateView();
}
function goToCaveIsland() {
    model.app.currentCharacterInfo.currentQuest = model.caveQuest[0].name;
    model.app.currentCharacterInfo.currentQuestStep = model.caveQuest[0].currentQuestStep;
    gameView = caveQuestView();
    gameTemplateView();
}
function goToDesertIsland() {
    //  alert('Desert Island clicked!');
   gameView = desertQuestView();
   gameTemplateView();
}
function goToforestIsland() {
    //  alert('Forest Island clicked!');
     gameView = forestQuestView();
    gameTemplateView();
}
function goToMountainIsland() {
    //  alert('Mountain Island clicked!');
     gameView = mountainQuestView();
    gameTemplateView();
}
function goToBossIsland() {
    //  alert('Boss Island clicked!');
     gameView = bossQuestView();
    gameTemplateView();

}
