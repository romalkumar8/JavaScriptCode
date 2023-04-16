(async function(){
    const response = await fetch("./data.json");
    const data = await response.json();

     const GenreElem = document.getElementById('genre')
     const listElem = document.getElementById('result-list')
     const listElem2 = document.getElementById('ranking-list')
    

//            set items in year 

let x1 = []
    for(var i = 0; i < data.length; i++) {
     x1[i] = data[i].release_date;}
    let filteredArr1 = x1.filter((item,i,ar)=>ar.indexOf(item)===i);
    

const YearElem = document.getElementById('year')
    
    for(var i = 0; i < data.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = filteredArr1[i];
    opt.value = filteredArr1[i];
    YearElem.appendChild(opt);
}

//         set items in language 

let x = []
    for(var i = 0; i < data.length; i++) {
     x[i] = data[i].original_language;}
    let filteredArr = x.filter((item,i,ar)=>ar.indexOf(item)===i);

const LangElem = document.getElementById('language')
    
    for(var i = 0; i < filteredArr.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = filteredArr[i];
    opt.value = filteredArr[i];
    LangElem.appendChild(opt);
}



  //         set items in rating

let x2 = []
    for(var i = 0; i < data.length; i++) {
     x2[i] = data[i].vote_count;}
    let filteredArr2 = x2.filter((item,i,ar)=>ar.indexOf(item)===i);
    
const RatElem = document.getElementById('rating')
    
    for(var i = 0; i < data.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = filteredArr2[i];
    opt.value = filteredArr2[i];
    RatElem.appendChild(opt);    
}

function DisplayList(result){
    listElem.innerHTML="";
    result.forEach(function(movie) {
    
     const li1 = document.createElement('li');
        li1.innerHTML=movie.title +"<br>"+ movie.genres +"<br>"+ movie.original_language;
        listElem.appendChild(li1);
       
        
    });   
}


function selectElem(){
    const output = YearElem.value;
    const output1 = RatElem.value;
    const output2 = LangElem.value;
    const output3 = GenreElem.value;
    const result = data.filter(function(a){
        return a.release_date.includes(output) || a.vote_count.toString().includes(output1)
        || a.original_language.includes(output2) || a.genres.includes(output3);
        
    });
        DisplayList(result);
    }

    LangElem.addEventListener('change',selectElem)
    YearElem.addEventListener('change',selectElem)
    RatElem.addEventListener('change',selectElem)
    GenreElem.addEventListener('change',selectElem)
})();




