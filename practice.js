// // var cleanestCities = ["Cheyenne", "cheyenne", "Santa Fe", "santa fe", "Tucson", "tucson", "Great Falls",
// // "great falls", "Honolulu", "honolulu"];
//  var cityToCheck = prompt("Enter your city");
// //  cityToCheck = cityToCheck.toupperCase();
//  var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
//  for (var i = 0; i <= 4; i++) {
// if (cityToCheck === cleanestCities[i]) {
//  alert("It's one of the cleanest cities");
//  }
// }
// var firstChar = cityToCheck.slice(2, 5);
// alert(firstChar)
// alert(cleanestCities)
// var firstChar = cityToCheck.slice(0, 1);
// var otherChars = cityToCheck.slice(1);
//  firstChar = firstChar.toUpperCase();
//  otherChars = otherChars.toLowerCase();
//  var cappedCity = firstChar + otherChars;
//  alert(cappedCity)
//  var month = prompt("Enter a month");
//  var charsInMonth = month.length;
//  if (charsInMonth > 3) {
//  monthAbbrev = month.slice(0, 3);
//  }
//  alert(monthAbbrev)

// var str = prompt("Enter some text");
//  var numChars = str.length;
//  for (var i = 0; i < numChars; i++) {
//  if (str.slice(i, i + 2) === " ") {
//  alert("No double spaces!");
// //  break;
//  }}

// text=document.getElementById("t").innerHTML;
//  for (var i = 0; i < text.length; i++) {
//      if (text.slice(i, i + 12) === "World War II") {
//      text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//      }
//      }
//       var firstChar = text.indexOf("World War II");
//  if (firstChar !== -1) {
// text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
//  }
// alert(text)
// a=+prompt("enter age")
// // a=Math.random(3);
// // b=(a*6)
// //  c=a.tofixed();
// // alert(a)

// price=+prompt("write price")
// taxrate=+prompt("write a tex rate")
// var prettytotal = price + (price * taxRate);
// // var prettyTotal = total.toFixed(2);
// var currencyTotal = "$" + prettyTotal;
// // var prettyTotal = total.toFixed();

// // var str = num.toString();
// //  if (str.charAt(str.length - 1) === "5") {
// //  str = str.slice(0, str.length - 1) + "6";
// // //  }
// //  num = Number(str);
// //  prettyNum = num.toFixed(2);
//  alert(currencyTotal)

// // current date method
// var dayname=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
// var monthname=["january","february","march","april","may","june","july","august","september","october","november","december"]
// var now=new Date();
// var day=now.getDate();
// var month=now.getMonth();
// var year=now.getFullYear();
// var time=now.getTime();
// var today=day+ "," +monthname[month]+ ","+ year
// alert(today)
// alert(now)
// alert(time)

// var today = new Date();
// var doomsday = new Date("november 25, 1991");
// var mstoday = today.getTime();
// var msdoom = doomsday.getTime();
// var difftime=mstoday - msdoom
// var totaltime=difftime/(1000*60*60*24);
// // var total=math.floor(totaltime)
// // alert(total)
// alert(totaltime);

// function tellTime() {
//        var now = new Date();
//        var theHr = now.getHours();
//       var theMin = now.getMinutes();
//        alert("Current time: "+ theHr + ":" + theMin);
//      }
//      tellTime()
//      alert(now)

// function greetUser() {
//       alert("Hello, there.");
//     }
//     greetUser()

// function greetuser(greeting,yourname,your){
//     alert(greeting+yourname+your)
// }
// var greeting = "Hello, there."
// var yourname="waqas saeed"
// var your="ahmad raza"
// greetuser(greeting,yourname,your);
// // greetuser(yourname)
// // greetuser(your)

// function hello(name) {
//     you="wa aaa";
//     name="DESIGNED BY WAQAS SAEED ";
//     alert(name);
// }
// hello(name)

// dayOfWk=prompt("write day first three letters")
// switch(dayOfWk) {
//       case "Sat" :
//         alert("Whoopee");
//         break;
//       case "Sun" :
//         alert("Whoopee");
//         break;
//       case "Fri" :
//         alert("TGIF!");
//        break;
//      default :
//        alert("Shoot me now!");
//      }

// for (var i = 0; i <= 3; i++) {
//      alert(i);
//    }

//   var i = 0;
//   while (i <= 3) {
//     alert(i+"  while loop");
//     i++;
//   }

// var i = 0;
// do {
//    alert(i+"  do while loop");
//    i++; 
//  } while (i <= 3); 

// a=document.childNodes[0].childNodes[1].childNodes[1].childNodes[1];
// alert(x.childNodes)

// function checkForPopBlocker() {
//        var testPop = window.open("https://www.google.com/", "new work","width=600,height=600");
//        if (testPop === null) {
//          alert("Please disable your popup blocker.");
//        }
//     //    testPop.close();
//      }
// function checkForLastName() {
//        if (document.getElementById("lastNameField").value.length === 0) {
//         alert("Please enter your last name");
//          document.getElementById("lastNameField").focus();
//          return false;
//        }
//      }

// function checkForLastName() {
//        var targetField = document.getElementById("lastNameField");
//         if (targetField.value.length === 0) {
//          alert("Please enter your last name");
//          targetField.focus();
//           targetField.style.background = "yellow";
//           return false;
//         }
//         targetField.style.background = "white";
//      }

// function checkForSelection() {
//        if (document.getElementById("states").selectedIndex === 0) {
//          alert("Please select a state.");
//         return false;
//        }
//      }

// function validateRadios() {
//         var radios = document.getElementsByName("r1");
//        for (var i = 0; i < radios.length; i++) {
//          if (radios[i].checked) {
//            return true;
//           }
//         }
//         alert("Please check one.");
//         return false;
//      }

// function validateZIP() {
//     var valueEntered = document.getElementById("zip").value;
//     var numChars = valueEntered.length;
//     if (numChars < 5) {
//         alert("Please enter a 5-digit code.");
//         return false;
//     }
//     for (var i = 0; i <= 4; i++) {
//         var thisChar = parseInt(valueEntered[i]);
//         if (isNaN(thisChar)) {
//             alert("Please enter only numbers.");
//             return false;
//         }
//     }
// }

// function checkPassword() {
//     try {
//         var pass = document.getElementById("f1").value;
//         if (pass.length < 8) {
//             throw "Please enter at least 8 characters.";
//         }
//         if (pass.indexOf(" ") !== -1) {
//             throw "No spaces in the password, please.";
//         }
//         var numberSomewhere = false;
//         for (var i = 0; i < pass.length; i++) {
//             if (isNaN(pass(i, i + 1)) === false) {
//                 numberSomewhere = true;
//                 break;
//             }
//         }
//         if (numberSomewhere === false) {
//             throw "Include at least 1 number.";
//         }
//     }
//     catch (err) {
//         alert(err);
//     }
// }


// function sayHello() {
//    alert("Hi there.");
//      }

//  var b1 = document.getElementById("button1");
//  b1.onclick = sayHello;