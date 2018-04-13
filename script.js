
$(document).ready(function(){
  var input = "";
  var len = 0;
  var curr="";
  var lastinput = "";
  $("button").on('click',function(){
      curr = $(this).attr("value");
        lastinput = input.charAt(len-1);
      //console.log(curr);
      if(curr == 'ac'){
        input = '';
        len = 0;
        $("#input-output-box").val('0');
      }
      else if(curr == 'del'){
        if(len <= 1)
        {
          input = '';
          len = 0;
          $("#input-output-box").val('0');
        }
        else{
        input = input.slice(0,(len-1));
        len--;
        $("#input-output-box").val(input);
        }
        //console.log(len);
      }
      else if(curr == '*' || curr == '/' || curr == '+' || curr == '-'){
        //console.log(curr);
        if(len!=0){
          if(lastinput =='*' || lastinput =='/' || lastinput =='+' || lastinput =='-'){
            input = input.slice(0,len-1);
            len--; 
          }
          //console.log(curr);
          input+= curr;
          len++;
          $("#input-output-box").val(input);
        }
      }
      else if(curr === '='){
        $("#input-output-box").val(eval(input));
        input = eval(input).toString();
        len = input.length;
        lastinput = input.charAt(len-1);
      }
      else{
        input +=curr; 
        len++;
        $("#input-output-box").val(input);
    }
   });
});
    