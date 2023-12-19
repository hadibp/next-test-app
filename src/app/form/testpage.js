// "use client";
// import "../form/style.css"; // Import the CSS file
// import React, { useState  } from "react";
// import { useRouter } from "next/navigation";

// import { useDispatch,useSelector } from "react-redux";


// const Form = () => {
//   // const { register, handleSubmit } = useForm();
//   const [value, setVlaues] = useState({ name: "", address: "", email: "" });
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const formData = useSelector((state) => state.formData);

//   // const handleform = (data) => {
//   //   router.push("/form/confirmationPage", {
//   //     query: data,
//   //   });
//   //   console.log("Form submitted:", data);
//   // };

//   const handlechange = (e) => {
//     const { name, value } = e.target;

//     setFormValues((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleform = (e) => {
//     e.preventDefault();
//     dispatch({
//       type: "UPDATE_FORM_DATA",
//       payload: value,
//     });
//     console.log(value);
//     router.push("/form/confirmationPage");
//   };

//   React.useEffect(() => {
//     setValues('name', formData.name);
//     setValues('address', formData.address);
//     setValues('email', formData.email);
//   }, [formData]);

//   return (
//     <form onSubmit={(e) => handleform(e)}>
//       <label>
//         Name:
//         <input
//           type="text"
//           name="name"
//           onChange={handlechange}
//           value={value.name}
//         />
//       </label>
//       <br />
//       <label>
//         Address:
//         <input
//           type="text"
//           name="address"
//           onChange={handlechange}
//           value={value.address}
//         />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input
//           type="email"
//           name="email"
//           onChange={handlechange}
//           value={value.email}
//         />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
//   // return (
//   //   <form onSubmit={handleSubmit(onSubmit)}>
//   //     <label>
//   //       Name:
//   //       <input type="text" {...register('name')} />
//   //     </label>
//   //     <br />
//   //     <label>
//   //       Address:
//   //       <input type="text" {...register('address')} />
//   //     </label>
//   //     <br />
//   //     <label>
//   //       Email:
//   //       <input type="email" {...register('email')} />
//   //     </label>
//   //     <br />
//   //     <button type="submit">Submit</button>
//   //   </form>
//   // );
// };

// export default Form;
