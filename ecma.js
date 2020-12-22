var Car=require('./Car.js');
const x = (x, y) => { var z=x*y; console.log(z); return z};

//x(2,5)

//let myCar1 = new Car("Ford", 2014);

/* let myPromise1 = new Promise(function(myResolve, myReject) {
  setTimeout(function() { myResolve("I love you"); }, 3000);
});

myPromise1.then((x)=>{console.log('here comes next '+x})
    */    
  

/* let myPromise2 = new Promise(function(myResolve, myReject) {
  setTimeout(function() { myResolve(2); }, 3000);
});

myPromise2.then((x)=>{return x*2})
         .then((y)=>{console.log('here comes next '+y)})
         
 */	
/* let myPromise3 = new Promise(function(myResolve, myReject) {
  setTimeout(function() { myReject('Error'); }, 3000);
});

myPromise3.then(noissue,issue)
         .then((result)=>{console.log('haii result is '+result)})
		 

function noissue(val){
	return val*2;
}
function issue(reason){
	return 'cannot be performed because of '+reason
} */


let myPromise4 = new Promise(function(myResolve, myReject) {
 // setTimeout(function() { myResolve('Error'); }, 3000);
   //throw new Error('poyiii') ;
   throw 'poyii'
});

myPromise4.then(noissue,issue)
         .then((result)=>{console.log('haii result is '+result)})
		 .catch((err)=>{console.log(err)})

function noissue(val){
	return val*2;
}
function issue(reason){
	return 'cannot be performed because of '+reason
} 