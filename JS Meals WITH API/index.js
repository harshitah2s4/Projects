$.ajax({
    type:'get',
    url:'https://themealdb.com/api/json/v1/1/filter.php?a=Canadian',
    success : function(responce){
        console.log(responce.meals);
        for(var i=0;i<responce.meals.length;i++){
         var newitems=`<div class="col-md-3 m-2 text-center shadow-lg p-3 mb-5 bg-white rounded">
         <p>${responce.meals[i].strMeal}</p>
         <img src=${responce.meals[i].strMealThumb} class="img-fluid"/>
         <p>${responce.meals[i].idMeal}</p>
         </div>`
         $('#myitems').append(newitems)
        }
},
error:function(error)
{
console.log(error);
}
})