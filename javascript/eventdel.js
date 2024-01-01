

document.querySelector("#category").addEventListener("click" , (e)=>{
    console.log(e);
    console.log( e.target);
    console.log(e.target.id)

    if(e.target.id == "laptops"){
        laptopfun();
    }
    
    // window.location.href = "/" + e.target.id ;     because of this if we click on the catageroy that will take to new page which should not happen

    // if(e.target.tagName == "LI"){
    //     window.location.href = "/" + e.target.id ; 
    // }

   
})

/*

blur , resixe ... 



*/

function laptopfun() {
        console.log("laptop fun is called ");
}