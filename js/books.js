const books={
    grozine:[
        {
            ISBN:1,
            leidimo_metai:2005,
            pavadinimas:'Mano mintys debesyse',
            psl_skaicius:300,
        },
        {
            ISBN:2,
            leidimo_metai:2018,
            pavadinimas:'Mintys',
            psl_skaicius:150,
        },
        {
            ISBN:3,
            leidimo_metai:1994,
            pavadinimas:'Pauliaus laiptai',
            psl_skaicius:256,
        },
        {
            ISBN:4,
            leidimo_metai:2023,
            pavadinimas:'Dievo miskas',
            psl_skaicius:85,
        }
    ],
    negrozine:[
        {
            ISBN:1,
            leidimo_metai:2006,
            pavadinimas:'Traktoriukas',
            psl_skaicius:155,
        },
        {
            ISBN:2,
            leidimo_metai:2007,
            pavadinimas:'Ilgos istorijos',
            psl_skaicius:128,
        },
        {
            ISBN:3,
            leidimo_metai:2008,
            pavadinimas:'Dviracio keliai',
            psl_skaicius:20,
        },
        {
            ISBN:4,
            leidimo_metai:2001,
            pavadinimas:'Negrybu karas',
            psl_skaicius:365,
        }
    ],
    istorine:[
        {
            ISBN:1,
            leidimo_metai:1995,
            pavadinimas:'Antras pasaulinis',
            psl_skaicius:652,
        },
        {
            ISBN:2,
            leidimo_metai:1946,
            pavadinimas:'Kaip isgyvenau kara',
            psl_skaicius:265,
        },
        {
            ISBN:3,
            leidimo_metai:1955,
            pavadinimas:'10 metau po katastrofos',
            psl_skaicius:365,
        },
        {
            ISBN:4,
            leidimo_metai:2000,
            pavadinimas:'Chernobilio bylos',
            psl_skaicius:651,
        }
    ]
}

for(let kategorija in books){
    console.log(`${kategorija}(${books.grozine.length} knygu)`)
    console.log("--------------------------------------------")
    for(knyga of books[kategorija]){
        console.log(`ISBN:${knyga.ISBN}`)
        if(knyga.leidimo_metai==2023){
            console.log(`Leidimo metai:${knyga.leidimo_metai}(Nauja knyga)"`)
        }else{
            console.log(`Leidimo metai:${knyga.leidimo_metai}`)
        }
        console.log(`Pavadinimas:${knyga.pavadinimas}`)
        console.log(`Puslapiu skaicius:${knyga.psl_skaicius}`)
        console.log("--------------------------------------------")
    }
}