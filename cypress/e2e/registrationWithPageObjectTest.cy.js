import * as user from '../fixtures/user.json'
import RegistrationPage from '../support/pages/RegistrationPage';
import { faker } from '@faker-js/faker';

user.firstName = faker.name.firstName();
user.lastName = faker.name.lastName();
user.email = faker.internet.email();
user.address = faker.address.streetAddress();
user.city = faker.address.city();
user.postCode = faker.address.zipCode('####');
user.username = faker.internet.userName();
user.password = faker.internet.password(15);

it('Registration', () => {
   RegistrationPage.visit();
   RegistrationPage.submitRegistrationForm(user);
   RegistrationPage.verifyRegistration();
})
