let listname = new Array();


function addData(){
    let Fname = document.getElementById("fname").value;
    let Lname = document.getElementById("lname").value;
    let Age = document.getElementById("age").value;
    storageData(Fname,Lname,Age)
}

function storageData(Fname,Lname,Age){
    listname.push([Fname,Lname,Age]);
    
}


// function showData(){
//     listname.map((listname) => {
//         return listname;
//       });
// }

// console.log(showData());


