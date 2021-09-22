import React,{Component}  from 'react'
import items from './data'
import Client from './Contentful'
// Client.getEntries({
//    content_type:'beachResortRoomExample'
// }).then(response=>console.log(response.items))
const RoomContext=React.createContext();

 class RoomProvider extends Component{
     state={
      rooms:[],
      sortedRooms:[],
      featuredRooms:[],
      loading:true,
      type:'all',
      capacity:1,
      price:0,
      minPrice:0,
      maxPrice:0,
      minSize:0,
      maxSize:0,
      breakfast:false,
      pets:false,
     }
     //get data
     getdata = async ()=>{
         try {
            let response = await Client.getEntries({
                content_type:'beachResortRoomExample',
                //order:"sys.createdAt",
                order:'fields.price'
            });
            let rooms=this.formatData(response.items);
            let featuredRooms=rooms.filter(room=>room.featured===true)
            let maxPrice=Math.max(...rooms.map(item=>item.price))
            let maxSize=Math.max(...rooms.map(item=>item.size))
            // console.log(featuredRooms)
            // console.log(maxPrice);
            // console.log(maxSize)
            this.setState({
              rooms,
              featuredRooms,
              sortedRooms:rooms,
              loading:false,//es6 format
              price:maxPrice,
              maxPrice,
              maxSize,

         })
         } catch (error) {
             console.log(error)
         }
     }
     //get data
     componentDidMount(){
         this.getdata();
         /*let rooms=this.formatData(items);
         let featuredRooms=rooms.filter(room=>room.featured===true)
         let maxPrice=Math.max(...rooms.map(item=>item.price))
         let maxSize=Math.max(...rooms.map(item=>item.size))
        // console.log(featuredRooms)
        // console.log(maxPrice);
        // console.log(maxSize)
         this.setState({
             rooms,
             featuredRooms,
             sortedRooms:rooms,
             loading:false,//es6 format

             price:maxPrice,
             maxPrice,
             maxSize,

         })*/
        
         //console.log(rooms)
     }
     formatData(items){//parameters could be any name
                let tempItems=items.map(item=>{
                let id=item.sys.id;
                let images=item.fields.images.map(image=>
                image.fields.file.url);
                let room={...item.fields,images,id}// here we are overriding the images property that present in our data    
                //console.log(room)
                return room;
                
          })
          return tempItems;
     }

     getRoom=(slug)=>{
         let tempRooms=[...this.state.rooms];
         const room=tempRooms.find((room)=>
         room.slug===slug)
         return room;
     }
     handleChange=(event)=>{
         const target=event.target;
         const value=target.type==='checkbox'?
         target.checked:target.value;
         const name=event.target.name;
         this.setState(
             {
                 [name]:value
             },
             this.filterrooms
         )
        // console.log(`this is ${type},this is ${name},this is ${value}`)
     }
     filterrooms=()=>{
         let {rooms,type,capacity,price,minSize,maxSize,breakfast,pets}=this.state
         let tempRooms=[...rooms];
         capacity=parseInt(capacity);
         price=parseInt(price);
         //filter by type
         if(type!=='all'){
             tempRooms=tempRooms.filter(room=>room.type===type);
         }
         //filter by capacity
         if(capacity!==1){
             tempRooms=tempRooms.filter(room=>room.capacity>=capacity);
         }
         // filter by price
         tempRooms=tempRooms.filter(room=>room.price<=price);
         // filter for Size
         tempRooms=tempRooms.filter(room=>room.size>=minSize && room.size<=maxSize)
         // filter by breakfast
         if(breakfast){
             tempRooms=tempRooms.filter(room=>room.breakfast===true)
         }
         // filter by pets
         if(pets){
            tempRooms=tempRooms.filter(room=>room.pets===true)
        }
         // setting the states
         this.setState({
             sortedRooms:tempRooms
         })
     }
   render(){
       return(
          <RoomContext.Provider value={{...this.state,getRoom:this.getRoom,handleChange:this.handleChange}}>
             {this.props.children}
          </RoomContext.Provider>
       )
    }
}

const RoomConsumer=RoomContext.Consumer

export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer >
            {
                value => 
                    <Component {...props} context={value} /> 
            }
        </RoomConsumer>
    }
}

export {RoomProvider,RoomContext,RoomConsumer}