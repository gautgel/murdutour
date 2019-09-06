//by Gauthier
/*********************************************************************************************************/
//I create the database to store my data for cyclists (date, year, description etc)
//I store a table in a dataset that will contain several objects, its objects will correspond to a cyclist
/**********************************************************************************************************/ 

    export const datas = [
    {
        id:0,
        name: "Bernard Hinault",
        vic: 5,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test. 

        fiche: [
            {
                date: 1981,
                des1:[
                    {
                        texte: "il gagne en 1981 son 3eme Tour de France",
                        url: "./src/assets/bernard19812.jpg",
                    }
                ],
                des2:[
                    {
                        texte: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                        url: "./src/assets/bernard1981.jpg",
                    }
                ]
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
        vic: 5,
        //I create a description sheet in which I store images linked to texts
        //for the moment they are only infos in example, it is always in phase of test.
        fiche: [
            {
                date: 1981,
                des1:[
                    {
                        texte: "il gagne en 1981 son 3eme Tour de France",
                        url: "./assets/bernard19812.jpg",
                    }
                ],
                des2:[
                    {
                        texte: "il gagne devant van impe ici avec la maillot de meilleur grimpeur et Robert Alban",
                        url: "./assets/bernard1981.jpg",
                    }
                ]
            },
    ]
    },
    ];
    //jsfiddle https://jsfiddle.net/b2e795ms/