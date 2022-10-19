import Head from "next/head";
import NextLink from "next/link";
import Router, { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
} from "@mui/material";
// import MuiPhoneInput from 'material-ui-phone-number';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      business_name: "",
      business_sub_type: "",
      business_capital: "",
      tin_number: "",
    },

    validationSchema: Yup.object({
      business_name: Yup.string()
        .max(255)
        .required("Business name is required"),
      business_sub_type: Yup.string()
        .max(255)
        .required("Business type is required"),

      business_capital: Yup.string().max(255).required("Capital is required"),
      tin_number: Yup.string().max(255).required("Tin number is required"),
    }),
    // onSubmit: () => {
    //   Router
    //     .push('/')
    //     .catch(console.error);
    // }
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      console.log(id)
      fetch(
        `http://localhost:5000/api/firmDefinition/defineFirm/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "authorization": "Bearer "+sessionStorage.getItem("token"),
          },
          body: JSON.stringify(values, null, 2),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          //handle data
          console.log(data);

          if (data.status == 200) {
            Router.push("/profile");
          } else alert("Incorrect Data");
        })
        .catch((error) => {
          //handle error
        });
    },
  });

  const router = useRouter()
  const {
    query: { id, name, phone },
  } = router

  return (
    <>
      <Head>
        <title>Register Firm | ERP</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Add new Firm
              </Typography>
            </Box>
            <TextField
              error={Boolean(
                formik.touched.business_name && formik.errors.business_name
              )}
              fullWidth
              helperText={
                formik.touched.business_name && formik.errors.business_name
              }
              label="business_name"
              margin="normal"
              name="business_name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.business_name}
              variant="outlined"
            />
            <TextField
              error={Boolean(
                formik.touched.business_sub_type &&
                  formik.errors.business_sub_type
              )}
              fullWidth
              helperText={
                formik.touched.business_sub_type &&
                formik.errors.business_sub_type
              }
              label="business_sub_type"
              margin="normal"
              name="business_sub_type"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.business_sub_type}
              variant="outlined"
            />
            <TextField
              error={Boolean(
                formik.touched.business_capital &&
                  formik.errors.business_capital
              )}
              helperText={
                formik.touched.business_capital &&
                formik.errors.business_capital
              }
              // defaultCountry={'et'}
              name="business_capital"
              margin="normal"
              label="business_capital"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              fullWidth
              type="number"
              value={formik.values.business_capital}
              variant="outlined"
            />
            <TextField
              error={Boolean(
                formik.touched.tin_number && formik.errors.tin_number
              )}
              helperText={formik.touched.tin_number && formik.errors.tin_number}
              // defaultCountry={'et'}
              name="tin_number"
              margin="normal"
              label="tin_number"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              fullWidth
             
              value={formik.values.tin_number}
              variant="outlined"
            />

            {Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>{formik.errors.policy}</FormHelperText>
            )}
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Add Firm Now
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Register;
