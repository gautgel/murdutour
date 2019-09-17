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
                url: `${chemin}/hinault.png`,
            },
            {
                date: 1978,
                des: "Après une saison éclatante lors de laquelle il remporte notamment le Tour d'Espagne pour sa première participation à un grand tour, Bernard Hinault s'attaque au Tour de France. Il n'a que 23 ans. Déjà élevé au rang de favori, le gamin d'Yffiniac, petit bourg des Côtes-d'Armor, court sans complexes et déjà intelligemment: il gère dans la montagne, où il colle aux basques de ses adversaires, notamment le Néerlandais Joop Zoetemelk. Le Blaireau a un avantage, et il le sait, c'est l'un des meilleurs spécialistes du contre-la-montre. Lors du chrono de la 20e et avant-dernière étape, il attaque et prend le maillot jaune, reléguant Zoetemelk à quatre minutes. Il ne le quitte plus et remporte la Grande Boucle dès sa première participation, comme Fausto Coppi, Jacques Anquetil ou Eddy Merckx avant lui.",
                url: `${chemin}/hinault1978.jpg`,
            },
            {
                date: 1982,
                des:"Très fort dans la montagne, Bernard Hinault est surtout imbattable dans les contre-la-montre qui lui permettent de réaliser un doublé Tour d'Italie-Tour de France en 1982. Meilleur coureur du moment, Hinault s'était fixé cet objectif dès le début de saison et n'a pas failli. Après avoir surclassé ses adversaires dans le Giro, il s'attaque ainsi à la Grande Boucle en position de favori, malgré une ambiance compliquée au sein de son équipe. C'est pourtant la campagne hexagonale la plus tranquille pour le Blaireau, qui remporte quatre étapes et ne quitte plus le jaune à partir du 11e jour de course. Il se permet même de s'imposer au sprint sur les Champs-Elysées.",
                url:`${chemin}/hinault1982.jpg`,
            },
            {
                date: 1985,
                des: "Il frappe fort dès le début et remporte le prologue, perd le maillot jaune en plaine et le récupère au premier contre-la-montre individuel. Le Blaireau attaque ensuite et enfonce le clou dans les Alpes, où il se montre impérial. La victoire finale lui semble alors promise. Mais il chute lourdement à moins d'un kilomètre de l'arrivée lors de la 14ème étape. Sérieusement blessé, le champion français se relève et finit l'étape sans perdre trop de temps. La suite est beaucoup plus compliquée et il souffre notamment dans les Pyrénées. Son jeune coéquipier américain, un certain Greg LeMond, qui se sent particulièrement bien, se plaint de ne pouvoir attaquer… Hinault lui promet alors de l'aider à remporter le Tour l'année suivante. LeMond accepte, Hinault remporte sa 5e Grande Boucle en cet été 1985.",
                url: `${chemin}/hinault1985.jpg`,
            }
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
                url: `${chemin}/robic.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/robic.jpg`,
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
                url: `${chemin}/pantani.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/pantani.jpg`,
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
                url: `${chemin}/gimondi.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/gimondi.jpg`,
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
                url: `${chemin}/bartali.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/bartali.jpg`,
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
                        url: `${chemin}/bobet.jpg`,
                    }
                ],
                des2:[
                    {
                        texte: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                        url: `${chemin}/bobet.jpg`,
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
                url: `${chemin}/garin.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/garin.jpg`,
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
                url: `${chemin}/leducq.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/leducq.jpg`,
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
                url: `${chemin}/pinot.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/pinot.jpg`,
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
                url: `${chemin}/alaphilippe.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/alaphilippe.jpg`,
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
                url: `${chemin}/thevenet.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/thevenet.jpg`,
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
                url: `${chemin}/simpson.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/simpson.jpg`,
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
                url: `${chemin}/casartelli.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/casartelli.jpg`,
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
                url: `${chemin}/walkowiak.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/walkowiak.jpg`,
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
                url: `${chemin}/geminiani.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/geminiani.jpg`,
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
                url: `${chemin}/shleck.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/shleck.jpg`,
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
                url: `${chemin}/froome.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/froome.jpg`,
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
                url: `${chemin}/wiggins.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/wiggins.jpg`,
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
                url: `${chemin}/contador.jpeg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/contador.jpeg`,
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
                url: `${chemin}/voeckler.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/voeckler.jpg`,
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
                url: `${chemin}/cavendish.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/cavendish.jpg`,
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
                url: `${chemin}/sagan.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/sagan.jpg`,
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
                url: `${chemin}/ocana.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/ocana.jpg`,
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
                url: `${chemin}/fignon.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/fignon.jpg`,
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
                url: `${chemin}/coppi.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/coppi.jpg`,
            }
    ]
    },
    {
        id:39,
        name: "Henri Pélissier",
        url: `${chemin}/henriPelissier.jpg`,
        fiche: [
            {
                date: 1986,
                des: "il gagne en 1981 son 3eme Tour de France",
                url: `${chemin}/henriPelissier.jpg`,
            },
            {
                date: 1980,
                des: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                url: `${chemin}/henriPelissier.jpg`,
            }
    ]
    },
    {
        id:40,
        name: "Antonin Magne",
        url: `${chemin}/antoninMagne.JPEG`,
        fiche: [
            {
                date: 1904,
                des: "Antoine Marius Magne dit Antonin Magne, né le 15 février 1904 à Ytrac (Cantal) et mort le 8 septembre 1983 à Arcachon (Gironde), est un coureur cycliste français, professionnel de 1926 à 1939. Vainqueur du Tour de France en 1931 puis en 1934, il y gagne neuf étapes en dix participations, et s'y classe troisième en 1930 et deuxième en 1936.",
                url: `${chemin}/antoninMagne.JPEG`,
            }
    ]
},
    {
        id:41,
        name: "Federico Bahamontes",
        url: `${chemin}/bf2.jpg`,
        fiche: [

            {
                date: 1928,
                des: "Alejandro Martín Bahamontes dit Federico Bahamontes ou Federico Martín Bahamontes1, né le 9 juillet 1928 à Val de Santo Domingo, dans la province de Tolède en Espagne, est un coureur cycliste espagnol. Surnommé « l'Aigle de Tolède », il est considéré comme l'un des meilleurs grimpeurs de l'histoire du cyclisme. ",
                url: `${chemin}/bf2.jpg`,
            },
            {
                date: 1959,
                des: "l'Aigle de Tolède est le premier Espagnol à avoir gagné le tour de France en 1959",
                url: `${chemin}/bf.jpg`,
            },
    ]
    },
    {
        id:42,
        name: "Joseph Zoetemelk",
        url: `${chemin}/jz.jpg`,
        fiche: [
            {
            date: 1946,
            des: "Hendrik Gerardus Joseph Zoetemelk naît le 3 décembre 1946 à La Haye.Surnommé le Hollandais du Tour de France, il est professionnel de 1970 à 1987 : une longévité remarquable dans ce sport. En seize participations au Tour de France, il n'abandonne jamais. Il remporte une fois la Grande Boucle en 1980, bénéficiant au passage de l'abandon sur blessure de Bernard Hinault (maillot jaune sur les épaules) à Pau.En 1974, victime d'une chute au Midi libre, il ne peut pas prendre part au Tour alors qu'il domine ses rivaux (Merckx, Thévenet, Van Impe) dans les principales courses par étapes de début de saison (3 courses, 3 victoires.Il termine deuxième du Tour en 1970, 1971, 1976, 1978, 1979, 1982, et détient le record du nombre de places de deuxième.",
            url: `${chemin}/jz.jpg`,
        },
]
    },
    {
        id:43,
        name: "Lucien Van Impe",
        url: `${chemin}/lvi.jpg`,
        fiche: [
            {
            date: 1946,
            des: "Lucien Van Impe est un coureur cycliste belge, né le 20 octobre 1946 à Mere en Flandre-Orientale.Il a été professionnel de 1969 à 1987, soit jusqu'à l'âge de 41 ans.Il a disputé quinze Tours de France, tous terminés, en se classant neuf fois dans les six premiers.En 1976, il l'emporte sous la houlette de Cyrille Guimard qui commence alors sa carrière de directeur sportif.Doté d'un petit gabarit et spécialiste de la montagne, il a remporté six fois le Grand Prix de la montagne du Tour de France.Il est directeur sportif de l'équipe continentale Verandas Willems à compter de 2008.",
            url: `${chemin}/lvi.jpg`, 
            },
    ]
    },
    {
        id:44,
        name: "Charly Gaul",
        url: `${chemin}/cg.jpg`,
        fiche: [
            {
            date: 1932,
            des: "Charly Gaul, né le 8 décembre 1932 à Pfaffenthal (Luxembourg) et mort le 6 décembre 2005 à Luxembourg, est un coureur cycliste luxembourgeois.Coureur polyvalent, il a notamment été champion du Luxembourg de cyclo-cross, un coureur de contre-la-montre accompli et un excellent grimpeur2. Ses capacités de pur grimpeur lorsque la route s'élève lui valent les surnoms du Grimpeur ailé ou de l'« Ange de la montagne »3. Il est reconnu pour avoir été un des plus grands grimpeurs du siècle. Il remporte le Tour de France 1958 ainsi que quatre étapes. Il s'adjuge également le Tour d'Italie en 1956 et 1959. Il apprécie particulièrement les mauvaises conditions météorologiques, dans lesquelles il parvient à creuser des écarts gigantesques et à bouleverser les classements4.",
            url: `${chemin}/cg.jpg`,
            },
    ]
    },
    {
        id:45,
        name: "Philippe Thys",
        url: `${chemin}/thys.jpg`,
        fiche: [
            {
                date: 1889,
                des: "Philippe Thys (Thĳs à l’état civil), né le 8 octobre 1889 à Anderlecht et mort le 17 janvier 1971 également à Anderlecht, est un cycliste belge, spécialiste des courses d’endurance qui fut professionnel de 1912 à 1927.",
                url: `${chemin}/thys.jpg`,
            },
    ]
    },
    {
        id:46,
        name: "Pedro Delgado",
        url: `${chemin}/pedro.jpg`,
        fiche: [
            {
            date: 1960,
            des: "Pedro Delgado Robledo (né le 15 avril 1960 à Ségovie) est un cycliste espagnol. Professionnel de 1982 à 1994, il a notamment remporté le Tour de France 1988 et deux Tours d'Espagne (en 1985 et 1989). Il est le détenteur avec Gino Bartali et Felice Gimondi du plus grand nombre de grands tours terminés parmi les dix premiers(18).",
            url: `${chemin}/pedro.jpg`,
            },
    ]
    },
    {
        id:47,
        name: "Roger Pingeon",
        url: `${chemin}/rp2.jpg`,
        fiche: [
            {
                date: 1940,
                des: "Roger Pingeon, né le 28 août 1940 à Hauteville-Lompnes (Ain) dans la région du Bugey et mort le 19 mars 2017 (à 76 ans) à Beaupont (Ain), est un coureur cycliste français.À la suite d'une carrière en indépendant qui le vit remporter la Polymultipliée lyonnaise (épreuve pourtant ouverte aux professionnels) en 1964, il entame tardivement une carrière professionnelle en 1965 qu'il achève en 1974. Comptant plus d'une trentaine de victoires professionnelles, il a en particulier remporté deux Grands Tours, le Tour de France 1967 et le Tour d'Espagne 1969. Il s'est également classé second du Tour de France 1969, battu par Eddy Merckx.",
                url: `${chemin}/rp.jpeg`,
            },
    ]
    },
    {
        id:48,
        name: "Joaquim Agostinho",
        url: `${chemin}/agos.jpg`,
        fiche: [
            {
        date: 1959,
        des: "Joaquim Agostinho, né le 7 avril 1943 à Silveira, Torres Vedras (Estrémadure) et mort le 10 mai 1984 à Lisbonne, est un coureur cycliste portugais. Il est considéré comme l'un des meilleurs coureurs portugais de l'Histoire.",
        url: `${chemin}/agos.jpg`,
            },
    ]
    },
    {
        id:49,
        name: "Claudio Chiappucci",
        url: `${chemin}/cc.jpg`,
        fiche: [
            {
            date: 1959,
            des: "Claudio Chiappucci, né le 28 février 1963 à Uboldo en Lombardie, est un ancien coureur cycliste italien. Professionnel de 1985 à 1999, il a remporté la classique Milan-San Remo en 1991 et la Classique de Saint-Sébastien en 1993. Il s'est classé deux fois deuxième du Tour d'Italie, en 1991 et 1992, et du Tour de France, en 1990 et 1992.",
            url: `${chemin}/cc.jpg`,
            },
    ]
    },
    ];
    //jsfiddle https://jsfiddle.net/b2e795ms/