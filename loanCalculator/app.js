//listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
//hides result
document.getElementById('results').style.display ='none';

 //show loader
 document.getElementById('loading').style.display ='block';

 setTimeout(calculateResults,300);

  e.preventDefault();

});

// calculate result
function calculateResults(){

    console.log('we sup')

    //ui variables
    const Amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('Monthly-payment');
    const totalPayment = document.getElementById('Total-payment');
    const totalInterest = document.getElementById('total-interest');
    

    const principal=parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) /100 /12
    const calculatedPayment = parseFloat(years.value) * 12;

    // compute monthly payment

    const x = Math.pow(1 + calculatedInterest,calculatedPayment);

    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly*calculatedPayment).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayment)-principal).toFixed(2)
    //show results
        document.getElementById('results').style.display ='block';
  // hide loader
        document.getElementById('loading').style.display ='none';
      } else {
showErorr('please check your number');
    
   }

    
}
// Show Error
function showError(error){
    // Create a div
    const errorDiv = document.createElement('div');
  
    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
  
    // Add class
    errorDiv.className = 'alert alert-danger';
  
    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));
  
    // Insert error above heading
    card.insertBefore(errorDiv, heading);
  
    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
  }
  
  // Clear error
  function clearError(){
    document.querySelector('.alert').remove();
  }