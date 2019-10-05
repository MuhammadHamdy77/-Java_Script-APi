var req ;
var rowData = document.getElementById('rowData');
var posts = "";
var category = "general";
var links = document.getElementsByClassName('nav-link');
var links2 = document.getElementsByClassName('list-group-item');

for ( var i = 0; i <links2.length ; i++){
    links2[i].addEventListener("click", function(e){
        var language = e.target.innerHTML;
        getNews2(language);
    })
}
for(var i = 0; i < links.length; i++){

    links[i].addEventListener("click", function(e){
        var category  = e.target.innerHTML;
        getNews(category)
    });
}
getNews2("us");

function getNews2(language){
    if(window.XMLHttpRequest){
        req = new XMLHttpRequest();
    }
     else
     {
         req = new ActiveXObject('Microsoft.XML')
     }
    
    req.open('GET','http://newsapi.org/v2/top-headlines?country='+language+'&category=sport&apiKey=eae05651fd8247ef805a7a6eb125ef11');
    req.onload = function()
    {
        if( req.status == 200 && req.readyState == 4){
            posts = JSON.parse(req.response);
            posts = posts.articles;
            displayData();
        }
    }
    req.send();
    }

function getNews(category){
if(window.XMLHttpRequest){
    req = new XMLHttpRequest();
}
 else
 {
     req = new ActiveXObject('Microsoft.XML')
 }

req.open('GET','http://newsapi.org/v2/top-headlines?country=eg&category='+category+'&apiKey=eae05651fd8247ef805a7a6eb125ef11');
req.onload = function()
{
    if( req.status == 200 && req.readyState == 4){
        posts = JSON.parse(req.response);
        posts = posts.articles;
        displayData();
    }
}
req.send();
}
getNews("sport");
function displayData(){
    var temp = "";
    for( var i = 0; i < posts.length ; i++){

        temp +=`<div class="col-md-3"><a href=`+posts[i].url+` target="_blank"> <div class="post"><img class="img-fluid" src='`+posts[i].urlToImage+`'/><h2>`+posts[i].title+`</h2><p  class="text-danger"></p></div></a></div>`
    }
    rowData.innerHTML = temp;
}

