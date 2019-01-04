 /*
 callback function as passing a as an input argument
 */
 
 var years = [1990,1965,1937,2005,1998,2014];

 function arrayCalc(arr, fn){
     var arrRes=[];
     for(var i=0; i< arr.length;i++){
        arrRes.push(fn(arr[i]));
     }
     return arrRes;
 }

 function calculateAge(el){
     return 2016-el;
 }

 function isFullAge(el){
     return el >= 18;
 }

 function maxHeartRate(el){
if (el>=18 && el<=81){
    return Math.round(206.9-(0.67*el));
}
else {
    return -1
}

 }
 
 var age= arrayCalc(years,calculateAge);
 var Fullages= arrayCalc(age,isFullAge);
 var HeartRate= arrayCalc(age,maxHeartRate);
 

 console.log(age);
 console.log(Fullages);
 console.log(HeartRate);


 console.log(`              ...............
            Function returning a function
                    ...............`);

function interviewQuestion(job){
    if(job==='designer'){
        return function(name){
            console.log(name + ', explain UX design for me')
        }
    }
    else if(job==='teacher'){
        return function(name){
            console.log(name + ', teacher me algorithm')
        }
    }
    else{

        return function(name){
        console.log(name + ', What do you do')
        
    }
        
    }
}

var teacher=interviewQuestion('teacher');
teacher('seyi');

interviewQuestion('teacher')('tunde');

//SWITCH FUNCTION
function interviewQuestion(job){
switch (job){
case'teacher':
return (name)=>{
  console.log(name + ',teach me chemistry');
 };
break;
case'Designer':
return (name) =>{
  console.log(name + ', explain UX design for we');
 };
break;
default:
return (name) =>{
  console.log(name + ', what is your profession');
 };
}
}

interviewQuestion('doctor')('yinka');
interviewQuestion('Designer')('Temmi');

