import Head from "next/head";
import NextLink from "next/link";
import Router from "next/router";
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
      full_name: "",
      email: "",

      phone_number: "+251",
      password: "",
      confirm_password: "",
      // policy: false
    },
    validationSchema: Yup.object({
      full_name: Yup.string().max(255).required("Full name is required"),
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),

      phone_number: Yup.string().max(255).required("Phone Number is required"),
      password: Yup.string().max(255).required("Password is required"),
      confirm_password: Yup.string()
        .max(255)
        .required("Please confirmPassword "),
      // policy: Yup
      //   .boolean()
      //   .oneOf(
      //     [true],
      //     'This field must be checked'
      //   )
    }),
    // onSubmit: () => {
    //   Router
    //     .push('/')
    //     .catch(console.error);
    // }
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values, null, 2),
      })
        .then((response) => response.json())
        .then((data) => {
          //handle data
          console.log(data);

          if (data.status == 200) {
            alert(data.message);
            Router.push("/");
          } else if (data.status == 302) {
            alert(data.message);
            location.reload();
          } else if (data.status == 400) {
            alert(data.message);
            location.reload();
          }
        })

        .catch((error) => {
          //handle error
        });
    },
  });

  return (
    <>
      <Head>
        <title>Register | ERP</title>
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
                Create a new account
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Use your email to create a new account
              </Typography>
            </Box>
            <TextField
              error={Boolean(
                formik.touched.full_name && formik.errors.full_name
              )}
              fullWidth
              helperText={formik.touched.full_name && formik.errors.full_name}
              label="Full Name"
              margin="normal"
              name="full_name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.full_name}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(
                formik.touched.phone_number && formik.errors.phone_number
              )}
              helperText={
                formik.touched.phone_number && formik.errors.phone_number
              }
              // defaultCountry={'et'}
              name="phone_number"
              margin="normal"
              label="Phone Number"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              fullWidth
              inputProps={{ maxLength: 13,minLength: 13  }}
              type="tel"
              value={formik.values.phone_number}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />
            <TextField
              error={Boolean(
                formik.touched.confirm_password &&
                  formik.errors.confirm_password
              )}
              fullWidth
              helperText={
                formik.touched.confirm_password &&
                formik.errors.confirm_password
              }
              label="Confirm Password"
              margin="normal"
              name="confirm_password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.confirm_password}
              variant="outlined"
            />
            {/* <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                ml: -1
              }}
            >
              <Checkbox
                checked={formik.values.policy}
                name="policy"
                onChange={formik.handleChange}
              />
              <Typography
                color="textSecondary"
                variant="body2"
              >
                I have read the
                {' '}
                <NextLink
                  href="#"
                  passHref
                >
                  <Link
                    color="primary"
                    underline="always"
                    variant="subtitle2"
                  >
                    Terms and Conditions
                  </Link>
                </NextLink>
              </Typography>
            </Box> */}
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
                Sign Up Now
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body2">
              Have an account?{" "}
              <NextLink href="/" passHref>
                <Link variant="subtitle2" underline="hover">
                  Sign In
                </Link>
              </NextLink>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Register;
