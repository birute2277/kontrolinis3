// React Assignment
// Due January 23, 2022 11:59 PM
// Instructions
// limited inventory size
// when fighting you can check inventory
// after each fight you can choose to leave ot fight one more monster
// make toolbar with inventory icon, so it would be possible to open inventory and equip items or drink potions any time

// if you have weapon with plus slot effect and removing that weapon would make your slots disapear (inventory is full)
// you should not let user remove weapon

// you should have at least 4 pages
// start game page - page where player choose his character
// main page - where payer info is shown, his gold, stats, inventory, equipment
// trader page - page where player can buy and sell stuff
// arena - page where player fight monsters

// START GAME PAGE
// when game start player should be able to choose his character (info and image should be displayed)
// characters array has objects with characters

// MAIN PAGE
// in this page player can select what weapon to equip

// TRADER PAGE
// Trader sells weapons and potions
// trader sell weapons and potions, also trader will buy items from player for gold (item monsters drop).
// trader buys items for half the price if player want to sell for weapon he bought of potion
// in this page trader component and player inventory is visible

// ARENA PAGE
// arena is place where player fights monsters
// while fighting monster player should be able to drink potion any time
// each monster drops random amount of items after it was killed
// monster damage is from 0 to his max damage, on every hit to player
// maxItemsDrop - determines how many items monster could drop, from 0 to maxItemsDrop value
// player should not be able to leave arena when he is fighting the monster, only when fight is done
// in arena player and monster hp should be displayed in progress bars
// also player energy should be displayed in progress bar (each hit should decrease energy)

// player will have these STATS
// health - could be upgraded with weapons - could be restored with potions
// energy - could be upgraded with weapons - could be restored with potions - restored after each move of the enemy depending on stamina stat
// stamina - could be upgraded with weapons
// strength - could be upgraded with weapons
// inventory slots - could be upgraded with weapons
// damage - could be upgraded with weapons

// WHAT STATS DO
// health - if health gets to 0 player dies, game over, health is decreasing when player takes damage from enemy
// energy - every weapon takes particular amount of energy, to make a hit to enemy, if energy os lower than weapon requires, you can not hit enemy
// stamina - stamina points is added to energy after every enemy hit, for example: your stamina 5, after enemy made a move you get 5 points to energy stat
// strength - determines chance of critical hit, if your strength is 5, you have 5% chance to maka a critical hit which does 3x regular damage
// inventory slots - determines how many items player could carry have in his inventory
// damage - determines initial player damage, if player damage stat is 3 and weapon max damage is 5, player will do 3 damage for sure and 0-5 random weapon damage

// dropItems is array of items which enemies drop after death
// enemy drop should be shown in modal, so player could choose what items to take, or leave
// items has price, it determines how much gold trader would give for the item
// DATA : https://codeshare.io/xvk77D

// ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????


// Nurodymai
// ribotas atsarg?? dydis
// kovodami galite patikrinti inventori??
// po kiekvienos kovos galite pasirinkti i??eiti arba kovoti su dar vienu monstru
// padaryti ??ranki?? juost?? su inventoriaus piktograma, kad b??t?? galima bet kada atidaryti inventori?? ir apr??pinti daiktus ar g??rimus

// jei turite ginkl?? su pliuso lizdo efektu, o i????mus t?? ginkl??, j??s?? lizdai i??nyks (inventorius pilnas)
// netur??tum??te leisti vartotojui pa??alinti ginklo

// Tur??tum??te tur??ti bent 4 puslapius
// ??aidimo prad??ios puslapis ??? puslapis, kuriame ??aid??jas pasirenka savo persona????
// pagrindinis puslapis ??? kur rodoma mok??tojo informacija, jo auksas, statistika, inventorius, ??ranga
// prekybininko puslapis ??? puslapis, kuriame ??aid??jas gali pirkti ir parduoti daiktus
// arena ??? puslapis, kuriame ??aid??jas kovoja su monstrais

// PRAD??TI ??AIDIMO PUSLAP??
// kai ??aidimo prad??ioje ??aid??jas turi tur??ti galimyb?? pasirinkti savo persona???? (turi b??ti rodoma informacija ir vaizdas)
// simboli?? masyve yra objektai su simboliais

// PAGRINDINIS PUSLAPIS
// ??iame puslapyje ??aid??jas gali pasirinkti, kok?? ginkl?? apr??pinti

// PREKYBININKO-trader- PUSLAPIS
// Prekybininkas parduoda ginklus ir mikst??ras
// prekiautojas parduoda ginklus ir mikst??ras, taip pat prekiautojas pirks daiktus i?? ??aid??jo u?? auks?? (prekiautojo monstrai nukris).
// prekybininkas perka daiktus u?? pus?? kainos, jei ??aid??jas nori parduoti u?? ginkl??, kur?? nusipirko i?? g??rimo
// ??iame puslapyje matomas prekybininko komponentas ir ??aid??j?? inventorius

// ARENOS PUSLAPAS
// arena yra vieta, kur ??aid??jas kovoja su monstrais
// Kovodamas su monstru, ??aid??jas turi tur??ti galimyb?? bet kada gerti g??rim??
// kiekvienas monstras numeta atsitiktin?? kiek?? daikt?? po to, kai buvo nu??udytas
// Pabaisos ??ala yra nuo 0 iki did??iausios ??alos kiekvienam ??aid??jui
// maxItemsDrop ??? nustato, kiek element?? monstras gali numesti, nuo 0 iki maxItemsDrop vert??s
// ??aid??jas negali i??eiti i?? arenos, kai kovoja su monstru, tik tada, kai kova baigta
// arenoje grotuvas ir monstras hp tur??t?? b??ti rodomi eigos juostose
// taip pat ??aid??jo energija tur??t?? b??ti rodoma eigos juostoje (kiekvienas sm??gis tur??t?? suma??inti energij??)

// grotuvas tur??s ??iuos STATS
// sveikata - galetu buti patobulinta ginklais - galetu buti atkurta su potionais
// energija - gali b??ti atnaujinta naudojant ginklus - gali b??ti atkurta su g??rimais - atkuriama po kiekvieno prie??o judesio, priklausomai nuo i??tverm??s
// i??tverm?? ??? b??t?? galima patobulinti ginklais
// j??ga ??? galima b??t?? patobulinti ginklais
// inventoriaus lizdai ??? galima b??t?? patobulinti ginklais
// ??ala ??? galima patobulinti ginklais

// K?? DARO STATISTIKA
// sveikata - jei sveikata pasiekia 0 ??aid??jas mir??ta, ??aidimas baigtas, sveikata krenta, kai ??aid??jas patiria ??al?? i?? prie??o
// energija - kiekvienas ginklas sunaudoja tam tikr?? energijos kiek??, kad pataikytum??te ?? prie????, jei energija yra ma??esn?? nei reikalauja ginklas, j??s negalite pataikyti ?? prie????
// i??tverm?? - i??tverm??s ta??kai pridedami prie energijos po kiekvieno prie??o sm??gio, pvz.: j??s?? i??tverm?? 5, prie??ui atlikus judes??, gaunate 5 energijos ta??kai
// stiprumas - nustato kritinio sm??gio tikimyb??, jei j??s?? stiprumas yra 5, turite 5% tikimyb?? padaryti kritin?? sm??g??, kuris padaro 3 kartus didesn?? ??al??
// inventoriaus lizdai ??? nustato, kiek daikt?? ??aid??jas gali tur??ti savo inventoriuje
// ??ala - nustato pradin?? ??aid??jo ??al??, jei ??aid??jo ??alos statistika yra 3 ir ginklo maksimali ??ala yra 5, ??aid??jas tikrai padarys 3 ??al?? ir 0-5 atsitiktinius ginklo pa??eidimus.

// dropItems yra daikt??, kuriuos prie??ai meta po mirties, rinkinys
// prie??o kritimas tur??t?? b??ti rodomas modalu, kad ??aid??jas gal??t?? pasirinkti, kokius daiktus pasiimti ar palikti
// prek??s turi kain??, ji nustato, kiek aukso prekiautojas duot?? u?? prek??



import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";

import StartPage from "./pages/StartPage";
import ChoosePlayerPage from "./pages/ChoosePlayerPage"
import MainPage from "./pages/MainPage";
import TraderPage from "./pages/TraderPage";
import ArenaPage from "./pages/ArenaPage";


function App() {

    return (
        <div className="App">

            <BrowserRouter>


                <Routes>
                    <Route path="/" element={<StartPage/>}/>
                    <Route path="/choosePlayer" element={<ChoosePlayerPage/>}/>
                    <Route path="/main" element={<MainPage/>}/>
                    <Route path="/trader" element={<TraderPage/>}/>
                    <Route path="/arena" element={<ArenaPage/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
