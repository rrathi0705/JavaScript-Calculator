
$(document).ready(function(){
  var input = "";
  var len = 0;
  var curr="";
  var lastinput = "";
  var flag = 0; // for counting the number of decimals have already there in the input
  $("button").on('click',function(){
      curr = $(this).attr("value");
        lastinput = input.charAt(len-1);
      // Clearing the input-output-box field
      
      if(curr == 'ac'){
        input = '';
        len = 0;
        $("#input-output-box").val('0');
        flag = 0;
      }
      
      // backspace one character in the input-output-box

      else if(curr == 'del'){
        if(lastinput =='.'){
        	flag = 0;
        }
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
      }
      /* 
     	  If incoming charcater is multiply or divide 
      	  1 If lastchar is number then just append to the input string
      	  2 else if last character is operator then repalce the incoming char with the last char
      */
      else if(curr == '*' || curr == '/'){
        if(len!=0){
          if(lastinput =='*' || lastinput =='/' || lastinput =='+' || lastinput =='-'){
            input = input.slice(0,len-1);
            len--; 
          }
          input+= curr;
          len++;
          flag = 0;
          $("#input-output-box").val(input);
        }
      }
      /*
		If incoming char is plus or minus then
		1 If lastchar is number then just append to input
		2 else if lastchar is + or - then replace it with incoming symbol
		3 else if lastchar is * or / then append incoming symbol to input as 2*-4 = -8
      */
      else if(curr =='+' || curr=='-'){
      	if(len!=0){
          if(lastinput =='+' || lastinput =='-'){
            input = input.slice(0,len-1);
            len--; 
          }
          input+= curr;
          len++;
          flag = 0;
          $("#input-output-box").val(input);
        }
      }
      /*
		Equal button pressed then evaluate the string
		and update the length and lastinputchar of the string
      */
      else if(curr === '='){
      	var ans = parseFloat(eval(input)).toFixed(3);
        $("#input-output-box").val(ans);
        input = ans.toString();
        len = input.length;
        lastinput = input.charAt(len-1);
      }
      /*
		if decimal is pressed then if decimal is already present in the number then don't allow if
		else allow the decimal insertion
		2.3+4.5 allowed
		2.3.4 disallowed
      */
      else if(curr == '.'){
      	if(flag == 0){
      		input +=curr;
      		len++;
      		flag = 1;	
      	}
      	$("#input-output-box").val(input);
      }
      /*
		if 0 is pressed first then let the input string remain same 
		else append 0 to the string
      */
      else if(curr =='0'){
      	if(len != 0){
      		input += curr;
      		len++;
      		$("#input-output-box").val(input);
      	}
      	else
      	$("#input-output-box").val('0');
      }
      else{
        input +=curr; 
        len++;
        $("#input-output-box").val(input);
    }
   });
});
    