import React, {useState} from 'react'

const Contact = () => {
  const [fname, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(fname, email, phone, message)
  }
  const Fullname = (e) => {
    setName(e.target.value)
  }
    return (
        <div className="portifilo-container">
            <div className="container">
                <h1 className="contact-h1">Contact</h1>
                <div className="row contact">
                    <div className="col-sm-6 contact-box">
                        <form className="row g-3 text-white" onSubmit={handleSubmit}>
                        <div className="col-md-3">
                          <label htmlFor="inputEmail4" className="form-label text-white">Name</label>
                          <input type="text" 
                                 className="form-control" 
                                 name="fname" 
                                 id="fname" 
                                 value={fname}
                                 onChange={Fullname}
                                 required 
                                //  onChange={(e) => setName(e.target.value)}
                                 />
                                 
                        </div>
                        <div className="col-md-3">
                          <label htmlFor="inputEmail4" className="form-label text-white">Email</label>
                          <input type="text" 
                                 className="form-control" 
                                 id="email" 
                                 value={email}
                                 onChange={(e) => setEmail(e.target.value)}
                                 />
                        </div>
                        <div className="col-md-3">
                          <label htmlFor="inputEmail4" className="form-label text-white">Phone</label>
                          <input type="text" 
                                 className="form-control" 
                                 id="phone" 
                                 value={phone}
                                 onChange={(e) => setPhone(e.target.value)} 
                                 />
                        </div>
                        <div className="col-md-3">
                          <label htmlFor="inputEmail4" className="form-label text-white">Message</label>
                          <input type="text" 
                                 className="form-control" 
                                 id="message" 
                                 value={message}
                                 onChange={(e) => setMessage(e.target.value)}
                                 />
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn mr-3 btnColor"><span>Contact Me</span></button>
                        </div>
                      </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact


