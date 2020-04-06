document.addEventListener('DOMContentLoaded', function(){


    var bakerName = document.getElementById('name');
    var recipeChoice = document.getElementById('recipeChoice');
    var recipePhoto = document.getElementById('recipePhoto');


    document.getElementById("imageSubmitForm").addEventListener("submit", submitForm);

    function validateForm() {
        if (bakerName.value == "") {
            alert("You forgot to tell us your name!");
            return false;
        }
        if (recipePhoto.value == "") {
            alert("Please show us your photo!");
            return false;
        }
        else return true;
    }


    
    function submitForm() {
        if (validateForm() == true) {
            console.log(bakerName.value);
            console.log(recipeChoice.value);
            console.log(recipePhoto.value);
            alert("Thank you for sharing your baking adventures with us!");
        }
        
    }



});