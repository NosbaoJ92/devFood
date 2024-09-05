import { View, Pressable, Text, Image } from 'react-native';
import { RestaurantsProps } from '..';

export function RestaurantItem( {item} : {item: RestaurantsProps}) {
 return (
   <Pressable className='flex flex-col items-center justify-center'
   onPress={() => console.log("clicou no restaurante " + item.name)}>
    <Image 
    source={{uri: item.image}}
    className="w-44 h-36 rounded-full"/>
    <Text className='text-sm mt-2 text-center leading-3 text-black' numberOfLines={2}>{item.name}</Text>
   </Pressable>
  );
}

