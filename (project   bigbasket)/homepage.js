
var data= JSON.parse(localStorage.getItem("cart"))||[];
function count(){
    event.preventDefault();
    var x=data.length;
    var x=document.getElementById("count").innerText=x;
    console.log("no of item ",x);
    window.location.href="card.html"
}
function fun1(){
    var data= JSON.parse(localStorage.getItem("cart"))||[];
    event.preventDefault();
    
   
   var of1= document.querySelector(".f1a").innerText;

   var img1= document.querySelector(".f1b").src;

   var vg1= document.querySelector(".f1c").src;
// console.log("vg",vg1)
   var h1= document.querySelector(".f1d").innerText;
   var kg1= document.querySelector(".f1e").innerText;
   var price1= document.querySelector(".f1f").innerText;
   var del1= document.querySelector(".f1g").innerText;
   var time1= document.querySelector(".f1h").innerText;
// console.log("value   ",h1,of1,img1,vg1,kg1,price1,del1,time1)


  var obj={
of:of1,
img:img1,
vg:vg1,
// fsh:fsh1,
h:h1,
kg:kg1,
price:price1,
del:del1,
time:time1

  }
  
data.push(obj);
var x=data.length;
console.log("x ",x)
document.querySelector("#count").innerText=x;
console.log("obj ",obj)
localStorage.setItem("cart",JSON.stringify(data));
}
function fun2(){
    var data= JSON.parse(localStorage.getItem("cart"))||[];
    event.preventDefault();
    
   
   var of1= document.querySelector(".f2a").innerText;

   var img1= document.querySelector(".f2b").src;

   var vg1= document.querySelector(".f2c").src;
// console.log("vg",vg1)
   var h1= document.querySelector(".f2d").innerText;
   var kg1= document.querySelector(".f2e").innerText;
   var price1= document.querySelector(".f2f").innerText;
   var del1= document.querySelector(".f2g").innerText;
   var time1= document.querySelector(".f2h").innerText;
// console.log("value   ",h1,of1,img1,vg1,kg1,price1,del1,time1)


  var obj={
of:of1,
img:img1,
vg:vg1,
// fsh:fsh1,
h:h1,
kg:kg1,
price:price1,
del:del1,
time:time1

  }
data.push(obj);
var x=data.length;
console.log("x ",x)
document.querySelector("#count").innerText=x;
console.log("obj ",obj)
localStorage.setItem("cart",JSON.stringify(data));
}
var data= JSON.parse(localStorage.getItem("cart"))||[];
console.log(data);
// function fun3(){
    
//     event.preventDefault();
    
   
//    var of1= document.getElementById("dp1").innerText;

//    var img1= document.getElementById("dimg1").src;

//    var vg1= document.getElementById("dimg2").src;

//    var h1= document.getElementById("dh").innerText;
//    var kg1= document.getElementById("k").innerText;
//    var price1= document.getElementById("price").innerText;
//    var del1= document.getElementById("ddivp").innerText;
//    var time1= document.getElementById("time").innerText;
// // console.log("value   ",of1,img1,vg1,kg1,price1,del1,time1)


//   var obj={
// of:of1,
// img:img1,
// vg:vg1,
// // fsh:fsh1,
// h:h1,
// kg:kg1,
// price:price1,
// del:del1,
// time:time1

//   }
// data.push(obj);
// console.log("obj ",obj)
// localStorage.setItem("cart",JSON.stringify(data));
// }
// function fun4(){
    
//     event.preventDefault();
    
   
//    var of1= document.getElementById("dp1").innerText;

//    var img1= document.getElementById("dimg1").src;

//    var vg1= document.getElementById("dimg2").src;

//    var h1= document.getElementById("dh").innerText;
//    var kg1= document.getElementById("k").innerText;
//    var price1= document.getElementById("price").innerText;
//    var del1= document.getElementById("ddivp").innerText;
//    var time1= document.getElementById("time").innerText;
// // console.log("value   ",of1,img1,vg1,kg1,price1,del1,time1)


//   var obj={
// of:of1,
// img:img1,
// vg:vg1,
// // fsh:fsh1,
// h:h1,
// kg:kg1,
// price:price1,
// del:del1,
// time:time1

//   }
// data.push(obj);
// console.log("obj ",obj)
// localStorage.setItem("cart",JSON.stringify(data));
// }
// function fun5(){
    
//     event.preventDefault();
    
   
//    var of1= document.getElementById("dp1").innerText;

//    var img1= document.getElementById("dimg1").src;

//    var vg1= document.getElementById("dimg2").src;

//    var h1= document.getElementById("dh").innerText;
//    var kg1= document.getElementById("k").innerText;
//    var price1= document.getElementById("price").innerText;
//    var del1= document.getElementById("ddivp").innerText;
//    var time1= document.getElementById("time").innerText;
// // console.log("value   ",of1,img1,vg1,kg1,price1,del1,time1)


//   var obj={
// of:of1,
// img:img1,
// vg:vg1,
// // fsh:fsh1,
// h:h1,
// kg:kg1,
// price:price1,
// del:del1,
// time:time1

//   }
// data.push(obj);
// console.log("obj ",obj)
// localStorage.setItem("cart",JSON.stringify(data));
// }


