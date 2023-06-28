import { useState } from "react";
import { Form, useActionData } from "react-router-dom";

const ContactPage = () => {
  const { fullname, setFullname } = useState("someName");
  const data = useActionData();

  return (
    <div className="p-6">
      {!data && (
        <Form action="/contact" method="POST" className="grid gap-4">
          <label htmlFor="fullname">Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            className="border-4 border-fuchsia-900 rounded p-2 mx-2"
            value={fullname}
          />
          <button className=" bg-fuchsia-400 rounded p-2 mx-2">Submit</button>
        </Form>
      )}
      {data && (
        <>
          <h1>WELCOME! {data.fullname}</h1>
          <p>Get your contact ID: {data.id}</p>
        </>
      )}
    </div>
  );
};

export default ContactPage;
