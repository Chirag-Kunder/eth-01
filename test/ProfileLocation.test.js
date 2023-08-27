const ProfileLocation = artifacts.require('./ProfileLocation.sol')

contract('ProfileLocation', (accounts) => {
  before(async () => {
    this.profilelocation = await ProfileLocation.deployed()
  })

  it('deploys successfully', async () => {
    const address = await this.profilelocation.address
    assert.notEqual(address, 0x0)
    assert.notEqual(address, '')
    assert.notEqual(address, null)
    assert.notEqual(address, undefined)
  })

  it('lists locations', async () => {
    const LocationCount = await this.profilelocation.LocationCount()
    const locations = await this.profilelocation.locations(LocationCount)
    assert.equal(locations.id.toNumber(), LocationCount.toNumber())
    assert.equal(locations.area,)
    assert.equal(locations.completed, false)
    assert.equal(LocationCount.toNumber(), 1)
  })

  it('creates locations', async () => {
    const result = await this.profilelocation.createLocation('A new locations')
    const LocationCount = await this.profilelocation.LocationCount()
    assert.equal(LocationCount, 2)
    const event = result.logs[0].args
    assert.equal(event.id.toNumber(), 2)
    assert.equal(event.content, 'A new locations')
    assert.equal(event.completed, false)
  })

  it('toggles locations completion', async () => {
    const result = await this.profilelocation.toggleCompleted(1)
    const locations = await this.profilelocation.locations(1)
    assert.equal(locations.completed, true)
    const event = result.logs[0].args
    assert.equal(event.id.toNumber(), 1)
    assert.equal(event.completed, true)
  })

})