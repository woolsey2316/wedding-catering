import React, { useState  } from 'react'

const ContactForm = () => {
  function isValidEmail(): boolean {
    return (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email) ||
      user.email === ''
    )
  }

  const [user, setUser] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    submitted: false
  })

  function setSubmitted(bool: boolean): void {
    setUser(user => ({
      ...user,
      submitted: bool
    }))
  }

  function handleTextAreaChange(e : React.ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = e.target
    setUser((user) => ({
      ...user,
      [name]: value,
    }))
  }

  function handleInputChange(e : React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setUser((user) => ({
      ...user,
      [name]: value,
    }))
  }

  function allFieldsExist(): boolean {
    Object.keys(user).forEach(key => {
      if (user[key] === '') {
        return false
      }
      //use key and value here
    });
    return true
  }

  // dispatch an action to the redux store, updates 'user' object
  function handleSubmit(): void {
    //console.log(`%cuser details: ${JSON.stringify(user)}`, 'color:green')

    setSubmitted(true)
    if (allFieldsExist()) {
      console.log("message sent")
    }
  }

  return (
    <div className="text-center px-1 my-12 max-w-1170 mx-auto">
      <img className="max-w-1170 mx-auto -mt-40 mb-4 relative" src="contact/8.jpg"/>
      <h1 className="font-parisienne text-h1 font-semibold">Send Us A Message</h1>
      <p className="font-rubik text-gray-700 md:px-24">Et harum quidem rerum facilis est et expedita distinctio.
        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil.
        </p>
      <form name="form" onSubmit={handleSubmit}>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4">
            <input
              type="text"
              name="name"
              className="border border-gray-400 px-4 py-2 w-full mt-4 placeholder-gray-600 text-gray-700"
              placeholder="Full Name*"
              value={user.name}
              onChange={handleInputChange}
            />
            {user.submitted && !user.name && (
              <div className="text-theme-6 mt-2">Full Name is required</div>
            )}
          </div>
          <div className="col-span-4">
            <input
              type="text"
              name="email"
              className="border border-gray-400 px-4 py-2 w-full mt-4 placeholder-gray-600 text-gray-700"
              style={{ borderColor: isValidEmail() ? '' : '#D32929' }}
              placeholder="Email*"
              value={user.email}
              onChange={handleInputChange}
            />
            {user.submitted && !user.email && (
              <div className="text-theme-6 mt-2">Email is required</div>
            )}
          </div>
          <div className="col-span-4">
            <input
              type="text"
              name="subject"
              className="border border-gray-400 px-4 py-2 w-full mt-4 placeholder-gray-600 text-gray-700"
              style={{ borderColor: isValidEmail() ? '' : '#D32929' }}
              placeholder="Subject"
              value={user.subject}
              onChange={handleInputChange}
            />
            {user.submitted && !user.subject && (
              <div className="text-theme-6 mt-2">Subject is required</div>
            )}
          </div>
        </div>
        <div className="col-span-12">
          <textarea
            name="message"
            rows={5}
            className="border border-gray-400 px-4 py-2 w-full mt-4 placeholder-gray-600 text-gray-700"
            style={{ borderColor: isValidEmail() ? '' : '#D32929' }}
            placeholder="Message"
            value={user.message}
            onChange={handleTextAreaChange}
          />
          {user.submitted && !user.message && (
            <div className="text-theme-6 mt-2">Message is required</div>
          )}
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="hover:text-white font-rubik text-sm font-medium cursor-pointer py-3 px-8 mt-5 mx-auto hover:bg-coral bg-gray-200 text-grey-700 transition-all duration-300 ease-in-out"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  )
}
export { ContactForm } 