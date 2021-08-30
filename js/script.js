$(function () { 
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
});

(function (global) {

var dc = {};
var homeHtmlUrl = "../snippet/home-snippet.html";
var homeHtmlUrl2 = "../snippet/home-snippet-2.html";
var homeHtmlUrl3 = "../snippet/home-snippet-3.html";
var homeu="../snippet/home.html";
var data="../data/fortunes.json";

var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};


var switchactive = function(a) {
  var one = "#navHomeButton";
  var two = "#navMenuButton";
  var three = "#navaboutButton";
  var check ="";
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

var reminder = function(nam,text){
  var c=document.querySelector("#main-content");
  console.log(c);
  text = text.
  console.log(text);
};

var usr;
var pas;
var ema;
dc.submit1 = function(a,b) {
  showLoading("#main-content");
  usr=a.value;
  pas=b.value;
  $ajaxUtils.sendGetRequest1(
    data,
    searchandshow,
    true);
  };

  function searchandshow(cat){
    $ajaxUtils.sendGetRequest1(
      homeu,
      function(homeHtml){
        var temp1 = getState(cat);
        if(temp1!="-999"&& temp1!="-09")
        homeHtml=homeHtml.replace(new RegExp("{{data}}","g"),"Dear "+temp1+"!! This is a project page on which we are working!!");
        else if(temp1=="-09"){
        alert("Entered Wrong Password. Please try again!!");
        dc.buildAndShowHomeHTML();
        }
        else{
        alert("No data found");
        dc.buildAndShowHomeHTML();
        }
        insertHtml('#main-content', homeHtml);
      },
      false
    );
  }

  function getState(data){
    for(var x in data){
      if(data[x].username && data[x].username.split(",").indexOf(usr.toString())!=-1) {
        if(data[x].password && data[x].password.split(",").indexOf(pas.toString())!=-1) {
          return data[x].username;
        }
        else{
          return "-09";
        }
      }
    }
    return "-999";
  }


  dc.submit2 = function(a,b,c) {
    showLoading("#main-content");
    usr=a.value;
    pas=b.value;
    ema=c.value;

    $ajaxUtils.sendGetRequest1(
      homeu,
      function(homeHtml){
       // searchandshow2();
        dc.buildAndShowHomeHTML2();
        homeHtml=homeHtml.replace(new RegExp("{{data}}","g"),"Dear "+usr+"!! This is a project page on which we are working!!");
        insertHtml('#main-content', homeHtml);
      },
      false
    );
    };


    function searchandshow2(){

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
dc.buildindex=function(){
  dc.buildAndShowHomeHTML();
};
global.$dc = dc;

})(window);

