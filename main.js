let target = document.querySelector("#dynamic");
let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript", "Learn to Python", "Learn to Ruby"];
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)]; // stringArr 배열의 길이 미만
let selectStringArr = selectString.split(""); // 해당 문자열을 괄호 안의 기준으로 배열로 분리

function randomString() {
    let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript", "Learn to Python", "Learn to Ruby"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

// 타이핑 리셋
function resetTyping () {
    target.textContent = "";

    dynamic(randomString());
}

// 한글자씩 텍스트 출력하는 함수
function dynamic(randomArr) {
    if(randomArr.length > 0) {
        target.textContent += randomArr.shift();
        setTimeout(function() {
            dynamic(randomArr);
        }, 80);
    } else {
        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomString());

// 커서 깜빡임 효과 주는 코드
function blink () {
    target.classList.toggle("active");
}
// 시간
setInterval(blink, 500);