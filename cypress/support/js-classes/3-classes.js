//наслідування

class Parent {

    constructor(firstName, age, lastName){
        this.firstName = firstName
        this.age = age
        this.lastName  = "Bosykh"
    }

    greeting(){
        console.log('Hey!')
    }

    tellName(){
        console.log(`My name is ${this.firstName} ${this.lastName}!`)
    }

    tellAge(){
        console.log(`I am ${this.age} years old!`)
    }

    tellJobTitle(){
        if(this instanceof Child){
            console.log(`I don't have job title`)
          
        }else{
              
            this.job = "QA"
            console.log(`My job title is ${this.job}!`) 
        }
        
    }

}

class Child extends Parent {

    greeting(){
        console.log('\nHey! this is new greeting')
    }

    goToSchool(){
        console.log('I like to go to school!')
    }

}

const parent = new Parent('Darya', 24);
const child = new Child('Oleh', 5);

parent.greeting()
parent.tellName()
parent.tellAge()
parent.tellJobTitle()

child.greeting()
child.tellName()
child.tellAge()
child.tellJobTitle()