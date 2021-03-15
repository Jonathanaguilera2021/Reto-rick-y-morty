function search(){
    let capture = document.getElementById(`charCapture`).value
    document.getElementById(`charContent`).innerHTML =""
    let captureId = parseInt(capture)
   
    for( let i= 1;i<=captureId; i++){
    fetch (`https://rickandmortyapi.com/api/character/${i}`)
    .then(res => res.json())
    .then(data =>{
        
        console.log(data)
        
        
          let html = `<div class="card col-3 ml-10 m-5 p-5" id="aboutSection" style="width: 18rem;">
            <img src="${data.image}" class="card-img-top w-80 ml-2 mt-5  bg-primary" alt="...">
            <div class="card-body">
              <p class="card-text fs-3"id="charName"> ${data.name}</p>
              <p class="card-text"id="charSpecies">Especie:${data.species}</p>
              <p class="card-text"id="charStatus"> Estatus:${data.status}</p>
              <p class="card-text"id="charOrigin">Origen:${data.origin.name}</p>
              <p class="card-text"id="charGender">Genero:${data.gender}</p>

             </div>`

             document.getElementById(`charContent`).innerHTML += html


    })

}

}