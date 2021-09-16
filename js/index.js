const handleSubmit = (event) => {
    document.getElementById('ContactForm').reset();
    successMessage();
    setTimeout(closeSuccessMessage, 1500);
}

// ----------- MENU

const handleMenuOpen = () => document.getElementById('MenuContainer').className = 'openPopUp';
const handleMenuClose = () => document.getElementById('MenuContainer').className = 'closePopUp';
const successMessage = () => document.getElementById('SuccessMessage').className = 'openSuccessMessage';
const closeSuccessMessage = () => document.getElementById('SuccessMessage').className = 'closeSuccessMessage';