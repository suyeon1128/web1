let object = { //object객체 선언
    name: '바나나', //name은 바나나
    price: 1200 //price는 1200
};

for (let key in object){ //for in 반복문 사용 
    console.log(`${key}: ${object[key]}`); //object에 있는 key값 , object에 있는 key 값 출력됨
}