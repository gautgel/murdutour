import {chemin} from '../data/config'


//by Gauthier
/*********************************************************************************************************/
//I create the database to store my data for cyclists (date, year, description etc)
//I store a table in a dataset that will contain several objects, its objects will correspond to a cyclist
/**********************************************************************************************************/ 

    export const datas = [
    {
        id:0,
        name: "Bernard Hinault",
        url: `${chemin}/bernard19812.jpg`,
        des: "né en 1954, cycliste professionel de 1976 a 1986.",
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test. 

        fiche: [
            {
                date: 1981,
                des1:[
                    {
                        texte: "il gagne en 1981 son 3eme Tour de France",
                        url: `${chemin}/bernard1981.jpg`,
                    }
                ],
            },
            {
                date: 1978,
                des1:[
                    {
                    texte: "il gagne son premier Tour.",
                    url: "machinbidulechouette",
                    }
                ]
            }
    ]
    },
    {
        id:1,
        name: "Greg Lemond",
        url: `${chemin}/greg.jpg`,
        des: "né en 1959, cycliste professionel de 1976 a 1986.",
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1989,
                des:[
                    {
                        texte: "il gagne en 1981 son 1er Tour de France",
                        url: `${chemin}/bernard19812.jpg`,
                    }
                ],
            },
            {
                date: 1977,
                des:[
                    {
                        texte: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                        url: `${chemin}/bernard19812.jpg`,
                    }
                ]
            },
    ]
    },
    {
        id:2,
        name: "Stephen Roche",
        url: `${chemin}/roche.jpg`,
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
        id:3,
        name: "Miguel Indurain",
        url: `${chemin}/indurain.jpg`,
        des: "né en 1969, cycliste professionel de 1986 a 1996.",
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
        id:4,
        name: "Jacques Anquetil",
        url: `${chemin}/anquetil.jpg`,
        des: "né en 1935, cycliste professionel de 1956 a 1966.",
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
        id:5,
        name: "Raymond Poulidor",
        url: `${chemin}/poulidor.jpg`,
        des: "né en 1945, cycliste professionel de 1960 a 1976.",
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1986,
                des: "il gagne en 1981 son 3eme Tour de France",
                url: `${chemin}/bernard19812.jpg`,
            },
            {
                date: 1978,
                des:[
                    {
                        texte: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                        url: `${chemin}/bernard19812.jpg`,
                    }
                ]
            }
    ]
    },
    {
        id:6,
        name: "Egan Bernal",
        url: `${chemin}/bernal.jpg`,
        des: "né en 1997, cycliste professionel depuis 2016",
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 2018,
                des1:[
                    {
                        texte: "il gagne en 1981 son 3eme Tour de France",
                        url: `${chemin}/bernard19812.jpg`,
                    }
                ],
            },
            {
                date:2019,
                des2:[
                    {
                        texte: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                        url: `${chemin}/bernard19812.jpg`,
                    }
                ]
            }
    ]
    },
    {
        id:7,
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
        id:8,
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
        id:9,
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
        id:10,
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
        id:11,
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
        id:12,
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
        id:13,
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
        id:14,
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
        id:15,
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
        id:16,
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
        id:17,
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
        id:18,
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
        id:19,
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
        id:20,
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
        id:21,
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
        id:22,
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
        id:23,
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
        id:24,
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
        id:25,
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
        id:26,
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
        id:27,
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
        id:28,
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
        id:29,
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
        id:30,
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
        id:31,
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
        id:32,
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
        id:33,
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
        id:34,
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
        id:35,
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
        id:36,
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
        id:37,
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
        id:38,
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
        id:39,
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