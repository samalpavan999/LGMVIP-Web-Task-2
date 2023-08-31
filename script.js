
         const Name = document.getElementById("name");
         const Email=document.getElementById("email");
         const Img = document.getElementById("img");
        
         var uploaded_image="";
         Img.addEventListener("change", function() {
        
            const reader = new FileReader();
            reader.addEventListener("load", () => {
              uploaded_image = reader.result;
              document.getElementById("dis").style.backgroundImage = `url(${uploaded_image})`;
             });
             reader.readAsDataURL(this.files[0]);
          });
         function enroll(){
            if(Name.value && Email.value){
            var card=document.createElement('div');
            card.classList.add('card');
            document.getElementById("display").appendChild(card);
            var details=document.createElement('div');
            details.classList.add('details');
            card.appendChild(details);
            var name=document.createElement('div');
            name.classList.add('d_name');
            name.innerHTML=Name.value;
            Name.value="";
            details.appendChild(name);
            var email=document.createElement('div');
            email.innerHTML=Email.value;
            email.classList.add('d_email');
            details.appendChild(email);
            var gender=document.createElement('div');
            gender.classList.add('d_gender');
            if(document.getElementById("m").checked){
                gender.innerHTML="Male";
            }
            else{
                gender.innerHTML="Female";
                
            }
            details.appendChild(gender);
            var skill=document.createElement('div');
            skill.classList.add('d_skills');
            if(document.getElementById("html").checked){
                
                skill.innerHTML="HTML";

            }
            if(document.getElementById("css").checked){
                
                skill.innerHTML+="  CSS";
            }
            if(document.getElementById("js").checked){
                
                skill.innerHTML+="  JAVA SCRIPT";
            }
            details.appendChild(skill);
            var img = document.createElement("div");
            img.classList.add("d_img");
            if(Img.value!=""){
            img.style.backgroundImage= `url(${uploaded_image})`;}
            card.appendChild(img);
            document.getElementById("display").appendChild(card);    
            document.querySelector(".note").style.opacity=0;
            clear();
         }
         else{
            document.querySelector(".note").style.opacity=1;
         }
         }
         function clear(){
            Name.value="";
            Email.value="";
            Img.value="";
            document.getElementById("m").checked=1;
            document.getElementById("html").checked=0;
            document.getElementById("css").checked=0;
            document.getElementById("js").checked=0;
         }