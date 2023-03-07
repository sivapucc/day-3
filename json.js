//For in loop
var obj={
    "name":"Siva",
    "age":"27",
    "City":"Mayiladuthurai"
};
for(var a in obj){
console.log(a,obj[a]);
}
//___________________________

// For loop
var arr=[{
    "name":"Siva",
    "age":"27",
    "City":"Mayiladuthurai"
},{ "name":"Logesh",
    "age":"27",
    "City":"Puducherry"},
{ "name":"Sandeep",
    "age":"27",
    "City":"Puducherry"}];
for(var i=0;i<arr.length;i++){
   for(var a in arr[i]){
   console.log(a,arr[i][a]);
   }
}