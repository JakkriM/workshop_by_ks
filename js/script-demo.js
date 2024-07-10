let listname = new Array();

listname = [{
    fname : "Fname",
    lname : "Lname",
    age : "Age"
}]

listname.push({
    fname : "Fname1",
    lname : "Lname2",
    age : "Age3"
});

function addData(){
    let Fname = document.getElementById("fname").value;
    let Lname = document.getElementById("lname").value;
    let Age = document.getElementById("age").value;
    storageData(Fname,Lname,Age)
}

function storageData(Fname,Lname,Age){
    
listname.push({
    fname : Fname,
    lname : Lname,
    age : Age
});
}


let tide = listname.forEach(listname => { 
   return  `<li><span>${listname.fname} ${listname.lname}</span> ${listname.age
      }</li>`    });
