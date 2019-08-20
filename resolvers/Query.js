const actions = require('../actions');

const hello = (_, args) => {
    return actions.hello();
}

const getUsers = (_, args, context) => {
    return actions.getUsers()
                  .then(users => users)
                  .catch(err => err);
}

module.exports = {
    hello,
    getUsers,
}
