myobj =
{
  "problem": " this is the answer ",

  "choicearray": [],

  "choices":
  {

  },
  "moreinfo": "",

  "whocanhelp": [],

  "Decision": "this is the decision taken by user",

  "assessdecisison": " for decision assesment"
}

var questions = [" 1. What is Problem ?",
  "2. What are the Choices ?",
  "3. what can be the Consequences?",
  "4. What are the Values ?",
  "5. How are you Feeling ?",
  "6.  Anything More you want to share ?",
  "7. Who Can Help ?",
  "8. what is your Decision ?",
  "9. Assess Decision"];

var flag = 0;

function submission(){
  alert("your data is Submitted")
}
// ##########################################################################################
//--------------------------------------------------------------------------------------------
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//---------------------------------------------------------------------------------------------

function show(btn) {
  document.getElementById(btn.id).disabled = false;
  var str1 = btn.id;
  var num = parseInt(str1.charAt(1)) + 1;
  var str2 = num.toString();
  var nid = 'b'.concat(str2);
  if(str1=="b9")
  {
    nid="b11";
  }
  var qno = parseInt(str1.charAt(1)) - 1;
  var question = questions[qno];
  flag = parseInt(str1.charAt(1));

  var x = document.getElementById("q").innerHTML = question;
  document.getElementById("txtarea").value = "";

  modal.style.display = "block";
  document.getElementById(nid).disabled = false;
  // document.getElementById(btn.id).disabled = true;
  // document.getElementById(btn.id).disabled = true;
}

//------------------------------------------------------------------------------------------
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

//----------------------------------------------------------------------------------------

function storingAnswers() {

  var ans = document.getElementById("txtarea").value;

  if (flag == 1) {
    myobj.problem = ans;
    modal.style.display = "none";
  }

  else if (flag == 2) {
    var choices = document.getElementsByClassName("myclassname");
    var tempchoice = [];
    console.log(choices.item);
    for (var i = 0; i < choices.length; i++) {
      tempchoice.push(choices[i].value);
    }
    myobj.choicearray = tempchoice;
    modal2.style.display = "none";

    for (var j = 1; j <= myobj.choicearray.length; j++) {

      myobj.choices[j] =
      {
        "choice": "",
        "consequences": "",
        "values": "",
        "feeling": ""
      };

    }
  }

  else if (flag == 6) {
    myobj.moreinfo = ans;
    modal.style.display = "none";
  }
  else if (flag == 7) {
    myobj.whocanhelp = ans;
    modal.style.display = "none";
  }
  else if (flag == 8) {
    myobj.Decision = ans;
    modal.style.display = "none";
  }
  else if (flag == 9) {
    myobj.assessdecisison = ans;
    modal.style.display = "none";
  }
  else if (flag == 10) {
    myobj.wip = ans;
    modal.style.display = "none";
  }
  else {
    alert("invalid flag value")
  }
}

//----------------------------------------------------------------------------------------

// ##########################################################################################

var modal2 = document.getElementById("myModal2");

var span2 = document.getElementsByClassName("close2")[0];

choicearray = [];

function show2(btn) {
  document.getElementById(btn.id).disabled = false;
  var str1 = btn.id;
  var num = parseInt(str1.charAt(1)) + 1;
  var str2 = num.toString();
  var nid = 'b'.concat(str2);
  var qno = parseInt(str1.charAt(1)) - 1;
  var question = questions[qno];
  flag = parseInt(str1.charAt(1));

  var x = document.getElementById("q2").innerHTML = question;

  modal2.style.display = "block";
  document.getElementById(nid).disabled = false;
  // document.getElementById(btn.id).disabled = true;
  // document.getElementById(btn.id).disabled = true;
}
//----------------------------------------------------------------------------------------

span2.onclick = function () {
  modal2.style.display = "none";
}

//----------------------------------------------------------------------------------------

var newinput = function () {
  var id = 1;
  var parent = document.getElementById("container-to-ad");
  // console.log(parent);
  var field = document.createElement("input")
  field.className = "myclassname"
  field.style = "display:block;"
  field.id = "input" + id;
  parent.appendChild(field);
  id += 1;
}
//----------------------------------------------------------------------------------------

var delinput = function () {
  var parent = document.getElementById("container-to-ad");
  // parent.removeChild(parent.childNodes[parent.length-1]);  
  parent.removeChild(parent.lastChild);

}

//----------------------------------------------------------------------------------------
// ##########################################################################################

var modal3 = document.getElementById("myModal3");

var span3 = document.getElementsByClassName("close3")[0];

function show3(btn) {
  document.getElementById(btn.id).disabled = false;
  var str1 = btn.id;
  var num = parseInt(str1.charAt(1)) + 1;
  var str2 = num.toString();
  var nid = 'b'.concat(str2);
  var qno = parseInt(str1.charAt(1)) - 1;
  var question = questions[qno];
  flag = parseInt(str1.charAt(1));
  var x = document.getElementById("q3").innerHTML = question;
  nxt();

  modal3.style.display = "block";
  document.getElementById(nid).disabled = false;
  // document.getElementById(btn.id).disabled = true;
  // document.getElementById(btn.id).disabled = true;
}

//----------------------------------------------------------------------------------------

span3.onclick = function () {
  modal3.style.display = "none";
}
//----------------------------------------------------------------------------------------


var newinput1 = function () {
  var id = 11;
  var parent = document.getElementById("container-to-ad-11");
  // console.log(parent);
  var field = document.createElement("input")
  field.className = "myclassname2"
  field.style = "display:block;"
  field.id = "input" + id;
  parent.appendChild(field);
  id += 1;
}
//----------------------------------------------------------------------------------------


var delinput1 = function () {
  var parent = document.getElementById("container-to-ad-11");
  // parent.removeChild(parent.childNodes[parent.length-1]);  
  parent.removeChild(parent.lastChild);

}

//----------------------------------------------------------------------------------------


var n = 1;


var nxt = function () {
  var l = myobj.choicearray.length;
  var x = document.getElementById("container-to-ad-1").innerHTML = myobj.choicearray[n-1]

  if (n < (l)) {
    document.getElementById("s2").disabled = true;
    document.getElementById("s1").disabled = false;

    var temparray = [];
    var consarray = document.getElementsByClassName("myclassname2");
    console.log(consarray);
    for (var i = 0; i < consarray.length; i++) {
      temparray.push(consarray[i].value)
    }
    myobj.choices[n].choice = myobj.choicearray[n-1]
    myobj.choices[n].consequences = temparray;
    n = n + 1
    console.log(l)
    console.log(n)
  }
  else if (n == l) {
    document.getElementById("s2").disabled = false;
    document.getElementById("s1").disabled = true;

    var temparray = [];
    var consarray = document.getElementsByClassName("myclassname2");
    console.log(consarray.item);
    for (var i = 0; i < consarray.length; i++) {
      temparray.push(consarray[i].value)
    }
    myobj.choices[n].choice = myobj.choicearray[n-1]  
    myobj.choices[n].consequences = temparray;
    n = n + 1
    console.log(l)
    console.log(n)
  }

  else if (n > l) {
    console.log(n)
    modal3.style.display = "none";
  }
}

//----------------------------------------------------------------------------------------
// #######################################################################################

var modal4 = document.getElementById("myModal4");

var span4 = document.getElementsByClassName("close4")[0];

function show4(btn) {
  document.getElementById(btn.id).disabled = false;
  var str1 = btn.id;
  var num = parseInt(str1.charAt(1)) + 1;
  var str2 = num.toString();
  var nid = 'b'.concat(str2);
  var qno = parseInt(str1.charAt(1)) - 1;
  var question = questions[qno];
  flag = parseInt(str1.charAt(1));

  var x = document.getElementById("q4").innerHTML = question;
  nxt1();

  modal4.style.display = "block";
  document.getElementById(nid).disabled = false;
  // document.getElementById(btn.id).disabled = true;
  // document.getElementById(btn.id).disabled = true;
}

//----------------------------------------------------------------------------------------

span4.onclick = function () {
  modal4.style.display = "none";
}
//----------------------------------------------------------------------------------------

var newinput2 = function () {
  var id = 11;
  var parent = document.getElementById("container-to-ad-21");
  // console.log(parent);
  var field = document.createElement("input")
  field.className = "myclassname3"
  field.style = "display:block;"
  field.id = "input" + id;
  parent.appendChild(field);
  id += 1;
}
//----------------------------------------------------------------------------------------


var delinput2 = function () {
  var parent = document.getElementById("container-to-ad-21");
  // parent.removeChild(parent.childNodes[parent.length-1]);  
  parent.removeChild(parent.lastChild);
}
//----------------------------------------------------------------------------------------
var v = 1;


var nxt1 = function () {
  var l = myobj.choicearray.length;
  var y = document.getElementById("container-to-ad-2").innerHTML = myobj.choicearray[v-1]
  

  if (v < (l)) {
    document.getElementById("v2").disabled = true;
    document.getElementById("v1").disabled = false;

    var temparray = [];
    var valuearray = document.getElementsByClassName("myclassname3");
    console.log(valuearray.item);
    for (var i = 0; i < valuearray.length; i++) {
      temparray.push(valuearray[i].value)
    }
    myobj.choices[v].values = temparray;
    v=v+1;
    // console.log(l)
    // console.log(n)
  }
  else if (v == l) {
    document.getElementById("v2").disabled = false;
    document.getElementById("v1").disabled = true;

    var temparray = [];
    var valuearray = document.getElementsByClassName("myclassname3");
    console.log(valuearray.item);
    for (var i = 0; i < valuearray.length; i++) {
      temparray.push(valuearray[i].value)
    }
    myobj.choices[v].values = temparray;
    v=v+1;
    // console.log(l)
    // console.log(n)
  }

  else if (v > l) {
    // console.log(n)
    modal4.style.display = "none";
  }
}

//----------------------------------------------------------------------------------------
// ##########################################################################################

var modal5 = document.getElementById("myModal5");

var span5 = document.getElementsByClassName("close5")[0];

function show5(btn) {
  document.getElementById(btn.id).disabled = false;
  var str1 = btn.id;
  var num = parseInt(str1.charAt(1)) + 1;
  var str2 = num.toString();
  var nid = 'b'.concat(str2);
  var qno = parseInt(str1.charAt(1)) - 1;
  var question = questions[qno];
  flag = parseInt(str1.charAt(1));

  var x = document.getElementById("q5").innerHTML = question;
  // var Y = document.getElementById("container-to-ad-3").innerHTML = myobj.choicearray[f-1];
  nxt2();
  modal5.style.display = "block";
  document.getElementById(nid).disabled = false;
  // document.getElementById(btn.id).disabled = true;
  // document.getElementById(btn.id).disabled = true;
}

//----------------------------------------------------------------------------------------

span5.onclick = function () {
  modal5.style.display = "none";
}
//----------------------------------------------------------------------------------------

var f = 1;

var nxt2 = function () {
  var l = myobj.choicearray.length;
  var Y = document.getElementById("container-to-ad-3").innerHTML = myobj.choicearray[f-1];

  if (f < (l)) {
    document.getElementById("f2").disabled = true;
    document.getElementById("f1").disabled = false;

    // var temparray = [];
    var tempfeel = document.getElementById("input1000").value;
    // console.log(valuearray.item);
    // for (var i = 0; i < valuearray.length; i++) {
    //   temparray.push(valuearray[i].value)
    // }
    myobj.choices[f].feeling = tempfeel;
    f=f+1;
    // console.log(l)
    // console.log(n)
  }
  else if (f == l) {
    document.getElementById("f2").disabled = false;
    document.getElementById("f1").disabled = true;

    // var temparray = [];
    var tempfeel = document.getElementById("input1000").value;
    // console.log(valuearray.item);
    // for (var i = 0; i < valuearray.length; i++) {
    //   temparray.push(valuearray[i].value)
    // }
    myobj.choices[f].feeling = tempfeel;
    f=f+1;
    // console.log(l)
    // console.log(n)
  }

  else if (f > l) {
    // console.log(n)
    modal5.style.display = "none";
  }
}

//----------------------------------------------------------------------------------------
// #########################################################################################
// Get the modal
var modal6 = document.getElementById("myModal6");

// Get the button that opens the modal
var btn = document.getElementById("b11");

// Get the <span> element that closes the modal
var span6 = document.getElementsByClassName("close6")[0];

// When the user clicks the button, open the modal 

// When the user clicks on <span> (x), close the modal
span6.onclick = function () {
  modal6.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
}
function changehtml() {

  document.getElementById("p1").innerHTML = myobj.problem;
  document.getElementById("p6").innerHTML = myobj.moreinfo;
  document.getElementById("p7").innerHTML = myobj.whocanhelp;
  document.getElementById("p8").innerHTML = myobj.Decision;
  document.getElementById("p9").innerHTML = myobj.assessdecisison;
  modal6.style.display = "block";
}

// var div = document.createElement("p");
// const newContent = document.createTextNode("Hi there and greetings!");
// div.appendChild(newContent);