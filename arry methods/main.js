const companies= [
    {name:"revere tech", category:"finance",start: 1997, end:2006},
    {name:"coca cola", category:"retail",start: 1987, end:2007},
    {name:"safaricom", category:"technology",start: 1997, end:2003},
    {name:"fanta", category:"retail",start: 1987, end:2002},
    {name:"pepsi", category:"finance",start: 1997, end:2006},
    {name:"emirates", category:"finance",start: 1987, end:2003},
    {name:"brook side", category:"technology",start: 1997, end:2009},
    {name:"chevrolet", category:"retail",start: 1977, end:2003},
    {name:"mercedes", category:"finance",start: 1987, end:2008}
];

const ages= [18,34,23,43,23,45,42,34,35,65,16,18,19,27,26,29,30,];


//for(let i = 0;i < companies.length; i++){
//console.log(companies[i]);
//}
//forEach

//companies.forEach(function(company){
//console.log(company.start);
//})



// get 21 or older

//filter
//let canDrink = [];
//for(i = 0; i < ages.length;i++){
    //if(ages[i] >= 21){
      //canDrink.push(ages[i]);
    //}

//}


//const canDrink =  ages.filter(function(age){
   // if(age >= 21){
    //    return true;
    //}
//})
 const canDrink = ages.filter(age => age >= 21)

console.log(canDrink);

//filter retail company
//const retailCompanies = companies.filter(function(company){
    //if(company.category === 'retail'){
       // return true;
    //}

//})
const financeCompanies = companies.filter(company => company.category ==='finance')
console.log(financeCompanies)

//get companies from the 80s
const eightiesCompanies = companies.filter((company) => (company.start >= 1980 && company.start < 1990))

console.log(eightiesCompanies)

//get companies that lasted 10 years or more
const lastedTenYears  = companies.filter((company) => (company.end - company.start >= 10))

console.log(lastedTenYears)

//map

//create array of company names
//const companyNames = companies.map(function(company){
    //return company.name;
///})
//console.log(companyNames)

//const testMap = companies.map((company) => (`${company.name} [${company.start} - ${company.end}]`))

const testMap = companies.map(function(company){
    return `${company.name} [${company.start}-${company.end}]`
})
console.log(testMap)

const agesSquare = ages.map(function(age){
    return Math.sqrt(age);
})

const agesTimesTwo = ages.map((age) => (age * 2))

const ageMap = ages.map((age) => (Math.sqrt(age)*2))

console.log(agesSquare)
console.log(agesTimesTwo)

console.log(ageMap)

//sort

//sort companies from start year

//const sortCompanies = companies.sort(function(c1, c2){
  //  if(c1.start > c2.start){
      // return 1;

    //}else{
       // return -1;
   // }

//})

const sortedCompanies = companies.sort((c1,c2) => (c1.start > c2.start) ? 1 : -1)

//console.log(sortedCompanies)

//const sortAges = ages.sort(function(age1,age2){
   // if(age1 > age2){
     //   return 1;
    //}else{
     //   return -1;
    //}
//})
   
//console.log(sortAges)
    
//reduce

//let ageSum = 0;

//for(let i = 0 ; i < ages.length; i++){
   // ageSum+= ages[i];

//}
//const ageSum = ages.reduce(function(total, age){
    //return total + age;

//},0)

//const ageSum = ages.reduce((age , total)=> (age + total),0)

//console.log(ageSum)

//get total years for all companies

//const totalYears = companies.reduce(function(total, company){
//    return  total + (company.end - company.start)
//},0)

//const totalYears = companies.reduce((total, company) => total + (company.end - company.start),0);

//console.log(totalYears);

//combined methods

const combined = ages
.map((age) => (age*2))
.filter(function(age){
    return age >= 70

})
.sort(function(age1,age2){
    if(age1>age2){
        return 1;
    }else{
        return -1
    }
})
.reduce((age1,age2)=>(age1+age2),0)

console.log(combined)