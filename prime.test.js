const app = require('./index')
const request = require('supertest');

describe('GET /is_prime/:num', () => {
    it('true_when_x_is_17', async() => {
        const response = await request(app).get('/is_prime/17');
        expect(response.text).toEqual('true');
    });
    it('true_when_x_is_36', async() => {
        const response = await request(app).get('/is_prime/36');
        expect(response.text).toEqual('false');
    });
    it('true_when_x_is_13219', async() => {
        const response = await request(app).get('/is_prime/17');
        expect(response.text).toEqual('true');
    });
});