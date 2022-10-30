import { Formik, Field, Form, FieldArray } from "formik";
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
 
  Button,
} from "@mui/material";

const FormikFieldArrayForm = () => {
  const parameters1 = { inventory_name: "", inventory_quantity: "" };
  return (
    <Container>
      <Typography variant="h3" align="center" component="h2">
        Add Standard
      </Typography>
      <Card sx={{ marginTop: 2 }}>
        <CardContent sx={{ paddingY: 10, paddingX: 5 }}>
          <Formik
            initialValues={{ standard_name: "", standard_items: [parameters1] }}
            onSubmit={(values) =>
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
              }, 5000)
            }
          >
            {({ values }) => (
              <Form class="search-input">
                <Grid container spacing={2}>
                  <Grid item md={6} class="input-container">
                  <span class="label">First Name</span>
                    <Field
                      fullWidth
                      name="standard_name"
                      // component={TextField}
                      label="standard_name"
                      class="input"
                      component={TextField}
                    />
                    
                  </Grid>
                </Grid>
                <FieldArray
                  name="standard_items"
                  render={(arrayHelpers) => (
                    
                      <Grid
                      container
                      spacing={2}
                      sx={{ marginTop: 2, paddingX: 2 }}
                    >
                      <Grid item xs={12}>
                        <Typography variant="h6" component="h2">
                          Add Inventories Needed
                        </Typography>
                      </Grid>
                      {values.standard_items.length > 0 &&
                        values.standard_items.map((paramList, index) => (
                          <div key={index}>
                            {Object.keys(paramList).map((param) => (
                              <Field
                                key={`${param}`}
                                name={`standard_items.${index}.${param}`}
                                placeholder={`${index}.${param}`}
                                component={TextField}
                              />
                            ))}
                            <Button
                              variant="outlined"
                              type="button"
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              {" "}
                              -{" "}
                            </Button>
                          </div>
                        ))}
                        <Grid item xs={12}>
                      <Button
                          variant="outlined"
                        type="button"
                        onClick={() =>
                          arrayHelpers.push({
                            inventory_name: "",
                            inventory_quantity: "",
                          })
                        }
                      >
                        {" "}
                        +{" "}
                      </Button>
                      </Grid>
                    </Grid>
                    
                  )}
                />
                
                <pre>{JSON.stringify(values, null, 2)}</pre>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FormikFieldArrayForm;
// <FormikFieldArrayForm parameters={{ paramLists: [parameters1] }} />,
