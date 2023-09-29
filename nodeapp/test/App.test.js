const request = require('supertest')
const app = require('../server')
describe('Post Endpoints', () => {
  it('test_case1', async () => {
    const res = await request("http://localhost:8080")
      .post('/admin/addProduct')
      .send({
        productName: "book",
        description: "test book",
        price: "120",
        imageUrl: "abcd",
        quantity: "10"
      })
    expect(res.statusCode).toEqual(200)
    // expect(res.body).toHaveProperty('post')
  })
})
