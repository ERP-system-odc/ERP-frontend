import Head from 'next/head';
import { Box, Container, Grid, Pagination, Typography, Divider } from '@mui/material';
import { products } from '../__mocks__/products';
import { ProductListToolbar } from '../components/product/product-list-toolbar';
import { ProductCard } from '../components/product/product-card';
import { DashboardLayout } from '../components/dashboard-layout';
import { ShowStandard } from './showStandard'
import { AvailableStock } from './availbleStock';

const Page = () => (
  <>
    <Head>
      <title>
        Products | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
