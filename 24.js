class Product{ //클래스 생성 (대문자 시작)
    constructor(name, price){ //앞에 function 키워드를 붙이지 않고 constructor라는 이름으로 만들음
        this.name = name //매개변수로 받은 name값을 기반으로 name속성 만들음
        this.price = price//매개변수로 받은 price값을 기반으로 name속성 만들음
    }
    print(){
        console.log(`${this.name}의 가격은 ${this.price}원입니다.`) //매개변수로 받은 값으로 출력
    }
}

let products = [
    new Product('바나나', 1200),
    new Product('사과', 2000),
    new Product('배', 3000),
    new Product('고구마', 700),
    new Product('감자', 600),
    new Product('수박', 500),
];

for (let product of products){ //products내의 product를 반복
    product.print(); //메소드 print의 product 출력
}