function goToTownIsland() {
    //  alert('Town Island clicked!');
     gameView = townQuestView();
     gameTemplateView();
}
function goToCaveIsland() {
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
function logOutButton(){
    alert('logging Out Now!');
     window.location.href = 'You_are_logged_out_now'
}