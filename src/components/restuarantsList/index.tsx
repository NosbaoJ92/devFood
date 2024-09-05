import { View, Text, FlatList} from 'react-native';
import { useState, useEffect} from 'react'
import { RestaurantItem } from './vertical';

export interface RestaurantsProps{
    id: string;
    name: string;
    image: string;
    rating: number;
}

export default function RestuarantsVerticalList() {
    const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])

    useEffect(() => {
      async function getRestaurantsList(){
        const response = await fetch("http://192.168.1.11:3000/restaurants ")
        const data = await response.json()
        setRestaurants(data)
      }
      getRestaurantsList();
    }, [])

 return (
  <View className='px-4 flex-1 w-full h-full mb-11 gap-4'>
    {restaurants.map( item => (
      <RestaurantItem item={item} key={item.id}/>
    ))}
  </View>
  );
}