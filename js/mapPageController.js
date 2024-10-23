function goToTownIsland() {
     alert('Town Island clicked!');
    model.app.currentPage = 'islandQuestView';
    updateView();
}
function goToCaveIsland() {
     alert('Cave Island clicked!'); 
    model.app.currentPage = 'caveQuestView';
    updateView();
}
function goToDesertIsland() {
     alert('Desert Island clicked!');
   // window.location.href = 'desertPage.html'
   model.app.currentPage = 'desertQuestView';
    updateView();
}
function goToforestIsland() {
     alert('Forest Island clicked!');
    model.app.currentPage = 'forestQuestView';
    updateView();
}
function goToMountainIsland() {
     alert('Mountain Island clicked!');
    model.app.currentPage = 'mountainQuestView';
    updateView();
}
function goToBossIsland() {
     alert('Boss Island clicked!');
    model.app.currentPage = 'bossQuestView';
    updateView();

}
function logOutButton(){
    alert('logging Out Now!');
     window.location.href = 'You_are_logged_out_now'
}