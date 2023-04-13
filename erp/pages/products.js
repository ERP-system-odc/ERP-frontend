import Head from "next/head";
import { Box, Container, Typography, Divider } from "@mui/material";
import { ProductListToolbar } from "../components/product/product-list-toolbar";
import { ProductCard } from "../components/product/product-card";
import { DashboardLayout } from "../components/dashboard-layout";
import { ShowStandard } from "../components/product/showStandard";
import { AvailableStock } from "../components/product/availbleStock";

const Page = () => (
  <>
    <Head>
      <title>Products | ERP</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <ProductListToolbar />
        <Box sx={{ pt: 3 }}>
          <Typography sx={{ mb: 3 }} variant="h4">
            Available Producs
          </Typography>
          <AvailableStock />

          <Divider />
          <Typography sx={{ mb: 3 }} variant="h4">
            Add Produced Goods
          </Typography>
          <ShowStandard />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
