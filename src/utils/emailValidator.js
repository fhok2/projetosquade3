

async function emailValidator(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

module.exports = {
  emailValidator,
};
