import React from "react";

function WordForm() {
  return <div>WordForm</div>;
}

export default WordForm;

// import React, { useEffect, useState } from "react";
// import { useQuery } from "@apollo/client";
// import { GET_ALL_TAGS } from "../../../apollo/tags";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import { Typeahead } from "react-bootstrap-typeahead";
// import { Button, Form } from "react-bootstrap";

// import "react-bootstrap-typeahead/css/Typeahead.css";
// import "react-bootstrap-typeahead/css/Typeahead.bs5.css";

// function TagForm({ handleClose }) {
//   const { data, loading } = useQuery(GET_ALL_TAGS);

//   const [tags, setTags] = useState([]);
//   const [isLoading, setLoading] = useState(false);
//   const [selectedTags, setSelectedTags] = useState([]);

//   useEffect(() => {
//     if (!loading) {
//       setTags(data.tags);
//     }
//   }, [data]);

//   const tagFormSubmit = async (values) => {
//     setLoading(true);
//     console.log(values);

//     handleClose();
//   };

//   const validationSchema = Yup.object().shape({
//     title: Yup.string().required(),
//   });

//   return (
//     <Formik
//       onSubmit={tagFormSubmit}
//       validationSchema={validationSchema}
//       initialValues={{ title: "" }}
//     >
//       {({
//         handleSubmit,
//         handleChange,
//         values,
//         errors,
//         setFieldValue,
//         touched,
//         setFieldTouched,
//       }) => (
//         <Form noValidate onSubmit={handleSubmit}>
//           <Form.Group className="mb-3" controlId="titleInput">
//             <Form.Label>Title</Form.Label>
//             <Form.Control
//               name="title"
//               value={values.title}
//               onChange={handleChange}
//               isInvalid={!!errors.title}
//             />
//             <Form.Control.Feedback type="invalid">
//               {errors.title}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="mb-5">
//             <Form.Label>Tags</Form.Label>

//             <Typeahead
//               id="basic-typeahead-multiple"
//               labelKey="title"
//               multiple
//               onChange={setSelectedTags}
//               // onChange={handleChange}
//               // onInputChange={(content) => setFieldValue("tags", content)}
//               options={tags}
//               placeholder="addTags"
//               selected={selectedTags}
//             />
//           </Form.Group>

//           <Button variant="success" type="submit" disabled={isLoading}>
//             Save
//           </Button>
//         </Form>
//       )}
//     </Formik>
//   );
// }

// export default TagForm;
