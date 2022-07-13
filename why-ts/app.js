const url = 'https://jsonplaceholder.typicode.com/users/1'

const username = document.querySelector('#username')
const email = document.querySelector('#email')
const address = document.querySelector('#address')

const users = {}

/**
 * @typedef {object} Address
 * @property {string} city
 * @property {string} street
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
      user = response.data;
      console.log(user)
      username.innerText = user.name
      email.innerText = user.email
      address.innerText = user.address.city
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
