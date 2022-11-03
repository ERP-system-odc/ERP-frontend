import { formatDistanceToNow, subHours } from 'date-fns';
import { v4 as uuid } from 'uuid';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const products = [
  {
    id: 1,
    name: 'shoe',
    imageUrl: '/static/images/products/product_1.png',
    updatedAt: subHours(Date.now(), 2)
  },
  {
    id: 2,
    name: 'Tshirt',
    imageUrl: '/static/images/products/product_2.png',
    updatedAt: subHours(Date.now(), 2)
  },
  {
    id: 3,
    name: 'Humain Hair',
    imageUrl: '/static/images/products/product_3.png',
    updatedAt: subHours(Date.now(), 3)
  },
  {
    id: 4,
    name: 'Tshirt',
    imageUrl: '/static/images/products/product_4.png',
    updatedAt: subHours(Date.now(), 5)
  },
  {
    id: 5,
    name: 'GitHub',
    imageUrl: '/static/images/products/product_5.png',
    updatedAt: subHours(Date.now(), 9)
  }
];

export const LatestProducts = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${products.length} in total`}
      title="Tranactions"
    />
    <Divider />
    <List>
      {products.map((product, i) => (
        <ListItem
          divider={i < products.length - 1}
          key={product.id}
        >
          
          <ListItemText
            primary={product.name}
            secondary={`Updated ${formatDistanceToNow(product.updatedAt)}`}
          />
          <IconButton
            edge="end"
            size="small"
          >
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);
