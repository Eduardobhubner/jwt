const jwt = require('jsonwebtoken')

const secretKey = '123'

const nossoToken = jwt.sign(
    {
      email: 'nome@alura.com.br',
      password: 'HuEKW489!j445*',
      idade:"20"
    },
    secretKey,
    {
      expiresIn: '10y',
      subject: '1',
    }
  );

  console.log(nossoToken)