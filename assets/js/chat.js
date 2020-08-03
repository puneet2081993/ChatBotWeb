$(function() {
    var INDEX = 0; 
    $("#chat-submit").click(function(e) {
      
      e.preventDefault();
      var msg = $("#chat-input").val(); 
      if(msg.trim() == ''){
        return false;
      }
      generate_message(msg, 'self');
      var buttons = [
          {
            name: 'Check Balance',
            value: 'checkBalance'
          },
          {
            name: 'Other Issue',
            value: 'otherIssue'
          }
        ];
      setTimeout(function() {      
            generate_button_message(msg, buttons);  
      }, 1000)
      
    })
    
    function generate_message(msg, type) {
      INDEX++;
      var str="";
      str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg "+type+"\">";
      str += "          <span class=\"msg-avatar\">";
      str += "            <img src=\"assets/images/user.png\">";
      str += "          <\/span>";
      str += "          <div class=\"cm-msg-text\">";
      str += msg;
      str += "          <\/div>";
      str += "        <\/div>";

      $(".chat-logs").append(str);
      $("#cm-msg-"+INDEX).hide().fadeIn(300);
      if(type == 'self'){
       $("#chat-input").val(''); 
      }      
      $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);    
    }  
    
    function generate_button_message(msg, buttons){    
      INDEX++;

      var btn_obj = buttons.map(function(button) {
      return  "<li class=\"button\"><a href=\"javascript:;\" class=\"btn btn-primary chat-btn\" chat-value=\""+button.value+"\">"+button.name+"<\/a><\/li>";
      }).join('');
      var str="";
      str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg user\">";
      str += "          <span class=\"msg-avatar\">";
      str += "            <img src=\"assets/images/fin.png\">";
      str += "          <\/span>";
      str += "          <div class=\"cm-msg-text\">";
      str += msg;
      str += "          <\/div>";
      str += "          <div class=\"cm-msg-button\">";
      str += "            <ul>";   
      str += btn_obj;
      str += "            <\/ul>";
      str += "          <\/div>";
      str += "        <\/div>";
      $(".chat-logs").append(str);
      $("#cm-msg-"+INDEX).hide().fadeIn(300);   
      $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
    //  $("#chat-input").attr("disabled", true);
    }
    
    $(document).delegate(".chat-btn", "click", function() {
      var value = $(this).attr("chat-value");
      var name = $(this).html();
      //$("#chat-input").attr("disabled", false);
      generate_message(name, 'self');

      var repmsg = '';
      if(value == 'checkBalance'){
          generate_button_message('Please select the account?',[
            {
              name: 'Savings Account',
              value: 'savingsAccount'
            },
            {
              name: 'Current Account',
              value: 'currentAccount'
            }
          ]); 
      }
      else if(value == 'otherIssue'){
          generate_button_message('Please call us on +91 7892989873',[]); 
      }else if(value == 'savingsAccount'){
        generate_button_message('Your Account Balance is Rs 2000000',[]); 
      }
    })
    
    
    $("#chat-circle").click(function() {    
      $("#chat-circle").toggle('scale');
      $(".chat-box").toggle('scale');
      var buttons = [
        {
          name: 'Check Balance',
          value: 'checkBalance'
        },
        {
          name: 'Other Issue',
          value: 'otherIssue'
        },
        {
          name: 'Shakti Issue',
          value: 'otherIssue'
        }
      ];

    })
    
    $(".chat-box-toggle").click(function() {
      $("#chat-circle").toggle('scale');
      $(".chat-box").toggle('scale');
    })
    
  })