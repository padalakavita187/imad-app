console.log('Loaded!');
            //counter code
            var counter = 0;
            var button = document.getElementById('counter');
            button.onClick = function(){
                
                //make a request to counter end point
                
                //store it in a variable
                
                //render the variable in the correct span
                
                counter = counter + 1;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            };