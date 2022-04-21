enum Language {
  English = 10,
  Korean = 9,
  Spanish = 100
}
// 여러개로 분할해서 생성해도 하나로 합쳐준다.
enum Language {
  Japanese = 11
}

console.log(Language)
console.log(Language.English)
console.log(Language['English'])


console.log(Language[10])
console.log(Language.English)

const enum Language2 {
  English,
  Spanish,
  Korean
}

console.log(Language2.English)
console.log(Language2[0])


const pineapples = "pineapples"
let eObject = {
  type: 'ficus'
}

let ff = [1, false]
let hh = null
