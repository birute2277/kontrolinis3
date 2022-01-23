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

// ŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽŽ


// Nurodymai
// ribotas atsargų dydis
// kovodami galite patikrinti inventorių
// po kiekvienos kovos galite pasirinkti išeiti arba kovoti su dar vienu monstru
// padaryti įrankių juostą su inventoriaus piktograma, kad būtų galima bet kada atidaryti inventorių ir aprūpinti daiktus ar gėrimus

// jei turite ginklą su pliuso lizdo efektu, o išėmus tą ginklą, jūsų lizdai išnyks (inventorius pilnas)
// neturėtumėte leisti vartotojui pašalinti ginklo

// Turėtumėte turėti bent 4 puslapius
// žaidimo pradžios puslapis – puslapis, kuriame žaidėjas pasirenka savo personažą
// pagrindinis puslapis – kur rodoma mokėtojo informacija, jo auksas, statistika, inventorius, įranga
// prekybininko puslapis – puslapis, kuriame žaidėjas gali pirkti ir parduoti daiktus
// arena – puslapis, kuriame žaidėjas kovoja su monstrais

// PRADĖTI ŽAIDIMO PUSLAPĮ
// kai žaidimo pradžioje žaidėjas turi turėti galimybę pasirinkti savo personažą (turi būti rodoma informacija ir vaizdas)
// simbolių masyve yra objektai su simboliais

// PAGRINDINIS PUSLAPIS
// Šiame puslapyje žaidėjas gali pasirinkti, kokį ginklą aprūpinti

// PREKYBININKO-trader- PUSLAPIS
// Prekybininkas parduoda ginklus ir mikstūras
// prekiautojas parduoda ginklus ir mikstūras, taip pat prekiautojas pirks daiktus iš žaidėjo už auksą (prekiautojo monstrai nukris).
// prekybininkas perka daiktus už pusę kainos, jei žaidėjas nori parduoti už ginklą, kurį nusipirko iš gėrimo
// šiame puslapyje matomas prekybininko komponentas ir žaidėjų inventorius

// ARENOS PUSLAPAS
// arena yra vieta, kur žaidėjas kovoja su monstrais
// Kovodamas su monstru, žaidėjas turi turėti galimybę bet kada gerti gėrimą
// kiekvienas monstras numeta atsitiktinį kiekį daiktų po to, kai buvo nužudytas
// Pabaisos žala yra nuo 0 iki didžiausios žalos kiekvienam žaidėjui
// maxItemsDrop – nustato, kiek elementų monstras gali numesti, nuo 0 iki maxItemsDrop vertės
// žaidėjas negali išeiti iš arenos, kai kovoja su monstru, tik tada, kai kova baigta
// arenoje grotuvas ir monstras hp turėtų būti rodomi eigos juostose
// taip pat žaidėjo energija turėtų būti rodoma eigos juostoje (kiekvienas smūgis turėtų sumažinti energiją)

// grotuvas turės šiuos STATS
// sveikata - galetu buti patobulinta ginklais - galetu buti atkurta su potionais
// energija - gali būti atnaujinta naudojant ginklus - gali būti atkurta su gėrimais - atkuriama po kiekvieno priešo judesio, priklausomai nuo ištvermės
// ištvermė – būtų galima patobulinti ginklais
// jėga – galima būtų patobulinti ginklais
// inventoriaus lizdai – galima būtų patobulinti ginklais
// žala – galima patobulinti ginklais

// KĄ DARO STATISTIKA
// sveikata - jei sveikata pasiekia 0 žaidėjas miršta, žaidimas baigtas, sveikata krenta, kai žaidėjas patiria žalą iš priešo
// energija - kiekvienas ginklas sunaudoja tam tikrą energijos kiekį, kad pataikytumėte į priešą, jei energija yra mažesnė nei reikalauja ginklas, jūs negalite pataikyti į priešą
// ištvermė - ištvermės taškai pridedami prie energijos po kiekvieno priešo smūgio, pvz.: jūsų ištvermė 5, priešui atlikus judesį, gaunate 5 energijos taškai
// stiprumas - nustato kritinio smūgio tikimybę, jei jūsų stiprumas yra 5, turite 5% tikimybę padaryti kritinį smūgį, kuris padaro 3 kartus didesnę žalą
// inventoriaus lizdai – nustato, kiek daiktų žaidėjas gali turėti savo inventoriuje
// žala - nustato pradinę žaidėjo žalą, jei žaidėjo žalos statistika yra 3 ir ginklo maksimali žala yra 5, žaidėjas tikrai padarys 3 žalą ir 0-5 atsitiktinius ginklo pažeidimus.

// dropItems yra daiktų, kuriuos priešai meta po mirties, rinkinys
// priešo kritimas turėtų būti rodomas modalu, kad žaidėjas galėtų pasirinkti, kokius daiktus pasiimti ar palikti
// prekės turi kainą, ji nustato, kiek aukso prekiautojas duotų už prekę



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
