'use strict'

const chai = require('chai')
const expect = chai.expect

const out = require('../src/out.js')
const fixtureInput = require('./fixtures/input.json')

/**
 * Test behavior
 *
 * 1. Test sourceConfiguration
 * - source: url, password
 * - params: payload, topic
 * 2. Test to send payloads
 * 3. Test callback to send status
 */
describe('out', () => {

	beforeEach((done) => {
		this.input = JSON.parse(JSON.stringify(fixtureInput))
		done()
	})

	afterEach((done) => {
		delete this.input
		done()
	})

	describe('out', () => {
		it('should not throw an error', (done) => {
			out(this.input, (error) => {
				expect(error).to.be.not.exist
				done()
			})

		})

	})
})
