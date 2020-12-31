const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');

describe('Express App', () => {
    it('should display a list of games', () => {
      return supertest(app)
        .get('/app')
        .expect(200);
    });
  });