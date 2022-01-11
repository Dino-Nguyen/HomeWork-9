function UseQ() {
    let age = prompt('How old are you?', ' ')
              // check xem dữ liệu nhập vào có phải là 1 số hay ko?
                     if (age === " "){
                         alert("please enter your age");
                     }
                     if (isNaN(age)){
                        alert("please enter your age");
                     }
        // check tuổi bằng toán tử dấu chấm hỏi
    let accessAllowed = age >= 18 ? 'Pass' : 'Did parents allow you?';
    alert (accessAllowed)
}

function UseOR() {
    let age = prompt('How old are you?', ' ')
              // check xem dữ liệu nhập vào có phải là 1 số hay ko?
                      if (age === " "){
                            alert("please enter your age");
                      }
                      if (isNaN(age)){
                            alert("please enter your age");                       
                      }
        // check tuổi bằng OR ||
    let accessAllowed = (age >= 18) || 'Did parents allow you?';
    alert (accessAllowed)
}

function FindMin() {
    // Tìm số nhỏ hơn
    alert(' Please enter numbers you wanna check >')
    let a = parsefloat(prompt('First number :', ' '))
    let b = parsefloat(prompt('Second number :', ' '))
     // check xem dữ liệu nhập vào có phải là 1 số hay ko?
                if (a,b === " "){
                       alert("please enter at least 2 numbers");
                }
                if (isNaN(a,b)){
                       alert("You have not enter numbers");                       
                }
     // Nếu a và b bằng nhau
                if (a == b) {
                        alert("Two numbers are equal");
                }
      
    // so sánh a và b
    let result = (a < b) ? a : b;
    alert(result)
}

function ArrowFunction(){ 

          function ask(question, yes, no) {
                 if (confirm(question)) yes()
                 else no();
          }
   //sử dụng hàm mũi tên
  ask(
    "Do you agree?",
    () => { alert("You agreed."); },
    () => { alert("You canceled the execution."); }
  );
}

function SignIn() {
    // kiểm tra đăng nhập ID và pass bằng chương trình Prompt
    let name = prompt(' Your Name / ID ', ' ')
    if (name === 'Admin') {
        let pass = prompt('Your Password', ' ')
        if (pass === 'cafedev'){
            alert('Chào mừng!')
        }
        if ( pass === ' ') {
            alert (' Chưa nhập mật khẩu ')
        }
        else {
            alert('Wrong password - Sai Mật Khẩu')
        }
        
    }
    if(name===' ') {
        alert ('Canceled ')
    }
    else if ( name !== 'Admin') {
        alert('I dont know you ')
    }
   
}
