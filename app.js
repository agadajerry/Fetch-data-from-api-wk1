$(document).ready(()=>{


    $.ajax({

        url:"https://swapi.dev/api/people",

        type: "GET",

        success:(data)=>{
            

            for(let i=0;i<data.results.length;i++){
               
                // auto generated html container and tags 

                $("#stars").append('<div class = "col-md-4 col-sm-4 mb-3">'+
                '<a href ="#" id= "actorname'+i+'" class = "link" data-toggle ="modal" data-target = "#myModal"><div class="card">'+
                 '<img src="images/war3.jpg" class="card-img-top img-fluid" alt="star wars images">'+
                       '<div class="card-body"> <button  class= "btn btn-light" value= "'+data.results[i].name+'">'+data.results[i].name+'</button></div> </div></a></div>');

                    //    --------------------------------------------------------------------------------------

                        // Fetching individual character from the api on btn click
                        // ananymous function

                       let fetchData = (name, height, genda)=>{
                         document.getElementById('actorname'+i).addEventListener("click",()=>{
                            //    console.log(name+" height: "+height+" Gender: "+genda);
                              document.getElementById("name").innerText = "Name :"+name;
                              document.getElementById("gender").innerText = "Gender : "+genda;
                              document.getElementById("height").innerText = "Height : "+height;
                               

                           })
                       }
                       fetchData(data.results[i].name, data.results[i].height,
                        data.results[i].gender);// callback
            }
        },
         error:function(err){

            console.log(err);
        }
    })
})


