const app = require('../app')
const chai = require('chai')
const expect = chai.expect

chai.use(require('chai-http'))

describe('app routes', function () {
  it('index\t/', function (done) {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.body).to.deep.equal({ message: 'OK' })
        done()
      })
  })
})
