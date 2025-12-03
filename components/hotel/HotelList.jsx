import { getAllHotels } from "../../queries";
import HotelCard from "./HotelCard";

const HotelList = async () => {
  const allhotels = await getAllHotels();
  
  return (
    <div className="col-span-9">
      <div className="space-y-4">
        {
          allhotels.map((hotel) => (
            <HotelCard key={hotel.id} hotelInfo ={hotel} />
          ))
        }
       
      </div>
    </div>
  );
};

export default HotelList;
