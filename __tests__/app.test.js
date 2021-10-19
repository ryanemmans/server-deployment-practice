'use strict';

const app = require('../app.js');
const supertest = require('supertest');
// const { expect, it } = require('@jest/globals');

const request = supertest(app);

describe('Testing Express Server', () => {

  it('Should respond with a string on POST /talk', async () => {

    let param = 'somewords';''

    // do the things
    let response = await request.post('/talk').send({
      words: param,
    });

    expect(response.status).toBe(200);
    expect(typeof(response.text)).toBe('string');
    expect(response.text).toBe(param);
  });

  it('Should respond with a string on GET /repeat', async () => {

    let response = await request.get('/repeat');

    expect(response.status).toBe(200);
    expect(typeof response.text).toBe('string');
  
  });
});