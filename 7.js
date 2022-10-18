let output = ''; 
for(let i =0;i<10;i++){//총 열번 반복
    for(let j = 0; j<i+1;j++){//별 하나씩 증가해 나가기
        output += '*'; //별 출력

    }
    output += '\n'; //한칸 띄기
}
console.log(output);