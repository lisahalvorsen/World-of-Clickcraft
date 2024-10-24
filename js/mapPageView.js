function mapPageView() {
    return /*HTML*/ `<div class='mapPage'>
       <!-- Added audio element for background music -->
        <audio id="backgroundMusic" autoplay loop>
             <source src="../music/background-music.mp3" type="audio/mpeg">
        </audio>
        <!-- top -->
            <!-- mapPage__top__map --> 
            <div class='mapPage__top__map'>
                 <!-- mapPage__top__images -->

                <div class='mapPage__top__map__row'>
                
                <div class='mapPage__top__map__col'><img class='water_img' src="../images/water.png"></div>
                    <div class='mapPage__top__map__col'>
                        <div class='mountainIsland' onclick='goToMountainIsland()'>
                        <img class='water_img' src="../images/water.png">
                            <img src="../images/island.png">
                            <img class='mountain_image' src="../images/mountain.png">
                        </div>
                    </div>
                    <div class='mapPage__top__map__col'>
                    <img class='water_img' src="../images/water.png">
                        <div class='bridge bossBridge'>
                            <img src="../images/bridge.png">
                        </div>
                    </div>
                    <div class='mapPage__top__map__col'>
                    <img class='water_img' src="../images/water.png">
                    <div class='bossIsland' onclick='goToBossIsland()'>
                        <img src="../images/island.png">
                        <img class='boss_image' src="../images/boss.png">
                    </div>
                </div>
                    <div class='mapPage__top__map__col'><img class='fish'src="../images/fish.png"></div>
                    <div class='mapPage__top__map__col'><img class='water_img' src="../images/water.png"></div>
                    <div class='mapPage__top__map__col'>
                        <div class='townIsland' onclick='goToTownIsland()'>
                            <img class='townIsland_image' src="../images/island.png">
                            <img class='town_image' src="../images/town.png">
                        </div>
                    </div>
                    <div class='mapPage__top__map__col'><img class='water_img' src="../images/water.png"></div>
                </div>
                <div class='mapPage__top__map__row'>

                <div class='mapPage__top__map__col'><img src="../images/water.png"></div>
                    <div class='mapPage__top__map__col'>
                    <img class='water_img' src="../images/water.png">
                        <div class='bridge forrestBridge'>
                            <img src="../images/bridge.png">
                        </div>
                    </div>
                    <div class='mapPage__top__map__col'><img class='fish'src="../images/fish.png"></div>
                    <div class='mapPage__top__map__col'><img class='water_img' src="../images/water.png"></div>
                    <div class='mapPage__top__map__col'><img class='water_img' src="../images/water.png"></div>
                   
                    
                    <div class='mapPage__top__map__col'>
                    <img class='water_img' src="../images/water.png">
                        <div class='bridge townBridge'>
                                <img src="../images/bridge.png">
                            </div>
                    </div>
                    <div class='mapPage__top__map__col'><img class='water_img' src="../images/water.png"></div>
                    
                    
                </div>
                <div class='mapPage__top__map__row'>

                     <div class='mapPage__top__map__col'><img class='water_img' src="../images/water.png"></div>
                    
                    <div class='mapPage__top__map__col'>
                    <img class='water_img' src="../images/water.png">
                        <div class='forestIsland' onclick='goToforestIsland()'>
                            <img src="../images/island.png">
                            <img class='forest_image' src="../images/forest.png">
                        </div>
                    </div>
                    <div class='mapPage__top__map__col'>
                    <img class='water_img' src="../images/water.png">
                        <div class='bridge dessertBridge'>
                            <img src="../images/bridge.png">
                        </div>
                    </div>
                    <div class='mapPage__top__map__col'>
                    <img class='water_img' src="../images/water.png">
                        <div class='desertIsland' onclick='goToDesertIsland()'>
                            <img src="../images/island.png">
                            <img class='desert_image' src="../images/desert.png">
                        </div>
                    </div>
                    <div class='mapPage__top__map__col'>
                    <img class='water_img' src="../images/water.png">
                        <div class='bridge caveBridge'>
                            <img src="../images/bridge.png">
                        </div>
                        
                    </div>

                    <div class='mapPage__top__map__col'>
                    <img class='water_img' src="../images/water.png">
                        <div class='caveIsland' onclick='goToCaveIsland()'>
                            <img src="../images/island.png">
                            <img class='cave_image' src="../images/cave.png">
                        </div>
                    </div>
                     <div class='mapPage__top__map__col'><img class='water_img' src="../images/water.png"></div>
                     
                </div>
        </div>
            </div>`
}


// document.getElementById("app").innerHTML = /*HTML*/ `
// <!-- mapPage Main div -->
// <div class='mapPage'>
//     <!-- top -->
//     <div class='mapPage__top'>

//         <!-- mapPage__top__map -->
        
//         <div class='mapPage__top__map'>

//             <div class='mapPage__top__map__heading'>
//                 <h1>Map</h1>
//             </div>
//              <!-- mapPage__top__images -->

//             <div class='mapPage__top__map__row'>

//                 <div class='mapPage__top__map__col'><img src="../images/water.png"></div>
//                 <div class='mapPage__top__map__col'>
//                     <div class='mountainIsland' onclick='goToMountainIsland()'>
//                         <img src="../images/island.png">
//                         <img class='mountain_image' src="../images/mountain.png">
//                     </div>
//                 </div>
//                 <div class='mapPage__top__map__col'>
//                     <div class='bridge bossBridge'>
//                         <img src="../images/bridge.png">
//                     </div>
//                 </div>
//                 <div class='mapPage__top__map__col'>
//                 <div class='bossIsland' onclick='goToBossIsland()'>
//                     <img src="../images/island.png">
//                     <img class='boss_image' src="../images/boss.png">
//                 </div>
//             </div>
//                 <div class='mapPage__top__map__col'><img class='fish'src="../images/fish.png"></div>
//                 <div class='mapPage__top__map__col'><img src="../images/water.png"></div>
//                 <div class='mapPage__top__map__col'>
//                     <div class='townIsland' onclick='goToTownIsland()'>
//                         <img class='townIsland_image' src="../images/island.png">
//                         <img class='town_image' src="../images/town.png">
//                     </div>
//                 </div>
                
//             </div>
//             <div class='mapPage__top__map__row'>

//                 <div class='mapPage__top__map__col'><img src="../images/water.png"></div>
//                 <div class='mapPage__top__map__col'>
//                     <div class='bridge forrestBridge'>
//                         <img src="../images/bridge.png">
//                     </div>
//                 </div>
//                 <div class='mapPage__top__map__col'><img class='fish'src="../images/fish.png"></div>
//                 <div class='mapPage__top__map__col'><img src="../images/water.png"></div>
//                 <div class='mapPage__top__map__col'><img src="../images/water.png"></div>
                
               
                
//                 <div class='mapPage__top__map__col'>
//                 <div class='mapPage__top__map__col'><img src="../images/water.png"></div>
//                     <div class='bridge townBridge'>
//                             <img src="../images/bridge.png">
//                         </div>
//                     </div>
//                 <div class='mapPage__top__map__col'></div>
                
            
//             </div>
//             <div class='mapPage__top__map__row'>

//                 <div class='mapPage__top__map__col'><img src="../images/water.png"></div>
                
//                 <div class='mapPage__top__map__col'>
//                     <div class='forestIsland' onclick='goToforestIsland()'>
//                         <img src="../images/island.png">
//                         <img class='forest_image' src="../images/forest.png">
//                     </div>
//                 </div>
//                 <div class='mapPage__top__map__col'>
//                     <div class='bridge dessertBridge'>
//                         <img src="../images/bridge.png">
//                     </div>
//                 </div>
//                 <div class='mapPage__top__map__col'>
//                     <div class='desertIsland' onclick='goToDesertIsland()'>
//                         <img src="../images/island.png">
//                         <img class='desert_image' src="../images/desert.png">
//                     </div>
//                 </div>
//                 <div class='mapPage__top__map__col'>
//                     <div class='bridge caveBridge'>
//                         <img src="../images/bridge.png">
//                     </div>
                    
//                 </div>

//                 <div class='mapPage__top__map__col'>
//                     <div class='caveIsland' onclick='goToCaveIsland()'>
//                         <img src="../images/island.png">
//                         <img class='cave_image' src="../images/cave.png">
//                     </div>
//                 </div>
//                 <div class='mapPage__top__map__col'><img src="../images/water.png"></div>
        
//             </div>

//         </div><!-- end of mapPage__top__map -->


//         <!-- mapPage__top__inventory -->
//         <div class='mapPage__top__inventory'>
//                 <h1>Inventory</h1>
//             <div><img src="../images/rock.png">
//                 <p>x 20</p>
//                 <img src="../images/rope.png">
//                 <p>x 20</p>
//             </div>
//             <div><img src="../images/busker.png">
//                 <p>x 20</p>
//                 <img src="../images/bottle.png">
//                 <p>x 20</p>
//             </div>
        
//         </div><!-- end of mapPage__top__inventory -->

//     </div> <!-- end top -->
    

//     <!-- bottom -->
//     <div class='mapPage__bottom'>
//         <div class='mapPage__bottom__img'><img class='wizard' src="../images/wizard.png"></div>
//         <div class='mapPage__bottom__score'>
//             <h2>ATK: 45, DEF: 30, SPD: 35</h2>
//             <br>
//             <h2>Weapon : Old Staff</h2>
//             <h2>Armoer : Old Clock</h2>
//             <h2>Boots : Old Sandals</h2>
//         </div>
//         <div class='mapPage__bottom__msg'>
//             <h1>Messages/Dialogue </h1>
//         </div>
//         <div class='mapPage__bottom__mission'>
//             <h1>Mission </h1>
//         </div>
//     </div><!-- end bottom -->
// </div> <!-- end of mapPage Main div -->
// `


