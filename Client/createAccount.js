const form = document.getElementById("createAccountForm");

const message = document.getElementById("message");

form.addEventListener("submit", async(event) => {

    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        message.textContent = "Password does not match!";
        return;
    }

    try {
        const response = await fetch(
            "https://musical-goggles-97pw66w7rqww26p4-4002.app.github.dev//api/register",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    fullName,email,password,confirmPassword
                })
            }
        );

        const data = await response.json();

        message.textContent = data.message;

        if (response.ok) {
            form.reset();
            setTimeout(() => {
                message.textContent = " ";
            },3000);
        }

    } catch (error) {
        console.error("Registration request failed:", error);

        message.textContent ="Unable to connect to the server. Please try again.";
    }
})

