import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState, useEffect } from 'react';
import { productAPI } from '../../utils/apiUtils';

export const StocksList = () => {

  const [item1, setItem1] = useState([]);

  useEffect(() => {
    const token =  sessionStorage.getItem("token")
    async function fetchData() {
      try{
        const response = await productAPI(token)
        setItem1(response.data.foundProduct)
      }catch(error){
        console.log(error)
      }
    }
    fetchData();
  }, []);

return(
  <Card >
    <CardHeader
      title="Stocks"
    />
    <Divider />
    <List>
      {item1.map((product, i) => (
        <ListItem
          key={i}
        >
          
          <ListItemText
            primary={product.product_name}
            secondary={`Quantity ${product.product_quantity}`}
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
)};
