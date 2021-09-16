const handleSubmit = (e) => {
    e.preventDefault()
    document.getElementById('input-field-name').value = "";
    document.getElementById('input-field-email').value = "";
    document.getElementById('input-field-message').value = "";
    console.log('Field Clear');
    window.alert('Your Form has been Submitted !');
}

// ----------- MENU

const handleMenuOpen = () => document.getElementById('MenuContainer').className = 'openPopUp';
const handleMenuClose = () => document.getElementById('MenuContainer').className = 'closePopUp';