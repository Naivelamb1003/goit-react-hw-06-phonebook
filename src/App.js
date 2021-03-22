import { Component } from "react";
import style from "./App.module.css";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import { CSSTransition } from "react-transition-group";
import Alert from './components/Alert/Alert';
import phonebookActions from '../src/redux/phonebook/phonebook-actions';

class App extends Component {
  state = {
    message: false,
    showAlert: false,
  };

  // isContactExist = (value) => {
  //   const element = this.state.contacts.find(
  //     (contact) => contact.name === value
  //   );
  //   return element !== undefined;
  // };


  // addHandler = (contactFormState) => {
  //   console.log(contactFormState.name.length);
  //   if (
  //     this.isContactExist(contactFormState.name) ||
  //     contactFormState.name.length === 0
  //   ) {
  //     this.setState({ message: `${contactFormState.name} is already in contacts.`, showAlert: true })
  //     setTimeout(() => {
  //       this.setState({ showAlert: false });
  //     }, 1000);
  //     return
  //         } else {
  //     this.setState((prevState) => {
  //       return {
  //         contacts: prevState.contacts.concat({
  //           name: contactFormState.name,
  //           number: contactFormState.number,
  //           id: uuidv4(),
  //         }),
  //       };
  //     });
  //   }
  // };

  // handleChange = (event) => {
  //   this.setState({
  //     filter: event.currentTarget.value,
  //   });
  // };


  // componentDidMount() {
  //   const contactFromStorage = localStorage.getItem("contact");
  //   const parseContact = JSON.parse(contactFromStorage);

  //   if (parseContact) {
  //     this.setState({ contacts: parseContact });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts)
  //     localStorage.setItem("contact", JSON.stringify(this.state.contacts));
  // }

  render() {
    return (
      <>
      <CSSTransition in={this.state.showAlert} timeout={500} classNames={style} unmountOnExit>
          <Alert message={this.state.message} />
        </CSSTransition>
      <div className={style.container}>
        <div>
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames={style}
            unmountOnExit
          >
            <h1 className={style.title}>Phonebook</h1>
          </CSSTransition>

          <ContactForm />
        </div>

        <div>
          <h1 className={style.title}>Contacts</h1>
          <p className={style.title}>Find contacts by name</p>
          <Filter />
          <ContactList />
        </div>
      </div>
      </>
    );
  }
}
export default App;
