function print(name, count){ //매개변수를 두개 받는 print함수
    
    if(typeof(count) == "undefined"){ //만약 매개변수 count의 타입이 undefined라면(매개변수를 입력받지 못했다면)
        count = 1; //매개변수 count 값을 1로 설정
    }

    console.log(`${name}이/가 ${count}개 있습니다.`) 
}

print("사과"); // 매개변수 count를 입력하지 않고 함수 호출 하면 undefined가 출력되어야하지만, if문으로 인해 1이 출력됨
