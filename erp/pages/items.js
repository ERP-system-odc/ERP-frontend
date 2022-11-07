import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { ItemsListResults } from '../components/items/items-list-result';
import { ItemsListToolbar } from '../components/items/item-list-toolbar';
import { ItemsAdd } from '../components/items/itemadd';
import { DashboardLayout } from '../components/dashboard-layout';

const Page = () => (
  <>
    <Head>
      <title>
        Items | Material Kit
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
        <ItemsListToolbar />
        <ItemsAdd />
        <Box sx={{ mt: 3 }}>
          <ItemsListResults />
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
