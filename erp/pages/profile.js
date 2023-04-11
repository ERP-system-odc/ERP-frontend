import Head from "next/head";
import { useState, useEffect } from "react";
import { Box, Container, Grid } from "@mui/material";
import { Budget } from "../components/dashboard/budget";
import { LatestOrders } from "../components/dashboard/latest-orders";
import { LatestProducts } from "../components/dashboard/latest-products";
import { Sales } from "../components/dashboard/sales";
import { DailySale } from "../components/dashboard/dailysale";
import { Expenses } from "../components/dashboard/expenses";
import { TotalProfit } from "../components/dashboard/total-profit";
import { TrafficByDevice } from "../components/dashboard/traffic-by-device";
import { DashboardLayout } from "../components/dashboard-layout";

import { dashboardAPI } from "../utils/apiUtils";

const Page = () => {
  const [data1, setData1] = useState(null);

  useEffect(() => {
    const token =  sessionStorage.getItem("token")
    async function fetchData() {
      try{
        const response = await dashboardAPI(token)
        setData1(response.data)
      }catch(error){
        console.log(error)
      }
    }
    fetchData();
  }, []);

  // console.log("the distrubuted dataa is 2 ", data1)
  return (
    <>
      <Head>
        <title>Dashboard | ERP</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <Budget data={data1?.capital}/>
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TotalProfit sx={{ height: "100%" }} data={data1?.income}/>
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <Expenses data={data1?.expense}/>
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <DailySale data={data1?.max_sold_product}/>
            </Grid>

            <Grid item lg={8} md={12} xl={9} xs={12}>
              <Sales />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <TrafficByDevice sx={{ height: "100%" }}  />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <LatestProducts sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <LatestOrders />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
