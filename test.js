async function getRelevantFoodOutlets(city, maxCost) {
    
    var page=1;
    var data=[];
    for(let i=1;i<=page;i++){
    fetch(`https://jsonmock.hackerrank.com/api/food_outlets?city=${city}&page=${page}`)
  .then((response) => {
      console.log(response);
      
    let respData=response.data;
    if(page<=respData.total_pages){
        page++;
    }
    for(let j in respData){
        if(respData[j].estimated_cost<=maxCost){
            data.push(respData[j].name);
        }
        
    }
  })
  .then((myJson) => {
    console.log(myJson);
  });

}

}

getRelevantFoodOutlets("Seattle",1);
    