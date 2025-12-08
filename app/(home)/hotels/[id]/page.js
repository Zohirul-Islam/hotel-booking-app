import Summary from "@/components/hotel/details/Summary"
import Gallery from "@/components/hotel/details/Gallery"
import Overview from "@/components/hotel/details/Overview"
import { getHotelById } from "../../../../queries"

const HotelDetailsPage = async ({ params }) => {
  const resolvedParams = await params; 
  const id = resolvedParams.id;
  
  const hotelInfo = await getHotelById(id);
  console.log(hotelInfo);
  return (
    <>
        <Summary hotelInfo ={hotelInfo} />
        <Gallery gallery={hotelInfo?.gallery } />
        <Overview />
    </>
  )
}

export default HotelDetailsPage