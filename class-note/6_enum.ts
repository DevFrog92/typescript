// enum을 설정하지 않으면 기본 숫자형 enum이다.

enum Shoes {
  nike = "나이키",
  adidas = "아디다스"
}

const myShoes = Shoes.nike
const adidas = Shoes.adidas
console.log(myShoes) // 나이키
console.log(adidas) // 아디다스

// example
// drop down에서 많이 사용할 수 있다.

enum Answer {
  Yes = 'Y',
  No ="N",
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("정답입니다.")
  }

  if (answer === Answer.No) {
    console.log("오답입니다.")
  }
}

askQuestion(Answer.Yes)
askQuestion(Answer.No)
// askQuestion('예스')
// askQuestion('y')
// askQuestion('yes')
// askQuestion('Yes')
