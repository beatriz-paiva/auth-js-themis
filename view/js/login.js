class Login {
	constructor(form, fields) {
		this.form = form;
		this.fields = fields;
		this.validateonSubmit();

	}

	validateonSubmit() {
		let self = this;

		this.form.addEventListener("submit", (e) => {
			e.preventDefault();
			var error = 0;
			var value = [];
			self.fields.forEach((field) => {
				const input = document.querySelector(`#${field}`);
				if (self.validateFields(input) == false) {
					error++;
				}else{
					value.push(input.value);
				}
			});
			if (error == 0) {
				//do login api here
				sessionStorage.email = value[0];
                sessionStorage.senha = value[1];
				this.form.submit();
			}
		});
	}

	validateFields(field) {
		//  const regex = /(?=.*[A-Z]|[a-z])(?=.*[0-9])(?=.*[a-z]).{8,30}/g;

		// if (regex.exec(field.value)){
		// 	this.setStatus(field, null, "success");
		// 	return true;
		// }

		if (field.value.trim() === "") {
			this.setStatus(
				field,
				`${field.previousElementSibling.innerText} cannot be blank`,
				"error"
			);
			return false;

		} else {
			if (field.type == "password") {
				if (field.value.length < 8) {
					this.setStatus(
						field,
						`${field.previousElementSibling.innerText} must be at least 8 characters long,\ncontaining special characters, letters and numbers`,
						"error"
					);
					return false;

				}else if (regex.exec(field.value)){
						this.setStatus(field, null, "success");
						return true;
					}

				//(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$

			}
		}
	}

	setStatus(field, message, status) {
		const errorMessage = field.parentElement.querySelector(".error-message");

		if (status == "success") {
			if (errorMessage) {
				errorMessage.innerText = "";
			}
			field.classList.remove("input-error");
		}

		if (status == "error") {
			errorMessage.innerText = message;
			field.classList.add("input-error");
		}
	}
}

const form = document.querySelector(".form");

if (form) {
	const fields = ["email", "senha"];
	const validator = new Login(form, fields);
}