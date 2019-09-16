import {chemin} from '../data/config'


//by Gauthier
/*********************************************************************************************************/
//I create the database to store my data for cyclists (date, year, description etc)
//I store a table in a dataset that will contain several objects, its objects will correspond to a cyclist
/**********************************************************************************************************/ 

/* Elodie : I Add a piece of information to a cyclist*/

    export const datas = [
    {
        id:0,
        name: "Bernard Hinault",
        url: `${chemin}/hinault.png`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test. 

        fiche: [
            {
                date: 1954,
                des: "Bernard Hinault, né le 14 novembre 1954 à Yffiniac (Côtes-du-Nord), est un coureur cycliste français, professionnel de 1975 à 1986. Il est le troisième coureur à remporter à cinq reprises le Tour de France, après Jacques Anquetil et Eddy Merckx. En huit participations, il y gagne vingt-huit étapes. Il a également remporté à trois reprises le Tour d'Italie et à deux reprises le Tour d'Espagne. Il compte également à son palmarès un titre de champion du monde sur route. Surnommé le Blaireau, il a dominé le sport cycliste international entre 1978 et 1986, remportant 216 victoires dont 144 hors critériums.",
                url: `${chemin}/bernard19812.jpg`,
            },
    ]
    },
    {
        id:1,
        name: "Greg Lemond",
        url: `${chemin}/greg.jpg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1961,
                des: "Gregory James LeMond, dit Greg LeMond, né le 26 juin 1961 à Lakewood, en Californie, est un coureur cycliste américain. Il devient professionnel en 1981 et arrête sa carrière en 1994 à la suite d'une myopathie mitochondriale (maladie potentiellement induite par un accident de chasse, certains plombs n'ayant pu être retirés par le chirurgien). Il a remporté à trois reprises le Tour de France en 1986, 1989 et 1990 et deux fois le titre mondial sur route en 1983 et 1989. Il est ainsi le premier Américain et le premier non-européen à remporter le Tour de France.",
                url: `${chemin}/gl.jpg`,
            },
            {
                date: 1981,
                des: "Greg LeMond était un adolescent sportif grand amateur de ski. Pour parfaire sa condition physique, son entraîneur lui recommande de pratiquer le vélo. Le jeune homme se révèle très doué pour ce sport et se consacre très vite à la compétition.",
                url: `${chemin}/greg.jpg`,
            },
    ]
    },
    {
        id:2,
        name: "Stephen Roche",
        url: `${chemin}/roche.jpeg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1959,
                des: "Stephen Roche (né le 28 novembre 1959 à Dublin) est un coureur cycliste irlandais. Il fut professionnel de 1981 à 1993 et compte 58 victoires professionnelles à son actif. Il est le seul coureur avec Eddy Merckx (1974) à avoir réussi le triplé Tour de France, Tour d’Italie et championnat du monde la même année, en 1987.",
                url: `${chemin}/roche.jpg`,
            },
            {
                date: 1981,
                des: "Il passe professionnel au sein de la prestigieuse équipe Peugeot en 1981. Dès sa première année, il remporte trois courses par étapes : Paris-Nice, le Tour de Corse, l'Étoile des Espoirs et le Tour d'Indre-et-Loire.",
                url: `${chemin}/sr.jpg`,
            },
    ]
    },
    {
        id:3,
        name: "Miguel Indurain",
        url: `${chemin}/indurain.jpg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1964,
                des: "Miguel Indurain Larrayanote 1, né à Villava (Navarre, Espagne) le 16 juillet 1964, est un coureur cycliste espagnol, professionnel de 1984 à 1996. Il est le seul coureur à avoir remporté cinq fois consécutivement le Tour de France, et a également gagné à deux reprises le Tour d'Italie devenant le seul coureur à avoir réalisé le doublé Giro-Tour deux années d'affilée. Numéro un mondial de juin 1992 à juin 1994, il remporte également un titre olympique et un titre mondial en contre-la-montre. Il a également été détenteur du record de l'heure.",
                url: `${chemin}/indurain.jpg`,
            },
            
    ]
    },
    {
        id:4,
        name: "Jacques Anquetil",
        url: `${chemin}/anquetil.jpg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1989,
                des: "Jacques Anquetil, né le 8 janvier 1934 à Mont-Saint-Aignan (Seine-Inférieure) et mort le 18 novembre 1987 à Rouen, est un coureur cycliste français. Professionnel de 1953 à 1969, il est considéré comme l'un des plus grands coureurs de l'histoire du cyclisme et possède l'un des palmarès les plus riches de son sport. Surnommé « Maître Jacques », il est le premier coureur de l'histoire à remporter cinq fois le Tour de France et compte également deux victoires sur le Tour d'Italie et une victoire sur le Tour d'Espagne, ce qui en fait le premier cycliste à remporter les trois grands tours. Il détient aussi le record du nombre de podiums dans les trois grands tours, avec treize podiums.",
                url: `${chemin}/anquetil.jpg`,
            },
            
    ]
    },
    {
        id:5,
        name: "Raymond Poulidor",
        url: `${chemin}/poulidor.jpg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1936,
                des: "Raymond Poulidor, dit « Poupou »1, est un coureur cycliste français, né le 15 avril 1936 à Masbaraud-Mérignat, dans la Creuse. Sa popularité (« poupoularité2 ») fut exceptionnelle en France, en dépit de son statut d'« éternel second » sur le Tour de France, épreuve qu'il n'a jamais gagnée et au cours de laquelle il n'a jamais porté le maillot jaune, mais dont il détient le record de podiums (huit). Il a cependant remporté le Tour d'Espagne en 1964. Il fait partie des rares coureurs de l'histoire à avoir terminé plus de 10 fois sur un podium final de grand tour.",
                url: `${chemin}/poulidor.jpg`,
            },
            {
                date: 1964,
                des: "La rivalité entre Anquetil et Poulidor est l'une des grandes oppositions du sport français, avec en point d'orgue un combat coude à coude sur les pentes du puy de Dôme dans le Tour 1964",
                url: `${chemin}/poupou.jpg`,
            },
            {
                date: 1973,
                des: "Vainqueur de 189 courses dont Milan-San Remo, le Tour d'Espagne, le Grand Prix des Nations, il est lauréat du Super Prestige Pernod en 1964. Raymond Poulidor n'a jamais remporté le Tour de France en quatorze participations, ni même porté le maillot jaune ne serait-ce qu'une journée. Il échoue à quatorze secondes du maillot jaune au sommet du puy de Dôme en 1964, ou encore, lors du prologue de 1973 à Scheveningen, à quatre-vingts centièmes de seconde de Joop Zoetemelk10.",
                url: `${chemin}/pouli.jpg`,
            },
    ]
    },
    {
        id:6,
        name: "Egan Bernal",
        url: `${chemin}/bernal.jpg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1989,
                des: "Egan Arley Bernal Gómez, né le 13 janvier 1997, est un coureur cycliste colombien, membre de l'équipe Ineos. Venu du VTT et spécialiste des courses par étapes, il devient le 28 juillet 2019, à 22 ans et 196 jours le plus jeune vainqueur du Tour de France depuis François Faber en 19092, ainsi que le premier coureur colombien et latino-américain à s'imposer dans la « Grande Boucle ». Il a auparavant remporté le Tour de l'Avenir en 2017, le Tour de Californie en 2018, Paris-Nice et le Tour de Suisse en 2019.",
                url: `${chemin}/bernal.jpg`,
            },
            {
                date: 1989,
                des: "Egan Arley Bernal Gómez, né le 13 janvier 1997, est un coureur cycliste colombien, membre de l'équipe Ineos. Venu du VTT et spécialiste des courses par étapes, il devient le 28 juillet 2019, à 22 ans et 196 jours le plus jeune vainqueur du Tour de France depuis François Faber en 19092, ainsi que le premier coureur colombien et latino-américain à s'imposer dans la « Grande Boucle ». Il a auparavant remporté le Tour de l'Avenir en 2017, le Tour de Californie en 2018, Paris-Nice et le Tour de Suisse en 2019.",
                url: `${chemin}/bernal.jpg`,
            },
            {
                date: 1989,
                des: "Egan Arley Bernal Gómez, né le 13 janvier 1997, est un coureur cycliste colombien, membre de l'équipe Ineos. Venu du VTT et spécialiste des courses par étapes, il devient le 28 juillet 2019, à 22 ans et 196 jours le plus jeune vainqueur du Tour de France depuis François Faber en 19092, ainsi que le premier coureur colombien et latino-américain à s'imposer dans la « Grande Boucle ». Il a auparavant remporté le Tour de l'Avenir en 2017, le Tour de Californie en 2018, Paris-Nice et le Tour de Suisse en 2019.",
                url: `${chemin}/bernal.jpg`,
            },
    ]
    },
    {
        id:7,
        name: "Charles Pélissier",
        url: `${chemin}/charlepelissier.jpg`,
        des: "",
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1903,
                des:"né le 20 février 1903 à Paris, il est l'un des piliers de l'équipe de France sur le Tour au début des années 1930 et l'un des coureurs les plus populaires de l'histoire de l'épreuve. En six participations à la Grande Boucle, il y remporte seize étapes. Il y obtient son meilleur classement final en 1930 en terminant au neuvième rang, l'année où il établit le record de victoires d'étapes sur un même Tour de France avec huit succès. Cette performance n'est égalée que par Eddy Merckx en 1970 et 1974 et Freddy Maertens en 1976.",
                url: `${chemin}/charlepelissier.jpg`,
            },
            {
                date: 1903,
                des:"né le 20 février 1903 à Paris, il est l'un des piliers de l'équipe de France sur le Tour au début des années 1930 et l'un des coureurs les plus populaires de l'histoire de l'épreuve. En six participations à la Grande Boucle, il y remporte seize étapes. Il y obtient son meilleur classement final en 1930 en terminant au neuvième rang, l'année où il établit le record de victoires d'étapes sur un même Tour de France avec huit succès. Cette performance n'est égalée que par Eddy Merckx en 1970 et 1974 et Freddy Maertens en 1976.",
                url: `${chemin}/charlepelissier.jpg`,
            },
            {
                date: 1903,
                des:"né le 20 février 1903 à Paris, il est l'un des piliers de l'équipe de France sur le Tour au début des années 1930 et l'un des coureurs les plus populaires de l'histoire de l'épreuve. En six participations à la Grande Boucle, il y remporte seize étapes. Il y obtient son meilleur classement final en 1930 en terminant au neuvième rang, l'année où il établit le record de victoires d'étapes sur un même Tour de France avec huit succès. Cette performance n'est égalée que par Eddy Merckx en 1970 et 1974 et Freddy Maertens en 1976.",
                url: `${chemin}/charlepelissier.jpg`,
            },
    ]
    },
    {
        id:8,
        name: "Cadel Evans",
        url: `${chemin}/CadelEvans.jpg`,
       
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1977,
                des: "né le 14 février 1977. Ancien VTTiste de premier plan (vainqueur de la coupe du monde à deux reprises), il s'est converti au cyclisme sur route. À la fois bon grimpeur et rouleur, il a remporté le Championnat du monde sur route en 2009, le Tour de Romandie en 2006 et en 2011 et le ProTour 2007.Figurant parmi les favoris des grands tours auxquels il participe, il s'est classé deuxième du Tour de France en 2007 et 2008 et troisième du Tour d'Espagne 2009 ainsi que du Tour d'Italie 2013. En 2011, il est le premier Australien vainqueur du Tour de France.",
                url: `${chemin}/.jpg`,
            },
            {
                date: 1977,
                des: "né le 14 février 1977. Ancien VTTiste de premier plan (vainqueur de la coupe du monde à deux reprises), il s'est converti au cyclisme sur route. À la fois bon grimpeur et rouleur, il a remporté le Championnat du monde sur route en 2009, le Tour de Romandie en 2006 et en 2011 et le ProTour 2007.Figurant parmi les favoris des grands tours auxquels il participe, il s'est classé deuxième du Tour de France en 2007 et 2008 et troisième du Tour d'Espagne 2009 ainsi que du Tour d'Italie 2013. En 2011, il est le premier Australien vainqueur du Tour de France.",
                url: `${chemin}/.jpg`,
            },
            {
                date: 1977,
                des: "né le 14 février 1977. Ancien VTTiste de premier plan (vainqueur de la coupe du monde à deux reprises), il s'est converti au cyclisme sur route. À la fois bon grimpeur et rouleur, il a remporté le Championnat du monde sur route en 2009, le Tour de Romandie en 2006 et en 2011 et le ProTour 2007.Figurant parmi les favoris des grands tours auxquels il participe, il s'est classé deuxième du Tour de France en 2007 et 2008 et troisième du Tour d'Espagne 2009 ainsi que du Tour d'Italie 2013. En 2011, il est le premier Australien vainqueur du Tour de France.",
                url: `${chemin}/.jpg`,
            },
    ]
    },
    {
        id:9,
        name: "Vincenzo Nibali",
        url: `${chemin}/vn.jpg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1984,
                des:"C'est un coureur cycliste italien. Professionnel depuis 2005, il est membre de l'équipe Bahrain-Merida. Il a notamment remporté le Tour d'Espagne 2010, le Tour d'Italie en 2013 et 2016 ainsi que le Tour de France 2014, devenant ainsi le sixième coureur à compter les trois grands tours à son palmarès",
                url: `${chemin}/Vincenzo.jpg`,
            },
            {
                date: 1984,
                des:"C'est un coureur cycliste italien. Professionnel depuis 2005, il est membre de l'équipe Bahrain-Merida. Il a notamment remporté le Tour d'Espagne 2010, le Tour d'Italie en 2013 et 2016 ainsi que le Tour de France 2014, devenant ainsi le sixième coureur à compter les trois grands tours à son palmarès",
                url: `${chemin}/Vincenzo.jpg`,
            },
            {
                date: 1984,
                des:"C'est un coureur cycliste italien. Professionnel depuis 2005, il est membre de l'équipe Bahrain-Merida. Il a notamment remporté le Tour d'Espagne 2010, le Tour d'Italie en 2013 et 2016 ainsi que le Tour de France 2014, devenant ainsi le sixième coureur à compter les trois grands tours à son palmarès",
                url: `${chemin}/Vincenzo.jpg`,
            }
    ]
    },
    {
        id:10,
        name: "Freddy Maertens",
        url: `${chemin}/maertens.jpg`,
        des: "",
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1952,
                des:"né le 13 février 1952 à Nieuport (Belgique).Durant sa carrière professionnelle de 1972 à 1987, il remporte 142 victoires dont le Tour d'Espagne 1977 et, à deux reprises, le Championnat du monde sur route. Sa carrière coïncide avec les meilleures années d'un autre coureur belge, Eddy Merckx. Les partisans des coureurs ainsi que les journalistes de l'époque étaient divisés sur lequel des deux était le meilleur2.Il est le conservateur du musée du Tour des Flandres à Audenarde.",
                url: `${chemin}/fm2.jpg`,
            },
            {
                date: 1952,
                des:"né le 13 février 1952 à Nieuport (Belgique).Durant sa carrière professionnelle de 1972 à 1987, il remporte 142 victoires dont le Tour d'Espagne 1977 et, à deux reprises, le Championnat du monde sur route. Sa carrière coïncide avec les meilleures années d'un autre coureur belge, Eddy Merckx. Les partisans des coureurs ainsi que les journalistes de l'époque étaient divisés sur lequel des deux était le meilleur2.Il est le conservateur du musée du Tour des Flandres à Audenarde.",
                url: `${chemin}/fm2.jpg`,
            },
            {
                date: 1952,
                des:"né le 13 février 1952 à Nieuport (Belgique).Durant sa carrière professionnelle de 1972 à 1987, il remporte 142 victoires dont le Tour d'Espagne 1977 et, à deux reprises, le Championnat du monde sur route. Sa carrière coïncide avec les meilleures années d'un autre coureur belge, Eddy Merckx. Les partisans des coureurs ainsi que les journalistes de l'époque étaient divisés sur lequel des deux était le meilleur2.Il est le conservateur du musée du Tour des Flandres à Audenarde.",
                url: `${chemin}/fm2.jpg`,
            },
    ]
    },
    {
        id:11,
        name: "Sylvain Chavanel",
        url: `${chemin}/sylvain.jpg`,
        des: "",
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1979,
                des:"né le 30 juin 1979 à Châtellerault. Professionnel de 2000 à 2018, il a notamment été champion de France de cyclisme sur route en 2011, six fois champion de France du contre-la-montre, en 2005, 2006, 2008, 2012, 2013 et 2014 (il devance Eddy Seigneur et ses quatre succès), vainqueur du Grand Prix de Plouay en 2014 et a remporté trois étapes du Tour de France, en 2008 et 2010. Il a également porté le maillot jaune en tant que leader du Tour en 2010 et remporté plusieurs titres de champion de France sur piste. Il détient le record de participation au Tour de France avec 18 départs consécutifs entre 2001 et 2018. Son frère cadet Sébastien Chavanel est également cycliste professionnel.",
                url: `${chemin}/sylvain.jpg`,
            },
            {
                date: 1979,
                des:"né le 30 juin 1979 à Châtellerault. Professionnel de 2000 à 2018, il a notamment été champion de France de cyclisme sur route en 2011, six fois champion de France du contre-la-montre, en 2005, 2006, 2008, 2012, 2013 et 2014 (il devance Eddy Seigneur et ses quatre succès), vainqueur du Grand Prix de Plouay en 2014 et a remporté trois étapes du Tour de France, en 2008 et 2010. Il a également porté le maillot jaune en tant que leader du Tour en 2010 et remporté plusieurs titres de champion de France sur piste. Il détient le record de participation au Tour de France avec 18 départs consécutifs entre 2001 et 2018. Son frère cadet Sébastien Chavanel est également cycliste professionnel.",
                url: `${chemin}/sylvain.jpg`,
            },
            {
                date: 1979,
                des:"né le 30 juin 1979 à Châtellerault. Professionnel de 2000 à 2018, il a notamment été champion de France de cyclisme sur route en 2011, six fois champion de France du contre-la-montre, en 2005, 2006, 2008, 2012, 2013 et 2014 (il devance Eddy Seigneur et ses quatre succès), vainqueur du Grand Prix de Plouay en 2014 et a remporté trois étapes du Tour de France, en 2008 et 2010. Il a également porté le maillot jaune en tant que leader du Tour en 2010 et remporté plusieurs titres de champion de France sur piste. Il détient le record de participation au Tour de France avec 18 départs consécutifs entre 2001 et 2018. Son frère cadet Sébastien Chavanel est également cycliste professionnel.",
                url: `${chemin}/sylvain.jpg`,
            },
    ]
    },
    {
        id:12,
        name: "Jean-Christophe Péraud",
        url: `${chemin}/JCP.jpg`,
        des: "",
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1977,
                des:"né le 22 mai 1977 à Toulouse. Spécialisé en VTT jusqu'en 2009, il est notamment champion d'Europe de cross-country en 2005, vice-champion olympique de cross-country aux Jeux de 2008 à Pékin et champion du monde de cross-country par équipe la même année. Il commence une carrière professionnelle sur route à l'âge de 32 ans, en 2010, après avoir été champion de France amateurs sur route en 2008 et le premier amateur à remporter le titre de champion de France du contre-la-montre en 2009.",
                url: `${chemin}/JCP.jpg`,
            },
            {
                date: 1977,
                des:"né le 22 mai 1977 à Toulouse. Spécialisé en VTT jusqu'en 2009, il est notamment champion d'Europe de cross-country en 2005, vice-champion olympique de cross-country aux Jeux de 2008 à Pékin et champion du monde de cross-country par équipe la même année. Il commence une carrière professionnelle sur route à l'âge de 32 ans, en 2010, après avoir été champion de France amateurs sur route en 2008 et le premier amateur à remporter le titre de champion de France du contre-la-montre en 2009.",
                url: `${chemin}/JCP.jpg`,
            },
            {
                date: 1977,
                des:"né le 22 mai 1977 à Toulouse. Spécialisé en VTT jusqu'en 2009, il est notamment champion d'Europe de cross-country en 2005, vice-champion olympique de cross-country aux Jeux de 2008 à Pékin et champion du monde de cross-country par équipe la même année. Il commence une carrière professionnelle sur route à l'âge de 32 ans, en 2010, après avoir été champion de France amateurs sur route en 2008 et le premier amateur à remporter le titre de champion de France du contre-la-montre en 2009.",
                url: `${chemin}/JCP.jpg`,
            },
    ]
    },
    {
        id:13,
        name: "René Vietto",
        url: `${chemin}/rene.jpg`,
        des: "",
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1914,
                des:"né le 22 mai 1977 à Toulouse. Spécialisé en VTT jusqu'en 2009, il est notamment champion d'Europe de cross-country en 2005, vice-champion olympique de cross-country aux Jeux de 2008 à Pékin et champion du monde de cross-country par équipe la même année. Il commence une carrière professionnelle sur route à l'âge de 32 ans, en 2010, après avoir été champion de France amateurs sur route en 2008 et le premier amateur à remporter le titre de champion de France du contre-la-montre en 2009.",
                url: `${chemin}/rene.jpg`,
            },
            {
                date: 1914,
                des:"né le 22 mai 1977 à Toulouse. Spécialisé en VTT jusqu'en 2009, il est notamment champion d'Europe de cross-country en 2005, vice-champion olympique de cross-country aux Jeux de 2008 à Pékin et champion du monde de cross-country par équipe la même année. Il commence une carrière professionnelle sur route à l'âge de 32 ans, en 2010, après avoir été champion de France amateurs sur route en 2008 et le premier amateur à remporter le titre de champion de France du contre-la-montre en 2009.",
                url: `${chemin}/rene.jpg`,
            },
            {
                date: 1914,
                des:"né le 22 mai 1977 à Toulouse. Spécialisé en VTT jusqu'en 2009, il est notamment champion d'Europe de cross-country en 2005, vice-champion olympique de cross-country aux Jeux de 2008 à Pékin et champion du monde de cross-country par équipe la même année. Il commence une carrière professionnelle sur route à l'âge de 32 ans, en 2010, après avoir été champion de France amateurs sur route en 2008 et le premier amateur à remporter le titre de champion de France du contre-la-montre en 2009.",
                url: `${chemin}/rene.jpg`,
            },
    ]
    },
    {
        id:14,
        name: "Eddy Merckx",
        url: `${chemin}/merckx.jpg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1945,
                des:"Édouard Louis Joseph, baron Merckx, plus connu sous le nom d’Eddy Merckx, est un cycliste belge né le 17 juin 1945 dans la commune de Meensel-Kiezegem, en province du Brabant flamand à l'est de Louvain.Professionnel de 1965 à 1978, Eddy Merckx est souvent considéré comme le plus grand cycliste de l'Histoire. Il a remporté 625 courses (525 victoires sur route, 98 succès sur la piste et deux bouquets en cyclo-cross) durant sa carrière, ce qui constitue un record. Surnommé « Le Cannibale » ou « L'Ogre de Tervuren » pour son insatiabilité, Eddy Merckx a notamment gagné onze Grands Tours (cinq Tours de France, cinq Tours d'Italie et un Tour d'Espagne) ce qui est là aussi un record. Il a également terminé douze fois sur un podium final de grand tour, seul Jacques Anquetil a fait mieux, avec treize podiums.Eddy Merckx a également remporté trois championnats du monde en ligne, le record de l'heure et 31 victoires dans les classiques (dont 19 Monuments).",
                url: `${chemin}/merckx.jpg`,
            },
            {
                date: 1945,
                des:"Édouard Louis Joseph, baron Merckx, plus connu sous le nom d’Eddy Merckx, est un cycliste belge né le 17 juin 1945 dans la commune de Meensel-Kiezegem, en province du Brabant flamand à l'est de Louvain.Professionnel de 1965 à 1978, Eddy Merckx est souvent considéré comme le plus grand cycliste de l'Histoire. Il a remporté 625 courses (525 victoires sur route, 98 succès sur la piste et deux bouquets en cyclo-cross) durant sa carrière, ce qui constitue un record. Surnommé « Le Cannibale » ou « L'Ogre de Tervuren » pour son insatiabilité, Eddy Merckx a notamment gagné onze Grands Tours (cinq Tours de France, cinq Tours d'Italie et un Tour d'Espagne) ce qui est là aussi un record. Il a également terminé douze fois sur un podium final de grand tour, seul Jacques Anquetil a fait mieux, avec treize podiums.Eddy Merckx a également remporté trois championnats du monde en ligne, le record de l'heure et 31 victoires dans les classiques (dont 19 Monuments).",
                url: `${chemin}/merckx.jpg`,
            },
    ]
    },
    {
        id:15,
        name: "Jean Robic",
        url: `${chemin}/robic.jpg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des: "il gagne en 1981 son 3eme Tour de France",
                url: `${chemin}/bernard19812.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/bernard19812.jpg`,
            }
    ]
    },
    {
        id:16,
        name: "Marco Pantani",
        url: `${chemin}/pantani.jpg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des: "il gagne en 1981 son 3eme Tour de France",
                url: `${chemin}/bernard19812.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/bernard19812.jpg`,
            }
    ]
    },
    {
        id:17,
        name: "Felice Gimondi",
        url: `${chemin}/gimondi.jpg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des: "il gagne en 1981 son 3eme Tour de France",
                url: `${chemin}/bernard19812.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/bernard19812.jpg`,
            }
    ]
    },
    {
        id:18,
        name: "Gino Bartali",
        url: `${chemin}/bartali.jpg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des: "il gagne en 1981 son 3eme Tour de France",
                url: `${chemin}/bernard19812.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/bernard19812.jpg`,
            }
    ]
    },
    {
        id:19,
        name: "Louison Bobet",
        url: `${chemin}/bobet.jpg`,
        des: "né en 1965, cycliste professionel de 1976 a 1986.",
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des1:[
                    {
                        texte: "il gagne en 1981 son 3eme Tour de France",
                        url: `${chemin}/bernard19812.jpg`,
                    }
                ],
                des2:[
                    {
                        texte: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                        url: `${chemin}/bernard19812.jpg`,
                    }
                ]
            },
    ]
    },
    {
        id:20,
        name: "Maurice Garin",
        url: `${chemin}/garin.jpg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des: "il gagne en 1981 son 3eme Tour de France",
                url: `${chemin}/bernard19812.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/bernard19812.jpg`,
            }
    ]
    },
    {
        id:21,
        name: "André Leducq",
        url: `${chemin}/leducq.jpg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des: "il gagne en 1981 son 3eme Tour de France",
                url: `${chemin}/bernard19812.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/bernard19812.jpg`,
            }
    ]
    },
    {
        id:22,
        name: "Thibaut Pinot",
        url: `${chemin}/pinot.jpg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des: "il gagne en 1981 son 3eme Tour de France",
                url: `${chemin}/bernard19812.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/bernard19812.jpg`,
            }
    ]
    },
    {
        id:23,
        name: "Julian Alaphilippe",
        url: `${chemin}/alaphilippe.jpg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des: "il gagne en 1981 son 3eme Tour de France",
                url: `${chemin}/bernard19812.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/bernard19812.jpg`,
            }
    ]
    },
    {
        id:24,
        name: "Bernard Thévenet",
        url: `${chemin}/thevenet.jpg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des: "il gagne en 1981 son 3eme Tour de France",
                url: `${chemin}/bernard19812.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/bernard19812.jpg`,
            }
    ]
    },
    {
        id:25,
        name: "Tom Simpson",
        url: `${chemin}/simpson.jpg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des: "il gagne en 1981 son 3eme Tour de France",
                url: `${chemin}/bernard19812.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/bernard19812.jpg`,
            }
    ]
    },
    {
        id:26,
        name: "Fabio Casartelli",
        url: `${chemin}/casartelli.jpg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des: "il gagne en 1981 son 3eme Tour de France",
                url: `${chemin}/bernard19812.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/bernard19812.jpg`,
            }
    ]
    },
    {
        id:27,
        name: "Roger Walkowiak",
        url: `${chemin}/walkowiak.jpg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des: "il gagne en 1981 son 3eme Tour de France",
                url: `${chemin}/bernard19812.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/bernard19812.jpg`,
            }
    ]
    },
    {
        id:28,
        name: "Raphaël Geminiani",
        url: `${chemin}/geminiani.jpg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des: "il gagne en 1981 son 3eme Tour de France",
                url: `${chemin}/bernard19812.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/bernard19812.jpg`,
            }
    ]
    },
    {
        id:29,
        name: "Andy Schleck",
        url: `${chemin}/schleck.jpg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des: "il gagne en 1981 son 3eme Tour de France",
                url: `${chemin}/bernard19812.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/bernard19812.jpg`,
            }
    ]
    },
    {
        id:30,
        name: "Christopher Froome",
        url: `${chemin}/froome.jpg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des: "il gagne en 1981 son 3eme Tour de France",
                url: `${chemin}/bernard19812.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/bernard19812.jpg`,
            }
    ]
    },
    {
        id:31,
        name: "Bradley Wiggins",
        url: `${chemin}/wiggins.jpg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des: "il gagne en 1981 son 3eme Tour de France",
                url: `${chemin}/bernard19812.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/bernard19812.jpg`,
            }
    ]
    },
    {
        id:32,
        name: "Alberto Contador",
        url: `${chemin}/contador.jpeg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des: "il gagne en 1981 son 3eme Tour de France",
                url: `${chemin}/bernard19812.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/bernard19812.jpg`,
            }
    ]
    },
    {
        id:33,
        name: "Thomas Voeckler",
        url: `${chemin}/voeckler.jpg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des: "il gagne en 1981 son 3eme Tour de France",
                url: `${chemin}/bernard19812.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/bernard19812.jpg`,
            }
    ]
    },
    {
        id:34,
        name: "Mark Cavendish",
        url: `${chemin}/cavendish.jpg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des: "il gagne en 1981 son 3eme Tour de France",
                url: `${chemin}/bernard19812.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/bernard19812.jpg`,
            }
    ]
    },
    {
        id:35,
        name: "Peter Sagan",
        url: `${chemin}/sagan.jpg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des: "il gagne en 1981 son 3eme Tour de France",
                url: `${chemin}/bernard19812.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/bernard19812.jpg`,
            }
    ]
    },
    {
        id:36,
        name: "Luis Ocana",
        url: `${chemin}/ocana.jpg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des: "il gagne en 1981 son 3eme Tour de France",
                url: `${chemin}/bernard19812.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/bernard19812.jpg`,
            }
    ]
    },
    {
        id:37,
        name: "Laurent Fignon",
        url: `${chemin}/fignon.jpg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des: "il gagne en 1981 son 3eme Tour de France",
                url: `${chemin}/bernard19812.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/bernard19812.jpg`,
            }
    ]
    },
    {
        id:38,
        name: "Fausto Coppi",
        url: `${chemin}/coppi.jpg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des: "il gagne en 1981 son 3eme Tour de France",
                url: `${chemin}/bernard19812.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/bernard19812.jpg`,
            }
    ]
    },
    {
        id:39,
        name: "Henri Pélissier",
        url: `${chemin}/henriPelissier.jpg`,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des: "il gagne en 1981 son 3eme Tour de France",
                url: `${chemin}/bernard19812.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/bernard19812.jpg`,
            }
    ]
    },
    {
        id:40,
        name: "Greg Lemond",
        url: `${chemin}/bernard1981.jpg`,
        des: "né en 1965, cycliste professionel de 1976 a 1986.",
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des1:[
                    {
                        texte: "il gagne en 1981 son 3eme Tour de France",
                        url: `${chemin}/bernard19812.jpg`,
                    }
                ],
                des2:[
                    {
                        texte: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                        url: `${chemin}/bernard19812.jpg`,
                    }
                ]
            },
    ]
    },
    {
        id:41,
        name: "Greg Lemond",
        url: `${chemin}/bernard1981.jpg`,
        des: "né en 1965, cycliste professionel de 1976 a 1986.",
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des1:[
                    {
                        texte: "il gagne en 1981 son 3eme Tour de France",
                        url: `${chemin}/bernard19812.jpg`,
                    }
                ],
                des2:[
                    {
                        texte: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                        url: `${chemin}/bernard19812.jpg`,
                    }
                ]
            },
    ]
    },
    {
        id:42,
        name: "Greg Lemond",
        url: `${chemin}/bernard1981.jpg`,
        des: "né en 1965, cycliste professionel de 1976 a 1986.",
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des1:[
                    {
                        texte: "il gagne en 1981 son 3eme Tour de France",
                        url: `${chemin}/bernard19812.jpg`,
                    }
                ],
                des2:[
                    {
                        texte: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                        url: `${chemin}/bernard19812.jpg`,
                    }
                ]
            },
    ]
    },
    {
        id:43,
        name: "Greg Lemond",
        url: `${chemin}/bernard1981.jpg`,
        des: "né en 1965, cycliste professionel de 1976 a 1986.",
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des1:[
                    {
                        texte: "il gagne en 1981 son 3eme Tour de France",
                        url: `${chemin}/bernard19812.jpg`,
                    }
                ],
                des2:[
                    {
                        texte: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                        url: `${chemin}/bernard19812.jpg`,
                    }
                ]
            },
    ]
    },
    {
        id:44,
        name: "Greg Lemond",
        url: `${chemin}/bernard1981.jpg`,
        des: "né en 1965, cycliste professionel de 1976 a 1986.",
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des1:[
                    {
                        texte: "il gagne en 1981 son 3eme Tour de France",
                        url: `${chemin}/bernard19812.jpg`,
                    }
                ],
                des2:[
                    {
                        texte: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                        url: `${chemin}/bernard19812.jpg`,
                    }
                ]
            },
    ]
    },
    {
        id:45,
        name: "Greg Lemond",
        url: `${chemin}/bernard1981.jpg`,
        des: "né en 1965, cycliste professionel de 1976 a 1986.",
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des1:[
                    {
                        texte: "il gagne en 1981 son 3eme Tour de France",
                        url: `${chemin}/bernard19812.jpg`,
                    }
                ],
                des2:[
                    {
                        texte: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                        url: `${chemin}/bernard19812.jpg`,
                    }
                ]
            },
    ]
    },
    {
        id:46,
        name: "Greg Lemond",
        url: `${chemin}/bernard1981.jpg`,
        des: "né en 1965, cycliste professionel de 1976 a 1986.",
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des1:[
                    {
                        texte: "il gagne en 1981 son 3eme Tour de France",
                        url: `${chemin}/bernard19812.jpg`,
                    }
                ],
                des2:[
                    {
                        texte: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                        url: `${chemin}/bernard19812.jpg`,
                    }
                ]
            },
    ]
    },
    {
        id:47,
        name: "Greg Lemond",
        url: `${chemin}/bernard1981.jpg`,
        des: "né en 1965, cycliste professionel de 1976 a 1986.",
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des1:[
                    {
                        texte: "il gagne en 1981 son 3eme Tour de France",
                        url: `${chemin}/bernard19812.jpg`,
                    }
                ],
                des2:[
                    {
                        texte: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                        url: `${chemin}/bernard19812.jpg`,
                    }
                ]
            },
    ]
    },
    {
        id:48,
        name: "Greg Lemond",
        url: `${chemin}/bernard1981.jpg`,
        des: "né en 1965, cycliste professionel de 1976 a 1986.",
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des1:[
                    {
                        texte: "il gagne en 1981 son 3eme Tour de France",
                        url: `${chemin}/bernard19812.jpg`,
                    }
                ],
                des2:[
                    {
                        texte: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                        url: `${chemin}/bernard19812.jpg`,
                    }
                ]
            },
    ]
    },
    {
        id:49,
        name: "Greg Lemond",
        url: `${chemin}/bernard1981.jpg`,
        des: "né en 1965, cycliste professionel de 1976 a 1986.",
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des1:[
                    {
                        texte: "il gagne en 1981 son 3eme Tour de France",
                        url: `${chemin}/bernard19812.jpg`,
                    }
                ],
                des2:[
                    {
                        texte: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                        url: `${chemin}/bernard19812.jpg`,
                    }
                ]
            },
    ]
    },
    ];
    //jsfiddle https://jsfiddle.net/b2e795ms/