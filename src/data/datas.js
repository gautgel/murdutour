//by Gauthier
/*********************************************************************************************************/
//I create the data component to store my data for cyclists (date, year, description etc)
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
    ]
    },
    ];
    //I display in a console.log () my "collection", my table 
    console.log(datas)
    
    //with the map () function I make a loop that gets my objects back to me ({id: name: etc}) and then I pass an item parameter in order to retrieve in the objects the associated values 
    datas.map((item, index)=>{
    item.id===0 ? console.log(item.name) : false
    })

    //jsfiddle https://jsfiddle.net/b2e795ms/