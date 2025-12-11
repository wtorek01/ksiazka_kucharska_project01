const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const express = require("express");
const fs = require("fs");


const dbPath = path.join(__dirname, "baza_final.json");

const initialData = {
  recipes: [
    { 
      id: 1, 
      name: "Klasyczna Jajecznica na maśle", 
      category: "Śniadanie", 
      image: "/img/jajecznica.jpg", 
      description: "Idealna jajecznica musi być wilgotna i maślana. \n\n1. Rozbij 3 jajka do miseczki, dopraw solą i pieprzem, lekko roztrzep widelcem. \n2. Na patelni rozpuść dużą łyżkę masła (nie przypal!). \n3. Wylej jajka na patelnię i smaż na bardzo wolnym ogniu, cały czas mieszając. \n4. Zdejmij z ognia, gdy jajka są jeszcze lekko płynne - zetną się na talerzu. \n5. Posyp obficie świeżym szczypiorkiem. Podawaj ze świeżym pieczywem.", 
      author: "uzytk1" 
    },
    { 
      id: 2, 
      name: "Kremowa Owsianka z Owocami", 
      category: "Śniadanie", 
      image: "/img/owsianka.jpg", 
      description: "Szybkie, ale pożywne śniadanie dające energię na cały dzień. \n\n1. Pół szklanki płatków owsianych górskich zalewamy szklanką mleka (lub napoju roślinnego). \n2. Gotujemy na małym ogniu przez około 5-7 minut, aż płatki zmiękną i wchłoną płyn. \n3. Dodajemy szczyptę soli i łyżeczkę miodu lub syropu klonowego. \n4. Przekładamy do miseczki. Na wierzch układamy pokrojonego banana, borówki i orzechy. \n5. Opcjonalnie można posypać cynamonem lub dodać masło orzechowe.", 
      author: "uzytk2" 
    },
    { 
      id: 3, 
      name: "Chrupiące Tosty Francuskie", 
      category: "Śniadanie", 
      image: "/img/tosty.jpg", 
      description: "Najlepszy sposób na wykorzystanie czerstwego pieczywa. \n\n1. W głębokim talerzu roztrzep 2 jajka z 50ml mleka, łyżeczką cukru waniliowego i szczyptą cynamonu. \n2. Kromki chałki lub chleba tostowego maczaj w mieszance przez kilka sekund z każdej strony. \n3. Smaż na rozgrzanym maśle klarowanym na złoty kolor z obu stron. \n4. Podawaj na gorąco polane miodem, z dodatkiem świeżych owoców lub konfitury.", 
      author: "uzytk3" 
    },
    { 
      id: 4, 
      name: "Szakszuka z pomidorami", 
      category: "Śniadanie", 
      image: "/img/szakszuka.jpg", 
      description: "Bliskowschodnie śniadanie mistrzów. \n\n1. Na patelni podsmaż posiekaną cebulę i czosnek. \n2. Dodaj pokrojoną paprykę i smaż do miękkości. \n3. Wlej puszkę pomidorów krojonych (400g). Dopraw kminem rzymskim (kuminem), słodką papryką, solą i pieprzem. Duś 10 minut, aż sos zgęstnieje. \n4. Zrób w sosie wgłębienia i wbij w nie jajka. \n5. Przykryj pokrywką i duś 3-5 minut, aż białka się zetną, ale żółtka pozostaną płynne. \n6. Posyp świeżą kolendrą lub pietruszką.", 
      author: "uzytk4" 
    },
    { 
      id: 5, 
      name: "Prawdziwe Spaghetti Carbonara", 
      category: "Obiad", 
      image: "/img/spaghetti_carbonara.jpg", 
      description: "Oryginalny włoski przepis - bez śmietany! \n\n1. Makaron spaghetti ugotuj w osolonej wodzie al dente. \n2. W międzyczasie boczek lub guanciale pokrój w paski i wysmaż na chrupko na patelni. \n3. W miseczce wymieszaj 3 żółtka, 1 jajko całe, sporo świeżo mielonego pieprzu i 50g startego sera Pecorino (lub Parmezanu). \n4. Ugotowany makaron wrzuć na patelnię z boczkiem (zostaw trochę wody z gotowania!). Zdejmij patelnię z ognia. \n5. Wlej masę jajeczną i energicznie mieszaj, dodając odrobinę wody z makaronu, aż powstanie kremowy sos. Nie podgrzewaj, bo zrobi się jajecznica!", 
      author: "uzytk1" 
    },
    { 
      id: 6, 
      name: "Tradycyjny Kotlet Schabowy", 
      category: "Obiad", 
      image: "/img/kotlet_schabowy.jpg", 
      description: "Król polskich niedzielnych obiadów. \n\n1. Plastry schabu rozbij tłuczkiem na cienkie kotlety. \n2. Oprósz solą i pieprzem z obu stron. Odstaw na 15 minut. \n3. Przygotuj trzy talerze: z mąką, z roztrzepanym jajkiem i z bułką tartą. \n4. Panieruj mięso kolejno: mąka -> jajko -> bułka tarta. \n5. Smaż na mocno rozgrzanym smalcu lub oleju na złoty kolor (ok. 3-4 minuty z każdej strony). \n6. Podawaj z ziemniakami z koperkiem i mizerią.", 
      author: "uzytk5" 
    },
    { 
      id: 7, 
      name: "Pad Thai z Kurczakiem", 
      category: "Obiad", 
      image: "/img/pad_thai.jpg", 
      description: "Egzotyczny smak Tajlandii w Twoim domu. \n\n1. Makaron ryżowy namocz w ciepłej wodzie (nie gotuj!). \n2. Sos: wymieszaj 3 łyżki sosu rybnego, 3 łyżki pasty z tamaryndowca (lub soku z limonki) i 2 łyżki cukru. \n3. Na woku podsmaż kurczaka pokrojonego w kostkę. Przesuń na bok, wbij jajko i zrób szybką jajecznicę. \n4. Dodaj makaron i sos. Smaż całość, aż makaron zmięknie. \n5. Wrzuć kiełki fasoli mung i szczypiorek. Wymieszaj. \n6. Podawaj posypane kruszonymi orzeszkami ziemnymi i skropione limonką.", 
      author: "uzytk6" 
    },
    { 
      id: 8, 
      name: "Pieczony Łosoś z cytryną", 
      category: "Obiad", 
      image: "/img/pieczony_losos.jpg", 
      description: "Zdrowy i szybki obiad. \n\n1. Piekarnik rozgrzej do 200 stopni. \n2. Filet z łososia umyj, osusz ręcznikiem papierowym. \n3. Skrop oliwą, dopraw solą, pieprzem. \n4. Na wierzchu ułóż plasterki cytryny i gałązki świeżego koperku. \n5. Piecz przez około 15-20 minut (zależnie od grubości ryby). \n6. Podawaj z pieczonymi warzywami lub ryżem jaśminowym.", 
      author: "uzytk2" 
    },
    { 
      id: 9, 
      name: "Sałatka Cezar z grzankami", 
      category: "Kolacja", 
      image: "/img/salatka_cezar.jpg", 
      description: "Klasyka gatunku. \n\n1. Sos: zmiksuj żółtko, łyżeczkę musztardy, ząbek czosnku, anchois, sok z cytryny i powoli dolewaj oliwę, aż powstanie emulsja. Dodaj starty parmezan. \n2. Sałatę rzymską umyj, osusz i porwij na kawałki. \n3. Bagietkę pokrój w kostkę i podsmaż na oliwie z czosnkiem na złote grzanki. \n4. Pierś z kurczaka zgrilluj i pokrój w paski. \n5. Wymieszaj sałatę z sosem, posyp grzankami, kurczakiem i płatkami parmezanu.", 
      author: "uzytk3" 
    },
    { 
      id: 10, 
      name: "Kanapki z Awokado i jajkiem", 
      category: "Kolacja", 
      image: "/img/kanapki_z_awokado.jpg", 
      description: "Modne i zdrowe tosty. \n\n1. Dobrej jakości chleb (np. na zakwasie) opiecz w tosterze lub na suchej patelni. \n2. Dojrzałe awokado przekrój, wyjmij pestkę i rozgnieć widelcem z solą, pieprzem i sokiem z limonki. \n3. Jajko ugotuj na miękko (6 minut od wrzątku) lub w koszulce. \n4. Posmaruj pieczywo pastą z awokado, na wierzch połóż jajko. \n5. Posyp płatkami chilli lub czarnuszką.", 
      author: "uzytk4" 
    },
    { 
      id: 11, 
      name: "Włoska Domowa Pizza", 
      category: "Kolacja", 
      image: "/img/domowa_pizza.jpg", 
      description: "Lepsza niż z pizzerii. \n\n1. Ciasto: 500g mąki typ 00, 300ml ciepłej wody, 7g drożdży suszonych, łyżeczka soli. Wyrabiaj 10 min. Odstaw na godzinę do wyrośnięcia. \n2. Sos: pomidory pelati z puszki zmiksuj z bazylią, oregano, solą i oliwą. \n3. Rozgrzej piekarnik do MAX temperatury (najlepiej 250 stopni). \n4. Ciasto rozciągnij rękami (nie wałkuj!). Posmaruj sosem, ułóż mozzarellę. \n5. Piecz 8-10 minut na najniższej półce piekarnika.", 
      author: "uzytk1" 
    },
    { 
      id: 12, 
      name: "Tarta Szpinakowa z fetą", 
      category: "Kolacja", 
      image: "/img/tarta_szpinakowa.jpg", 
      description: "Idealna na ciepło i na zimno. \n\n1. Spód: użyj gotowego ciasta kruchego niesłodkiego lub francuskiego. Wyłóż nim formę do tarty i podpiecz 10 min w 200 stopniach. \n2. Nadzienie: Na patelni podsmaż czosnek, dodaj świeży szpinak (400g) i duś, aż zwiędnie. Odciśnij nadmiar wody! \n3. Wymieszaj szpinak z pokruszonym serem feta. \n4. W misce roztrzep 3 jajka ze śmietaną 30%, solą i gałką muszkatołową. \n5. Wyłóż szpinak na spód, zalej masą jajeczną. \n6. Piecz ok. 30 minut w 180 stopniach, aż wierzch się zarumieni.", 
      author: "uzytk6" 
    },
    { 
      id: 13, 
      name: "Sernik Królewski", 
      category: "Deser", 
      image: "/img/sernik.jpg", 
      description: "Puszysty i wilgotny. \n\n1. Składniki muszą być w temperaturze pokojowej! \n2. 1kg twarogu sernikowego zmiksuj krótko z 200g cukru. \n3. Dodawaj po jednym jajku (łącznie 4), miksując na wolnych obrotach tylko do połączenia składników. \n4. Wlej 200ml śmietanki 30% i łyżkę mąki ziemniaczanej. Wymieszaj. \n5. Przelej na spód z pokruszonych herbatników. \n6. Wstaw do piekarnika (160 stopni) na 70 minut. Na dno piekarnika wstaw naczynie z wrzątkiem (kąpiel wodna). \n7. Studź w uchylonym piekarniku.", 
      author: "uzytk2" 
    },
    { 
      id: 14, 
      name: "Mocno Czekoladowe Brownie", 
      category: "Deser", 
      image: "/img/brownie.jpg", 
      description: "Dla fanów czekolady. \n\n1. 200g masła i 200g gorzkiej czekolady rozpuść w garnuszku. Przestudź. \n2. 3 jajka ubij z 200g cukru na puszystą masę. \n3. Wlej masę czekoladową do jajecznej i delikatnie wymieszaj. \n4. Dodaj 100g przesianej mąki. Wymieszaj szpatułką. \n5. Wylej na małą blaszkę. Piecz ok. 20-25 minut w 180 stopniach. \n6. Ważne: W środku ciasto ma być wilgotne, a na wierzchu ma być popękana skorupka.", 
      author: "uzytk3" 
    },
    { 
      id: 15, 
      name: "Szarlotka na kruchym cieście", 
      category: "Deser", 
      image: "/img/szarlotka.jpg", 
      description: "Zapach jesieni w domu. \n\n1. Zagnieć kruche ciasto: 3 szklanki mąki, kostka zimnego masła, 3 żółtka, pół szklanki cukru, łyżeczka proszku do pieczenia. Podziel na 2 części, schłodź w lodówce. \n2. 1.5kg jabłek (szara reneta) obierz, zetrzyj na tarce, odciśnij sok. Wymieszaj z cynamonem. \n3. Jedną część ciasta wylep dno blaszki. Podpiecz 10 min w 180 stopniach. \n4. Wyłóż jabłka. \n5. Drugą część ciasta zetrzyj na tarce na wierzch jabłek. \n6. Piecz ok. 50 minut w 180 stopniach. Posyp cukrem pudrem.", 
      author: "uzytk5" 
    }
  ],
  users: []
};

if (!fs.existsSync(dbPath)) {
  console.log("Tworzę nową bazę danych...");
  fs.writeFileSync(dbPath, JSON.stringify(initialData));
}

const router = jsonServer.router(dbPath);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(express.json()); 
server.use("/api", router);
server.use(express.static(path.join(__dirname, "dist")));

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

server.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});