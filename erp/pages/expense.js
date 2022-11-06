import Head from 'next/head';
import { Box, Container } from '@mui/material';

import { AddExpense } from '../components/expense/addExpense';
import { ListExpense } from '../components/expense/listExpense';
import { DashboardLayout } from '../components/dashboard-layout';

const Page = () => (
  <>
    <Head>
      <title>
        Expense | Material Kit
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
        <AddExpense />
       
        <Box sx={{ mt: 3 }}>
          <ListExpense />
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
