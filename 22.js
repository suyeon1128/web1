let object = { //object객체 선언
    name: '바나나', //name은 바나나
    price: 1200, //price는 1200
    print: function(){ //객체의 속성 중 자료형이 함수인 속성인 메소드 print 사용
        console.log(`${this.name}의 가격은 ${this.price}원입니다.`) //name의 price출력
    }
};

object.print(); //메소드를 호출