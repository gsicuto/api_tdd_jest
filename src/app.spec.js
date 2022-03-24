const request = require('supertest')
const app = require('./app')

describe('Http tests', () => {
  test('Recieve 404 if not found route', async () => {
    const response = await request(app)
      .get('/any_route')

    expect(response.status).toBe(404)
    expect(response.body).toStrictEqual({ msg: 'Sorry can\'t find that' })
  })
})
