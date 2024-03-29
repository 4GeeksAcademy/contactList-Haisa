const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			agenda: [],
			contactoToEdit: []
		},
		actions: {
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				
			},
			changeColor: (index, color) => {
	
				const store = getStore();

				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				setStore({ demo: demo });
			},
			getAgenda: () => {
				const url = 'https://playground.4geeks.com/apis/fake/contact/agenda/haisa'
				fetch(url)
					.then(response => response.json())
					.then(data => {
						console.log(data)
						setStore({ agenda: data })
					})
					.catch(error => error)
			},

			createContact: (contacto) => {
				const newContact = {
					full_name: contacto.full_name,
					email: contacto.email,
					phone: contacto.phone,
					agenda_slug: "haisa",
					address: contacto.address
				};

				fetch('https://playground.4geeks.com/apis/fake/contact/', {
					method: "POST",
					body: JSON.stringify(newContact),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						console.log("Response OK:", response.ok);
						console.log("Response Status:", response.status);
						console.log("Response Status Text:", response.statusText);

						if(response.status == 201) {
							getActions().getAgenda();
						}
						return response.json();
					})
					.then(data => {
						console.log("Data Message:", data.msg);
					})
					.catch(error => {
						console.error("Fetch Error:", error.message);
					});
			},


			deleteContact: (id) => {
				const store = getStore();
				console.log("ID TO DELETE: " + id)
				fetch( `https://playground.4geeks.com/apis/fake/contact/${id}`, {
					method: "DELETE",
					body: JSON.stringify(),
					headers: {
						"Content-Type": "application/json"
					}
				})

				.then(response => {
					console.log("Response OK:", response.ok);
					console.log("Response Status:", response.status);
					console.log("Response Status Text:", response.statusText);

					return response.json();

				})
				.then(data => {
					console.log("Data Message:", data.msg);
					
					getActions().getAgenda()
				})
				.catch(error => {
					console.error("Fetch Error:", error.message);
				});

			},
			

			getContactoById: (id) => {
				const url = `https://playground.4geeks.com/apis/fake/contact/${id}`
				fetch(url)
					.then(response => response.json())
					.then(data => {
						data['id'] = id;
						console.log(data)
						setStore({ contactoToEdit: data })
					})
					.catch(error => error)
			},

			editContact: (contacto) => {
				fetch(`https://playground.4geeks.com/apis/fake/contact/${contacto.id}`, {
					method: "PUT",
					body: JSON.stringify(
						{
							full_name: contacto.full_name,
							email: contacto.email,
							phone: contacto.phone,
							agenda_slug: "haisa",
							address: contacto.address
						}
					),
					headers: {
						"Content-Type": "application/json"
					}
				})
				
				.then(response => {
					console.log("Response OK:", response.ok);
					console.log("Response Status:", response.status);
					console.log("Response Status Text:", response.statusText);

					return response.json();

				})
				.then(data => {
					console.log("Data Message:", data.msg);
					
				})
				.catch(error => {
					console.error("Fetch Error:", error.message);
				});
		
				
			}

		}

	};
};

export default getState;