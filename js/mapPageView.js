function mapPageView() {
    return /*HTML*/ `<div class='mapPage'>
       <!-- Added audio element for background music -->
         <!--  <audio id="backgroundMusic" autoplay loop>
               <source src="../music/background-music.mp3" type="audio/mpeg">
          </audio>-->
         
        <!-- top -->
            <!-- mapPage__top__map --> 
            <div class='mapPage__top__map'>
                 <!-- mapPage__top__images -->

                <div class='mapPage__top__map__row'>
                
                <div class='mapPage__top__map__col'><img class='water_img' src="images/water.png"></div>
                    <div class='mapPage__top__map__col'>
                        <div class='mountainIsland' onclick='goToMountainIsland()'>
                        <img class='water_img' src="images/water.png">
                            <img src="images/island.png">
                            <img class='mountain_image' src="images/mountain.png">
                        </div>
                    </div>
                    <div class='mapPage__top__map__col'>
                    <img class='water_img' src="images/water.png">
                        <div class='bridge bossBridge'>
                            <img src="images/bridge.png">
                        </div>
                    </div>
                    <div class='mapPage__top__map__col'>
                    <img class='water_img' src="images/water.png">
                    <div class='bossIsland' onclick='goToBossIsland()'>
                        <img src="images/island.png">
                        <img class='boss_image' src="images/boss.png">
                    </div>
                </div>
                    <div class='mapPage__top__map__col'><img class='fish'src="images/fish.png"></div>
                    <div class='mapPage__top__map__col'><img class='water_img' src="images/water.png"></div>
                    <div class='mapPage__top__map__col'>
                        <div class='townIsland' onclick='goToTownIsland()'>
                            <img class='townIsland_image' src="images/island.png">
                            <img class='town_image' src="images/town.png">
                        </div>
                    </div>
                    <div class='mapPage__top__map__col'><img class='water_img' src="images/water.png"></div>
                </div>
                <div class='mapPage__top__map__row'>

                <div class='mapPage__top__map__col'><img src="images/water.png"></div>
                    <div class='mapPage__top__map__col'>
                    <img class='water_img' src="images/water.png">
                        <div class='bridge forrestBridge'>
                            <img src="images/bridge.png">
                        </div>
                    </div>
                    <div class='mapPage__top__map__col'><img class='fish'src="images/fish.png"></div>
                    <div class='mapPage__top__map__col'><img class='water_img' src="images/water.png"></div>
                    <div class='mapPage__top__map__col'><img class='water_img' src="images/water.png"></div>
                   
                    
                    <div class='mapPage__top__map__col'>
                    <img class='water_img' src="images/water.png">
                        <div class='bridge townBridge'>
                                <img src="images/bridge.png">
                            </div>
                    </div>
                    <div class='mapPage__top__map__col'><img class='water_img' src="images/water.png"></div>
                    
                    
                </div>
                <div class='mapPage__top__map__row'>

                     <div class='mapPage__top__map__col'><img class='water_img' src="images/water.png"></div>
                    
                    <div class='mapPage__top__map__col'>
                    <img class='water_img' src="images/water.png">
                        <div class='forestIsland' onclick='goToforestIsland()'>
                            <img src="images/island.png">
                            <img class='forest_image' src="images/forest.png">
                        </div>
                    </div>
                    <div class='mapPage__top__map__col'>
                    <img class='water_img' src="images/water.png">
                        <div class='bridge dessertBridge'>
                            <img src="images/bridge.png">
                        </div>
                    </div>
                    <div class='mapPage__top__map__col'>
                    <img class='water_img' src="images/water.png">
                        <div class='desertIsland' onclick='goToDesertIsland()'>
                            <img src="images/island.png">
                            <img class='desert_image' src="images/desert.png">
                        </div>
                    </div>
                    <div class='mapPage__top__map__col'>
                    <img class='water_img' src="images/water.png">
                        <div class='bridge caveBridge'>
                            <img src="images/bridge.png">
                        </div>
                        
                    </div>

                    <div class='mapPage__top__map__col'>
                    <img class='water_img' src="images/water.png">
                        <div class='caveIsland' onclick='goToCaveIsland()'>
                            <img src="images/island.png">
                            <img class='cave_image' src="images/cave.png">
                        </div>
                    </div>
                     <div class='mapPage__top__map__col'><img class='water_img' src="images/water.png"></div>
                     
                </div>
        </div>
            </div>`
}