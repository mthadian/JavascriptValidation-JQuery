$(function() {
  
  $("form[name='registration']").validate({
    //validation rules
    rules: {
      
      firstname: {
        required: true,
      
        firstname: true
      },

      lastname: {
        required: true,
      
        lastname: true
      },

      mobile: {
        number: true,
  
  
      },


      email: {
        required: true,
      
        email: true
      },

      linkedIn: {
        required: true,
        url: true
      
      },
    },

    // error responses
    messages: {
      firstname: "Enter your firstname",
      lastname: "Enter your lastname",
     
       mobile: {
        required: "Enter a your mobile number",
        number: "Enter a valid mobile phone number",
      },

      linkedIn: {
        required: "Enter your linkedIn profile url",
        url: "Enter a valid Url",
      },
      email: "Enter a valid email address"
    },
    
    submitHandler: function(form) {
      form.submit();
    }
  });
});