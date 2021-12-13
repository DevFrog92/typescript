const url = 'https://jsonplaceholder.typicode.com/users/1'

const username = document.querySelector('#username')
const email = document.querySelector('#email')
const address = document.querySelector('#address')

const users = {}

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */

function fetchUser() {
  return axios.get(url)
}

fetchUser().then(function (response) {
  response.address.city
})


function startApp() {
  fetchUser()
    .then(function (response) {
      // console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user)
      username.innerText = user.name
      email.innerText = user.email
      // 존재하지 않는 값이 암묵적으로 undifined로 할당된다.
      address.innerText = user.address.street
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
