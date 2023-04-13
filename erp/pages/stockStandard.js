import Head from 'next/head';
import { Box, Container } from '@mui/material';

import { DashboardLayout } from '../components/dashboard-layout';
import { Simple } from '../components/standard/simple'
const Page = () => (
  <>
    <Head>
      <title>
        Add Standard | ERP
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
        <Simple />
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
