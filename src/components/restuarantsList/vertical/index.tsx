import { View, Pressable, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RestaurantsProps } from '..';

export function RestaurantItem( {item} : {item: RestaurantsProps}) {
 return (
   <Pressable className='flex flex-row items-center gap-2'
   onPress={() => console.log("clicou no restaurante " + item.name)}>
    <Image 
    source={{uri: item.image}}
    className="w-44 h-36 rounded-full"/>
    
    <View className='flex gap-2'>
        <Text className='text-base text-black leading-4 font-bold' numberOfLines={2}>{item.name}
        </Text>
        <View>
            <Ionicons name='star' size={14} color={'#ca8a04'}/>
            <Text className='text-sm'>{item.rating}</Text>
        </View>
    </View>
    
   </Pressable>
  );
}

