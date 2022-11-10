import Head from 'next/head';
import { Box, Container } from '@mui/material';

import { DashboardLayout } from '../components/dashboard-layout';
import { Journal } from './journal'
const Page = () => (
  <>
    <Head>
      <title>
        Journal Entry | Material Kit
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
        <Journal />
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
