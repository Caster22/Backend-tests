const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('formatFullname', () => {
	it('should return an Error if "fullName" is empty', () => {
		expect(formatFullname('')).to.equal('Error');
	});

	it('should return an Error if "fullName" is not a string', () => {
		expect(formatFullname(undefined)).to.equal('Error');
		expect(formatFullname(12)).to.equal('Error');
		expect(formatFullname({})).to.equal('Error');
		expect(formatFullname([])).to.equal('Error');
		expect(formatFullname(function (){})).to.equal('Error');
	});

	it('should return an Error if "fullName" construction is not like "John Doe"', () => {
		expect(formatFullname('JoHn doE')).to.equal('John Doe');
		expect(formatFullname('john')).to.equal('Error');
		expect(formatFullname('JOhn DoE teSt')).to.equal('Error');
	});
});