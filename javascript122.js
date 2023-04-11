//          Q1:

function add(a){
    
    return function (b){
        
        return a+b;
    }
}
let innerfunction = add(5);
console.log(innerfunction(6));



//          Q2:

function searchArray(arr, value) {
    if (arr.length === 0) {
        return false; 
    }
    if (arr[0] === value) {
      return true;
    }
   
    return searchArray(arr.slice(1), value);
   
  }
  
  let arr =[1,5,8,7,9]
  let search = 9
  const IsFound = searchArray(arr,search)
    console.log(IsFound);



//          Q3:

function newPara(abc){
        let para = document.createElement('p');
        console.log(para);
        para.innerText = abc
    }
    
    newPara("Batch JavaScript");
    newPara("RomaL KUMAR")




//          Q4:

function newList(item){
    let ul = document.getElementById('list');
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = item;
    console.log(ul);
    }
    
    newList('apple')
    newList('banana')
     newList('garpes')
    



//          Q5:

function newBackground(Id,color){
    let element = document.getElementById(Id);
    element.style.backgroundColor = color
    
}

newBackground('list','#32ebb6')



//         Q6:



function storeObject(key,obj){ 
    let stringfiy = JSON.stringify(obj);
    localStorage.setItem(key,stringfiy);
};

let data = {
    Name: prompt('enter name: '),
    RollNo: +prompt('enter roll No:'),
    Classname: prompt('enter class'),
    };
storeObject('employee',data)




//          Q7:

function retrObj(key){
   let obj =  localStorage.getItem(key);
   obj = JSON.parse(obj);
   console.log(obj);
}
retrObj('employee');




//              Q8:


let data1 = {
    Name: prompt('enter name: '),
    RollNo: +prompt('enter roll No:'),
    Classname: prompt('enter class'),
    };

function saveObjectToLocalStorage(object) {
    for (let property in object) {
      localStorage.setItem(property, object[property]);
    }
    
    let newObject = {};
    
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      newObject[key] = localStorage.getItem(key);
    }
    
    return newObject;
  }

  console.log(saveObjectToLocalStorage(data1))