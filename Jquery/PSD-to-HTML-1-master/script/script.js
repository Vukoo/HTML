//$("h3").css({border: "3px solid blue"});

//$(".wrapper").css({border:"3px solid red"});

//$("#clients").css({border:"3px solid yellow"});

//$("header nav li:first").css({border:"3px solid red"});
//$("header nav li:last").css({border:"3px solid red"});

//$("#contact ul:first").css({border:"3px solid red"});
//$("#contact ul:last").css({border:"3px solid red"});
//$("header nav li:even").css({border:"2px  solid blue"});
//$("header nav li:odd").css({border:"2px  solid blue"});

//$("section:not('#contact')").css({border:"2px  solid black"});

//$("#social-nav li:lt(3)").css({border:"2px  solid black"});

// https://api.jquery.com/category/selectors/

//$("#contact-methods").next().css({border: "3px solid red"});

//$("#social-nav").prev().css({border: "3px solid blue"});

//$(".banner-title").parents().css({border: "3px solid pink"});


//$("#social-nav").children().css({border: "3px solid blue"});

//$("#contact").find(".facebook").css({border: "3px solid blue"});

// $("#contact-methods").css({border:"2px solid red"})
// .next().css({border:"4px solid green"})
// .closest("section").css({border: "2px solid yellow"});

// var tweet = "<div style='margin: 20px 0; padding: 10px; backgound: #eee'> The big fight live: Han vs Cheese!</div>"
//ADDING  CHANGING content

/*
$("#tweets div").append(tweet);
.append() add content to bottom of the element
.prepend() add content to top of the element
.before()
.after()
.html() change all html
.text() change only text


$("section").wrap("<div>");
$("section").unwrap();
$("section").wrapAll(<div>);


wrap() -wrap all matched elements individualy
unwrap() - unwrap all matched elements
wrapAll() - wpras all elements combined with 1 single element
*/

var wrapper = "<div class='wrapper'>";
var button = $(".button");
var wrapped= true;

button[0].onclick = function(){
  if(wrapped)
  {
    $("section").unwrap();
    wrapped= false;
    button.text("Wrap");
  } else{
    $("section").wrapAll(wrapper);
    wrapped= true;
    button.text("Unwrap");
  }

};


/*
$(".button").remove();
$("#contact img").remove();
 .empty() empties the inner HTML of an elements
 .remove() remove the element component



//$("#contact img").attr("alt","location"); ???
//$("#contact img").removeAttr("alt");  ???


.removeAttr()
.attr() can read and set atributes
*/



// console.log($('#social-nav').css("top","-200px").css("left","100px"));
