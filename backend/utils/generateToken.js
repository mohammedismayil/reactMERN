import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  return jwt.sign({ id }, 'jwtkey', {
    expiresIn: '30d',
  })
}

export default generateToken
