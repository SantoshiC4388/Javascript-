				
				//user array containing details of objects
				var user=[{"fname": "John", "lname": "Doe","age": 25, "src": "Tulips.jpg" },
						{"fname": "Sam", "lname": "Roxy","age": 10, "src": "Penguins.jpg"},
						{"fname": "Ria", "lname": "Kumar","age": 16, "src": "Tulips.jpg"},
						{"fname": "Sana", "lname": "Khan","age": 45, "src": "Penguins.jpg"},
						{"fname": "Zen", "lname": "Mir","age": 75, "src": "Tulips.jpg"}
						];
				
				//parent function of check method
				var userCheck ={
					check: function() {
						return this.fname;
					}
				}
				
				
				//opening chat box function
				function openForm(obj)
						{
							
							
							//getting form element
							myForm=document.getElementById("form1");
							
							//creating textarea element in form1
							textarea1=document.createElement("textarea");
							textarea1.setAttribute("rows",15);
							
							//creating input field in form1 
							text1=document.createElement("input");
							text1.setAttribute("type","text");
							text1.setAttribute("placeholder","Type Message");
							
							
							myForm.appendChild(textarea1);
							myForm.appendChild(text1);
							
							//creating buttons for sending and closing form
							butn1=document.createElement("button");
							butnnode1=document.createTextNode("Send");
							butn1.addEventListener("click",sendForm);
							butn1.appendChild(butnnode1);
							butn1.style.backgroundColor="blue";
							butn1.style.color="white";
							butn1.style.display="block";
							
							butn2=document.createElement("button");
							butnnode2=document.createTextNode("Close");
							butn2.addEventListener("click",closeForm);
							butn2.appendChild(butnnode2);
							butn2.style.backgroundColor="red";
							butn2.style.color="white";
					
							myForm.appendChild(butn1);
							myForm.appendChild(butn2); 
							
							
							document.querySelector(".openChat").style.display="inline";
							
							// displaying "Hello" + name of objects
							textarea1.defaultValue="Hello" + JSON.stringify(obj);
							
							/*if (textarea1.value!="Hello")
							{
								
								document.getElementById("myTextArea").value=" ";
								
							} */
					}
				
				
				
				//closing function to be called for closing the form1
				function closeForm()
				{
					myForm.style.display="none";
				}
				
				
				// function to be called on clicking 'Send' button
				function sendForm()
				{
					
					textarea1.value+=text1.value;
					text1.value="";
				}
				
				
				
				
				// retreving objects from user array
				for(var i=0; i<user.length; i++)
				{
					var x, txt="", name=[];
					for(x in user[i])
						{
							if(x=="src")
							{
								
								var source=user[i][x];
								
							}
							else {
									txt+=user[i][x]+" ";
								}
							
						}
					
					// creating image element
					var image=document.createElement("img");
					image.src=source;
					
					//creating chat button
					var butn=document.createElement("button");
					var btnnode=document.createTextNode("Chat");
					butn.appendChild(btnnode);
					
					//creating link of user names
					var link=document.createElement("a");
					var node=document.createTextNode(txt);
					link.appendChild(node);
					link.title=txt;
					link.href="#";
					
					//creating elements of table with id 't1'
					var element=document.getElementById("t1");
					var rownode=document.createElement("tr");
					var cellnode=document.createElement("td");
					element.appendChild(rownode);
					rownode.appendChild(cellnode);
					cellnode.appendChild(image);
					cellnode.appendChild(link);	
					cellnode.appendChild(butn);
					
					//changing css style properties of link
					var list=element.getElementsByTagName("a");
					list[i].style.textDecoration="none";
					list[i].style.display="inline";
					//butn.addEventListener("click",openForm);
					
					// invoking call funtion to pass objects to the "openForm" function
					name[i]=userCheck.check.call(user[i]);
					console.log(name[i]);
					butn.addEventListener("click",openForm(name[i]));
			}
				
				document.querySelector(".openChat").style.display="none";