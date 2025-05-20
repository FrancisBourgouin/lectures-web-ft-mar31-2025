// What is hard in react?

// useEffect


// Classes!

const someDate = new Date("2025-05-20")

// new Error()
// new Promise()
// new Array()
// new Object()




class Potato{
  constructor(name, type){
    this.name = name
    this.type = type
  }

  greet = function(){
    console.log(`Hi, my name is ${this.name} and I'm a ${this.type} potato.`)
  }

  throw = function(){
    console.log("HAAAAAAAAAAAAAAAAA")
    console.log("...")
    console.log("*thump*")
  }
}

class SuperPotato extends Potato{
  constructor(name, type){
    super("Super " + name, type)
  }

  throw = function(){
    console.log("HAAAAAAAAAAAAAAAAA")
    console.log("...")
    console.log("*flies away*")
  }
}

const patator = new Potato("Patator", "Russett")

const spudinator = new SuperPotato("Spudinator", "Yukon Gold")

// console.log(patator)
patator.greet()
spudinator.greet()

spudinator.throw()