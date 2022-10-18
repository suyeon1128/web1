function sum(min,max){  //매개변수 두개 입력하는 함수 sum
    let output = 0; //초깃값 0으로 시작
    for(let i = min; i<=max;i++){ // 매개변수 i 가 min부터 max까지 1씩 증가됨
        output += i; // 결과는 min 부터 max까지의 숫자를 더한 것
    }
    return output; //결과 리턴
}
console.log(sum(1,100)); //1부터 100까지 더한 숫자 출력됨
