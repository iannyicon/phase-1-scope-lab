// Write your solution in this file!
var customerName = 'bob';
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
var bestCustomer; 

function setBestCustomer() {
    bestCustomer = 'not bob'; 
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}
const leastFavoriteCustomer = 'Ian'

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'number 4'; // Set bestCustomer to 'not bob'
}