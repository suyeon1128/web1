let array = ['사과', '배','포도', '딸기', '바나나'];
for(let i in array){
    console.log(`${i}번째 요소 : ${array[i]}`);
}

console.log("----구분선----");

for (let item of array){
    console.log(item);
}