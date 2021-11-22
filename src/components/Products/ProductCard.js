import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import Button from '@mui/material/Button'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { productsContext } from '../../contexts/ProductsContext'
import { checkProductInCart } from '../../helpers/cartFunctions'
const ProductCard = ({ item }) => {
  const { addProductToCart } = useContext(productsContext)

  return (
    <Grid item xs={3}>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title={item.title}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="auto"
          image={item.image[0]}
          alt={item.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{ justifyContent: 'space-around' }}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton
            aria-label="share"
            onClick={() => addProductToCart(item)}
            color={checkProductInCart(item.id) ? 'secondary' : 'primary'}
          >
            <AddShoppingCartIcon />
          </IconButton>
          <Button variant="outlined" endIcon={<MoreHorizIcon />}>
            <Link to={`/product/${item.id}`} style={{ color: 'inherit' }}>
              Подробнее
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default ProductCard
