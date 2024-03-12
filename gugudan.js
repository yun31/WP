// 구구단을 출력하는 함수
function printGugudan() {
    for (var i = 2; i <= 9; i++) {
        console.log(i + "단");
        for (var j = 1; j <= 9; j++) {
            console.log(i + " x " + j + " = " + (i * j));
        }
        console.log(""); // 빈 줄 추가
    }
}

// 구구단 출력 함수 호출
printGugudan();
