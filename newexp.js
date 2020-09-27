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

// ##########################################################################################
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function show(btn) {
  var button_id = btn.id;
  flag = parseInt(button_id.charAt(1));

  //  calculation to dispaly question 
  var qno = parseInt(button_id.charAt(1)) - 1;
  var question = questions[qno];
  var x = document.getElementById("q").innerHTML = question;
  document.getElementById("txtarea").value = "";

  modal.style.display = "block";
}
//------------------------------------------------------------------------------------------
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

function enable_next_button(flag){
  var next_id_number= flag +1;
  var next_button_string= next_id_number.toString();
  var next_button_id='b'.concat(next_button_string);
  document.getElementById(next_button_id).disabled = false;
}

function storingAnswers() 
{

  var ans = document.getElementById("txtarea").value;

  if (ans.length==0){
    alert("you have not entered anything.");
  }
  else if (flag == 1) {
    myobj.problem = ans;
    enable_next_button(flag);
    modal.style.display = "none";
  }
  else if (flag == 2) 
  {
    var ans2=document.getElementsByClassName("myclassname")[0].value;
    if ( ans2.length==0 ) {
      alert("you have not entered any choices");
    }
    else 
    { var choices=document.getElementsByClassName("myclassname");
      var tempchoice = [];
      for (var i = 0; i < choices.length; i++) 
      {
        tempchoice.push(choices[i].value);
      }
      myobj.choicearray = tempchoice;
      enable_next_button(flag);
      modal2.style.display = "none";
      for (var j = 1; j <= myobj.choicearray.length; j++) 
      {
        myobj.choices[j] =
        {
          "choice": "",
          "consequences": "",
          "values": "",
          "feeling": ""
        };
      }
    }
  }
  else if (flag == 6) {
    myobj.moreinfo = ans;
    enable_next_button(flag);
    modal.style.display = "none";
  }
  else if (flag == 7) {
    myobj.whocanhelp = ans;
    enable_next_button(flag);
    modal.style.display = "none";
  }
  else if (flag == 8) {
    myobj.Decision = ans;
    enable_next_button(flag);
    modal.style.display = "none";
  }
  else if (flag == 9) {
    myobj.assessdecisison = ans;
    enable_next_button(flag);
    modal.style.display = "none";
  }
}
//----------------------------------------------------------------------------------------

var modal2 = document.getElementById("myModal2");
var span2 = document.getElementsByClassName("close2")[0];

function show2(btn){
  var button_id = btn.id;
  flag = parseInt(button_id.charAt(1));
  //  calculation to dispaly question 
  var qno = parseInt(button_id.charAt(1)) - 1;
  var question = questions[qno];
  var x = document.getElementById("q2").innerHTML = question;
  modal2.style.display = "block";
}

span2.onclick = function () {
  modal2.style.display = "none";
}
//----------------------------------------------------------------------------------------
var id = 1;
var newinput = function () {
  var parent = document.getElementById("container-to-ad");
  var field = document.createElement("textarea")
  field.className = "myclassname"
  field.style = "display:block;"
  field.style= "min-width:99% ;"
  field.id = "textarea" + id;
  parent.appendChild(field);
  id += 1;
}
//----------------------------------------------------------------------------------------
var delinput = function () {
  var parent = document.getElementById("container-to-ad");
  parent.removeChild(parent.lastChild);

}