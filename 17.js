function callTenTimes(callback){ //callback 매개변수를 갖는 함수 callTenTimes 선언
    for (let i =0; i<10; i++){ //i를 0부터 9까지 1씩증가  즉, 10번 반복
        callback();//매개변수로 전달된 함수를 호출
    }
}

callTenTimes(function (){  //변수를 선언
    console.log('함수 호출'); //'함수 호출'을 19번 반복
})