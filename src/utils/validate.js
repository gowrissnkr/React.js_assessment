export const validate = (formFields) => {
    const error = {}
    const nameRegex = /^[A-Za-z]{4,}$/;
    if (!nameRegex.test(formFields.firstName)) {
        error.firstName = 'First Name minimum 4 Char & alphabets';
    }
    if (!nameRegex.test(formFields.lastName)) {
        error.lastName = 'Last Name minimum 4 Char & alphabets';
    }

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (!emailRegex.test(formFields.email)) {
        error.email = 'Enter a valid email address.';
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    if (!passwordRegex.test(formFields.password)) {
        error.password = 'Password must contain capital,special charater,number'
    }

    if (formFields.password !== formFields.confirmPassword) {
        error.confirmPassword = 'Passwords do not match.';
    }
    return error
}