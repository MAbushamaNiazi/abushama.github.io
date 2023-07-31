document.getElementById('subtn').addEventListener('click', (e) => {
	e.preventDefault();
	sendMail();
})

function sendMail(e) {
	const msg = document.getElementById("msg").value;
	console.log(msg);
	var params = {
		name: document.getElementById("name").value,
		email: document.getElementById("email").value,
		message: document.getElementById("msg").value,
	};

	const serviceID = "service_8x6mt28";
	const templateID = "template_fa4n2fo";

	emailjs
		.send(serviceID, templateID, params)
		.then((res) => {
			document.getElementById("name").value = "";
			document.getElementById("email").value = "";
			document.getElementById("msg").value = "";
			console.log('MESSGE', msg);
			alert("Your message has been sent");
		})
		.catch((err) => console.log(err));
}

