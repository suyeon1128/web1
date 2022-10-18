let products = [{ //상품 목록인 products선언
    name: '바나나', //name은 바나나
    price: 1200, //price는 1200
    print: function(){ //객체의 속성 중 자료형이 함수인 속성인 메소드 print 사용
        console.log(`${this.name}의 가격은 ${this.price}원입니다.`) //name의 price출력
    }
},{   
     name: '사과', //name은 사과
    price: 2000, //price는 2000
    print: function(){ //객체의 속성 중 자료형이 함수인 속성인 메소드 print 사용
    console.log(`${this.name}의 가격은 ${this.price}원입니다.`) //name의 price출력
}
},{
    name: '배', //name은 배
    price: 3000, //price는 3000
    print: function(){ //객체의 속성 중 자료형이 함수인 속성인 메소드 print 사용
    console.log(`${this.name}의 가격은 ${this.price}원입니다.`) //name의 price출력
}
},{
    name: '고구마', //name은 고구마
    price: 700, //price는 700
    print: function(){ //객체의 속성 중 자료형이 함수인 속성인 메소드 print 사용
    console.log(`${this.name}의 가격은 ${this.price}원입니다.`) //name의 price출력
}
},{
    name: '감자', //name은 감자
    price: 600, //price는 600
    print: function(){ //객체의 속성 중 자료형이 함수인 속성인 메소드 print 사용
    console.log(`${this.name}의 가격은 ${this.price}원입니다.`) //name의 price출력
}
},{
    name: '수박', //name은 수박
    price: 5000, //price는 5000
    print: function(){ //객체의 속성 중 자료형이 함수인 속성인 메소드 print 사용
    console.log(`${this.name}의 가격은 ${this.price}원입니다.`) //name의 price출력
}

}];

for(let product of products){ //products내의 product를 반복
    product.print();//메소드 print의 product 출력
}