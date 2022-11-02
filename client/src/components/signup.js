// import React, { useState } from "react";
// import { Form, Button, Alert } from "react-bootstrap";
// import Auth from "../server/utils/auth";

// import { ADD_USER } from "../utils/mutations";
// import { useMutation } from "@apollo/client";

// const SignUp = () => {
//   const [userFormData, setUserFormData] = useState({
//     name: "",
//     username: "",
//     email: "",
//     password: "",
//   });

//   const [validated] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);

//   const [addUser, { error }] = useMutation(ADD_USER);
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUserFormData({ ...userFormData, [name]: value });
//   };
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     // check if form has everything (as per react-bootstrap docs)
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     try {
//       const { data } = await addUser({
//         variables: { ...userFormData },
//       });
//       Auth.login(data.addUser.token);
//     } catch (err) {
//       console.error(err);
//       setShowAlert(true);
//     }

//     setUserFormData({
//       username: "",
//       email: "",
//       password: "",
//     });
//   };

//   return (
//     <>
//       {/* This is needed for the validation functionality above */}
//       <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
//         {/* show alert if server response is bad */}
//         <Alert
//           dismissible
//           onClose={() => setShowAlert(false)}
//           show={showAlert}
//           variant="danger"
//         >
//           Signup error!
//         </Alert>

//         <Form.Group>
//           <Form.Label htmlFor="name">Name</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Your name"
//             name="name"
//             onChange={handleInputChange}
//             value={userFormData.name}
//             required
//           />
//           <Form.Control.Feedback type="invalid">
//             Your name is required!
//           </Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group>
//           <Form.Label htmlFor="username">Username</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Your unique username"
//             name="username"
//             onChange={handleInputChange}
//             value={userFormData.username}
//             required
//           />
//           <Form.Control.Feedback type="invalid">
//             Username is required!
//           </Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group>
//           <Form.Label htmlFor="email">Email</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Your email address"
//             name="email"
//             onChange={handleInputChange}
//             value={userFormData.email}
//             required
//           />
//           <Form.Control.Feedback type="invalid">
//             Email is required!
//           </Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group>
//           <Form.Label htmlFor="password">Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Your password"
//             name="password"
//             onChange={handleInputChange}
//             value={userFormData.password}
//             required
//           />
//           <Form.Control.Feedback type="invalid">
//             Password is required!
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Button
//           disabled={
//             !(
//               userFormData.username &&
//               userFormData.email &&
//               userFormData.password
//             )
//           }
//           type="submit"
//           variant="success"
//         >
//           Submit
//         </Button>
//       </Form>
//     </>
//   );
// };

// export default SignUp;
