function print(name, count=1){ //매개변수를 두개 받는 print함수, count는 1로 초기화
    console.log(`${name}이/가 ${count}개 있습니다.`) 
}

print("사과"); // 매개변수 count를 입력하지 않고 함수 호출 하면 undefined가 출력되어야하지만 앞에서 초기화된 조건문으로 1 출력됨
