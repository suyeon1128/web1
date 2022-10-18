function multiply(min,max){  //매개변수 두개 입력하는 함수 multiply
    let output = 1; //초깃값 1으로 시작 (곱셈이니까 1부터 시작해야함)
    for(let i = min; i<=max;i++){ // 매개변수 i 가 min부터 max까지 1씩 증가됨
        output *= i; // 결과는 min 부터 max까지의 숫자를 곱한 것
    }
    return output; //결과 리턴
}
console.log(multiply(1,10)); //1부터 100까지 곱한 숫자 출력됨
