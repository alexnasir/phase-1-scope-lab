// Write your solution in this file!
var customerName = 'bob';
    function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    }

    var BestCustomer;
    function setBestCustomer() {
        bestCustomer = 'not bob';
    }
    function overwriteBestCustomer(newCustomer) {
        bestCustomer = newCustomer;
    }
    const leastfavoriteCustomer = 'sally';
    function changeLeastfavoriteCustomer() {
        leastfavoriteCustomer = 'alex';
    }
    function changeLeastfavoriteCustomer() {
        try{
        leastfavoriteCustomer = 'alex';
        }catch (error) {
            console.log(`Cannot reassign least favorite customer`, error.message);
        }
    }