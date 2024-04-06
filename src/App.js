import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import {useDispatch,useSelector} from 'react-redux'
import { addToBasket, fetchingAllCards, setCardsPage } from './store/actionCreators';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
const App = () => {
  const {card,isloader,error,limit,page} = useSelector(s => s.main)
  const {basket} = useSelector(s => s.basket)
  const dispatch  = useDispatch()
  const arrayPage = []

  for(let i = 1; i<= 10;i++) {
    arrayPage.push(i)
  }
  useEffect(() => {
    dispatch(fetchingAllCards(limit,page))
  },[page])

  console.log(card);
  return (
    <main className='App'>
      <Navbar/>

      <div className='container'>

        {isloader && <h1>Loading...</h1>}
        {error ? error : " "}
        <div className='flex items-center justify-between flex-wrap'>
          {
            card
            .map(el => (
              <Card className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src={el.url}
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {el.id}
                </Typography>
                <Typography>
                 {el.title}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button onClick={() => dispatch(addToBasket(el))}>Add To Basket</Button>
              </CardFooter>
            </Card>
            ))
          }
        </div>

        <div className='flex gap-5 pt-3'>
          {
            arrayPage.map(btn => (
              <button onClick={() => dispatch(setCardsPage(btn))} className='w-11 h-10 border-solid border-gray-500'>{btn}</button>
            ))
          }
        </div>
      </div>
    </main>
  );
};

export default App;