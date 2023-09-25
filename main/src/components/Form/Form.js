import React from "react";
import "./Form.css";

export default class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            firstNameData: '',
            lastNameData: '',
            emailData: '',
            addressData: '',
            passwordData: '',
            submitted: false,
            allValid: false
        }
        this.submitForm = this.submitForm.bind(this)
        this.firstNameForm = this.firstNameForm.bind(this)
        this.lastNameForm = this.lastNameForm.bind(this)
        this.emailForm = this.emailForm.bind(this)
        this.adressForm = this.adressForm.bind(this)
        this.passwordForm = this.passwordForm.bind(this)
    }
    submitForm(event) {
        console.log(event);
        this.setState({
            submitted: true
        })
        event.preventDefault()
        if (this.state.firstNameData.length != 0 && this.state.lastNameData.length != 0 && this.state.emailData.length != 0 && this.state.addressData.length != 0 && this.state.passwordData.length != 0) {
            this.setState({
                allValid: true
            })
        }
        setTimeout(() => {
            this.setState({
                allValid: false
            })
        }, 3000);
    }
    firstNameForm(event) {
        this.setState({
            firstNameData: event.target.value
        })
    }
    lastNameForm(event) {
        this.setState({
            lastNameData: event.target.value
        })
    }
    emailForm(event) {
        this.setState({
            emailData: event.target.value
        })
    }
    adressForm(event) {
        this.setState({
            addressData: event.target.value
        })
    }
    passwordForm(event) {
        this.setState({
            passwordData: event.target.value
        })
    }
    render() {
        return (
            <div className="form-container">
                <form className="register-form" autoComplete="off" onSubmit={this.submitForm}>
                    {/* Uncomment the next line to show the success message */}
                    {this.state.submitted && this.state.allValid && (
                        <div className="success-message">Success! Thank you for registering</div>
                    )}
                    <input
                        id="first-name"
                        className="form-field"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={this.state.firstNameData}
                        onChange={this.firstNameForm}
                    />
                    {/* Uncomment the next line to show the error message */}
                    {this.state.submitted && this.state.firstNameData.length == 0 && (
                        <span id="password-error">* please enter firstName</span>
                    )}
                    <input
                        id="last-name"
                        className="form-field"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={this.state.lastNameData}
                        onChange={this.lastNameForm}
                    />
                    {/* Uncomment the next line to show the error message */}
                    {this.state.submitted && this.state.lastNameData.length == 0 && (
                        <span id="password-error">* please enter lastName</span>
                    )}
                    <input
                        id="email"
                        className="form-field"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={this.state.emailData}
                        onChange={this.emailForm}
                    />
                    {/* Uncomment the next line to show the error message */}
                    {this.state.submitted && this.state.emailData.length == 0 && (
                        <span id="password-error">* please enter Email</span>
                    )}
                    <input
                        id="address"
                        className="form-field"
                        type="text"
                        placeholder="Address"
                        name="address"
                        value={this.state.addressData}
                        onChange={this.adressForm}
                    />
                    {/* Uncomment the next line to show the error message */}
                    {this.state.submitted && this.state.addressData.length == 0 && (
                        <span id="password-error">* please enter address</span>
                    )}
                    <input
                        id="password"
                        className="form-field"
                        type="Password"
                        placeholder="Password"
                        name="password"
                        value={this.state.passwordData}
                        onChange={this.passwordForm}
                    />
                    {/* Uncomment the next line to show the error message */}
                    {this.state.submitted && this.state.passwordData.length == 0 && (
                        <span id="password-error">* please enter  password</span>
                    )}
                    <button className="form-field btn6" type="submit">
                        Register
                    </button>
                </form>
            </div>

        )
    }
}
