$(function () { 
  $("#navbarToggle").blur(function (event) {
    let screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
});

(function (global) {

let dc = {};
let homeHtmlUrl = "../snippet/home-snippet.html";
let homeHtmlUrl2 = "../snippet/home-snippet-2.html";
let homeHtmlUrl3 = "../snippet/home-snippet-3.html";
let homeHtmlUrl4 = "../snippet/process.html";

let insertHtml = function (selector, html) {
  let targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

let showLoading = function (selector) {
  let html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};


let switchactive = function(a) {
  let one = "#navHomeButton";
  let two = "#navMenuButton";
  let three = "#navaboutButton";
  let check ="";
    if(one!=a){
    check = document.querySelector(one).className;
    check = check.replace(new RegExp("active", "g"), "");
    document.querySelector(one).className = check;
    }
    if(two!=a){
    check = document.querySelector(two).className;
    check = check.replace(new RegExp("active", "g"), "");
    document.querySelector(two).className = check;
    }
    if(three!=a){
    check = document.querySelector(three).className;
    check = check.replace(new RegExp("active", "g"), "");
    document.querySelector(three).className = check;
  }
  document.querySelector(a).className="active";
};

// let usr;
// let pas;
// let ema;
// dc.submit1 = function(a,b) {
//   showLoading("#main-content");
//   usr=a.value;
//   pas=b.value;
//   $ajaxUtils.sendGetRequest1(
//     data,
//     searchandshow,
//     true);
//   };

//   function searchandshow(cat){
//     $ajaxUtils.sendGetRequest1(
//       homeu,
//       function(homeHtml){
//         let temp1 = getState(cat);
//         if(temp1!="-999"&& temp1!="-09")
//         homeHtml=homeHtml.replace(new RegExp("{{data}}","g"),"Dear "+temp1.username+"!! This is a project page on which we are working!! By the way, your email id which is "+temp1.email+".");
//         else if(temp1=="-09"){
//         alert("Entered Wrong Password. Please try again!!");
//         dc.buildAndShowHomeHTML();
//         }
//         else{
//         alert("No data found");
//         dc.buildAndShowHomeHTML();
//         }
//         insertHtml('#main-content', homeHtml);
//       },
//       false
//     );
//   }

//   function getState(data){
//     for(let x in data){
//       if(data[x].username && data[x].username.split(",").indexOf(usr.toString())!=-1) {
//         if(data[x].password && data[x].password.split(",").indexOf(pas.toString())!=-1) {
//           return data[x];
//         }
//         else{
//           return "-09";
//         }
//       }
//     }
//     return "-999";
//   }

  let arrOpenedDivs= document.querySelectorAll(".show");
  for (i = 0; i < arrOpenedDivs.length; i++) {
      arrOpenedDivs[i].classList.remove('show');
  } 
  
dc.buildAndShowHomeHTML=function(){
  showLoading("#main-content");
    switchactive("#navHomeButton");
    $("#main-content").load(homeHtmlUrl);
}

dc.buildAndShowHomeHTML2=function() {
  showLoading("#main-content");
  switchactive("#navMenuButton");
  $("#main-content").load(homeHtmlUrl2);
};

dc.buildAndShowHomeHTML3 =function() {
  showLoading("#main-content");
  switchactive("#navaboutButton");
  $("#main-content").load(homeHtmlUrl3);
};

dc.buildAndShowHomeHTML4 =function() {
  showLoading("#main-content");
  $("#main-content").load(homeHtmlUrl4);
};
global.$dc = dc;

})(window);

