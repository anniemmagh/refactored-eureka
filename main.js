// if(true){
// console.log('ჭეშმარიტია');
// if(false){
//    console.log('შესრულდება');
// }
// }
// else{
//   console.log('არ შესრულდა!!');
// }

// const array =[1,2,3,5];
// for(let i =0;i<array.length;i++){
//   console.log(array[i])
// }

// const array =[1,2,3,5];
// let i=0;
// while (i < 5){
//   i++;
//   console.log(array[i])
// }

// const array =[[1,2,3,5],[5,6,7],[33,44,5,67]];

// for(let i =0; i<array.length;i++){
// for(let j= 0;j<array.length;j++){
// console.log(array[i][j])
// }
// }
 
// const obj ={
//   names:'Ani',
//   age:21,
//   address:'Tbilisi'
// };
// const {age}=obj;
// // console.log(age);
// let array = [1,2,3,4,5,6,7];
// [a,b,...c]=array;
// console.log(a,b,...c)

function flowers(flowers){
switch(flowers){
  case 'ვარდი':
console.log('ეს არის ვარდი!');
break;
  case 'ყაყაჩო':
    console.log('კი , ეს ყაყაჩოა!');
    break;
  case 'ია':
    console.log('იააა , კი!')
    break;
  default:
    console.log('არცერთი ყვავილი არ არის ნაპოვნი!')

}
}
flowers('ყაყაჩო')