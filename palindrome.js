document.getElementById('checkbutton').addEventListener('click', function () {
      const input = document.getElementById('inputtext').value;
    
      // Clean the input: remove non-alphanumeric characters and convert to lowercase
      const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
      // Reverse the cleaned input
      const reversedInput = cleanedInput.split('').reverse().join('');
    
      // Check if the cleaned input is equal to its reverse
      const resultElement = document.getElementById('result');
      if (cleanedInput === reversedInput) {
        resultElement.textContent = "A Palindrome";
        resultElement.style.color = 'green';
      } else {
        resultElement.textContent = "Not A Palindrome";
        resultElement.style.color = 'red';
      }
      if (cleanedInput === "") {
        resultElement.textContent = "Please Type First!";
        resultElement.style.color = 'blue';
      }
    });
