import Head from 'next/head';
import { Box, Container } from '@mui/material';

import { DashboardLayout } from '../components/dashboard-layout';
import { Journal } from './journal'
import { GeneralLedger } from './generalLedger';
import { TrialBalance } from './trialBalance';
import { IncomeStatement } from './incomeStatement'

const Page = () => (
  <>
    <Head>
      <title>
        Finance | Material Kit
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
      <Container maxWidth={false}>
        <GeneralLedger />
      </Container>
      <Container maxWidth={false}>
        <TrialBalance />
      </Container>
      <Container maxWidth={false}>
        <IncomeStatement />
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
