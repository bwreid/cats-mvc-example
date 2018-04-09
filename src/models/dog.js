const uuid = require('uuid/v4')
const dogs = []

function getAll (limit) {
  return limit ? dogs.slice(0, limit) : dogs
}

function create (body) {
  const errors = []
  const name = body.name

  let response
  if (!name) {
    errors.push('name is required')
    response = { errors }
  } else {
    const dog = { id: uuid(), name }
    dogs.push(dog)
    response = dog
  }

  return response
}

function getOne (id) {
  const dog = dogs.find(dog => dog.id === id)

  let response
  if (!dog) {
    errors.push(`dog with ${id} not found`)
    response = { errors }
  } else {
    response = dog
  }

  return response
}

module.exports = { getAll, create, getOne }
