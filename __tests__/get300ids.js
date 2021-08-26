const fetch = require('node-fetch')
const fs = require('fs');




const dothethree = async () => {
    const threehundo = new Set();
    await fetch('https://api.artic.edu/api/v1/artworks/search?limit=100&page=1')
        .then(response=>response.json())
        .then(data=>{
            for (const object of data.data){
        // console.log('Hiya')
        // console.log(object)
            // console.log(threehundo)
            threehundo.add(JSON.stringify(object.id))
        }
    })

    await fetch('https://api.artic.edu/api/v1/artworks/search?limit=100&page=2')
    .then(response=>response.json())
    .then(data=>{
        for (const object of data.data){
            threehundo.add(JSON.stringify(object.id))
        }
    })
    await fetch('https://api.artic.edu/api/v1/artworks/search?limit=100&page=3')
    .then(response=>response.json())
    .then(data=>{
        for (const object of data.data){
            threehundo.add(JSON.stringify(object.id))
        }
    })
    console.log('size: ',threehundo.size)
    const threeArray = [...threehundo]
    console.log(threeArray.length);
    fs.writeFileSync("data.txt", JSON.stringify(threeArray),'utf8')
    return threeArray;
}
dothethree();