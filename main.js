var result = document.querySelector("#result");
var btns = document.querySelectorAll(".numbers");
var btnDelete = document.querySelector(".delete")
var btnEqual = document.querySelector(".equal")

for ( var x =0 ; x< btns.length ;  x++){
    btns[x].addEventListener( "click" , (e) =>{
      result.value += e.target.dataset.number;
    });
};

btnDelete.addEventListener("click" , (e) =>{
    result.value = e.target.dataset.delete;
});

btnEqual.addEventListener("click" , () => {
   if ( result.value === ""){
     result.value = "";
   }else {
    result.value = eval(result.value);
   }
});
