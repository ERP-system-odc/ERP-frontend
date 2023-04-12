import Head from 'next/head';
import { Box, Container, Divider } from '@mui/material';

import { DashboardLayout } from '../components/dashboard-layout';
import { Journal } from './journal'
import { GeneralLedger } from './generalLedger';
import { TrialBalance } from './trialBalance';
import { IncomeStatement } from './incomeStatement'
import { GeneralBalance } from './generalBalance';

const Page = () => (
  <>
    <Head>
      <title>
        Finance | ERP
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
      <Divider sx={{
        padding:2
      }}/>
      <Container maxWidth={false}>
        <GeneralLedger />
      </Container>
      <Divider sx={{
        padding:2
      }}/>
      <Container maxWidth={false}>
        <TrialBalance />
      </Container>
      <Divider sx={{
        padding:2
      }}/>
      <Container maxWidth={false}>
        <IncomeStatement />
      </Container>
      <Divider sx={{
        padding:2
      }}/>
      <Container maxWidth={false}>
        <GeneralBalance />
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
