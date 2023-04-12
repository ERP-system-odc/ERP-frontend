import { useState, useEffect } from "react";
import React from "react";
import { Formik, Field, FieldArray } from "formik";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  MenuItem,
} from "@mui/material";
import { TextField, Select } from "formik-material-ui";
import { FormStepper } from "../../pages/FormStepper";

import { itemAPI, addStandardAPI } from "../../utils/apiUtils";

export const Simple = () => {
  const [item1, setItem1] = useState([]);
  const linksGroup = { linkname: "", linkurl: "" };
  const parameters1 = { inventory_name: "", inventory_quantity: "" };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    async function fetchData() {
      try {
        const response = await itemAPI(token);
        setItem1(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h3" align="center" component="h2">
        Add Standard
      </Typography>
      <Card sx={{ marginTop: 2 }}>
        <CardContent sx={{ paddingY: 10, paddingX: 5 }}>
          <Formik
            initialValues={{
              standard_name: "",
              standard_items: [parameters1],
            }}
            onSubmit={async (values, actions) => {
              const token = sessionStorage.getItem("token");
              try {
                const response = addStandardAPI(values, token);
                alert("Added Successfully!");
              } catch (error) {
                console.log(error);
              }
            }}
          >
            {({ values }) => (
              <FormStepper>
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    <Field
                      fullWidth
                      name="standard_name"
                      component={TextField}
                      label="standard_name"
                    />
                  </Grid>
                </Grid>
                <FieldArray name="standard_items">
                  {({ push, remove }) => (
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
                      {values.standard_items.map((_, index) => (
                        <>
                          <Grid item md={5}>
                            <Field
                              fullWidth
                              name={`standard_items.${index}.inventory_name`}
                              component={Select}
                              label="inventory_name"
                            >
                              {item1.map((val, index) => (
                                <MenuItem
                                  key={index}
                                  value={val.inventory_name}
                                >
                                  {val.inventory_name}
                                </MenuItem>
                              ))}
                            </Field>
                          </Grid>
                          <Grid item md={5}>
                            <Field
                              fullWidth
                              name={`standard_items.${index}.inventory_quantity`}
                              component={TextField}
                              label="inventory_quantity"
                              type="number"
                            />
                          </Grid>
                          {index > 0 && (
                            <Grid item md={2}>
                              <Button
                                variant="outlined"
                                color="error"
                                onClick={() => remove(index)}
                              >
                                Delete
                              </Button>
                            </Grid>
                          )}
                        </>
                      ))}{" "}
                      <Grid item xs={12}>
                        <Button
                          variant="outlined"
                          onClick={() => push(linksGroup)}
                        >
                          Add Inventory
                        </Button>
                      </Grid>
                    </Grid>
                  )}
                </FieldArray>
              </FormStepper>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Container>
  );
};
