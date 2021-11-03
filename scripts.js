
        function setError(firstId, secondId, message) {
            // remove existing error
            const div = document.getElementById(firstId);
            if(div.children.length > 1) {
                div.removeChild(div.lastChild);
            }
            // change background to red
            secondId.style.background = '#fbe7f0'

            // create label
            const node = document.createElement("label");

            // create message for label
            const textnode = document.createTextNode(message);

            // create and set attribute
            const att = document.createAttribute("for");       // Create a "class" attribute
            att.value = secondId; 
            node.setAttributeNode(att);

            // append message to label and append label to parent
            node.appendChild(textnode); 
            document.getElementById(firstId).appendChild(node); 
        }


        function unsetError(firstId, secondId) {
            const div = document.getElementById(firstId);

            /*
                if div has more than 1 child
                child[0] is the input
                anything greater needs to be removed
                and background of the input needs to changed back to non error state

            */
            if(div.children.length > 1) {
                div.removeChild(div.lastChild);
            }
            secondId.style.background = '#f6f6f6';
        }


        function emailValidation(email) {
            /*
                Using regex I can validate an email by allowing only numbers, letters
                And following a specific pattern ____@___.__

            */
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(email);
        }

        const contactForm = document.querySelector('#contactForm');

        contactForm.addEventListener('submit', function(event) {
            const name = document.querySelector('#name');
            const email = document.querySelector('#email');
            const subject = document.querySelector('#subject');
            const message = document.querySelector('#message');
            
            const inputName = document.querySelector('#inputName');
            const inputEmail = document.querySelector('#inputEmail');
            const inputSubject = document.querySelector('#inputSubject');
            const inputMessage = document.querySelector('#inputMessage');

            event.preventDefault();

            if(!inputName.value.trim()) {
                setError('name', inputName, 'You must enter your name')       
            } else {
                unsetError('name', inputName);
            }
            if(!inputEmail.value.trim()) {
                setError('email', inputEmail, 'You must enter your email')       
            } else {
                unsetError('email', inputEmail);
            }
            if(!emailValidation(inputEmail.value) && inputEmail.value.trim()) {
                setError('email', inputEmail, 'Enter a valid email address') 
            }
            if(!inputSubject.value.trim()) {
                setError('subject', inputSubject, 'You must enter a subject')       
            } else {
                unsetError('subject', inputSubject);
            }
            if(!inputMessage.value.trim()) {
                setError('message', inputMessage, 'You must enter a message');
            } else {
                unsetError('message', inputMessage);
            }
            if(inputName.value.trim() && inputEmail.value.trim() && emailValidation(inputEmail.value) && inputSubject.value.trim() && inputMessage.value.trim()) {
                const popup = document.getElementById("popup");
                popup.style.display = "block";
                document.querySelector('#popupMessage').innerHTML = 'Success! Message has been sent <i class="far fa-check-circle"></i>';
            }
        });

        const closePopup = document.querySelector('#closePopup');

        closePopup.addEventListener('click', function(event) {
            popup.style.display = "none";
        });