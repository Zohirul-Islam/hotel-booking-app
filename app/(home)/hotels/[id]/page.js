import Summary from "@/components/hotel/details/Summary"
import Gallery from "@/components/hotel/details/Gallery"
import Overview from "@/components/hotel/details/Overview"
import { getHotelById } from "../../../../queries"

const HotelDetailsPage = async ({ params,searchParams }) => {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const id = resolvedParams.id;
  const checkin = resolvedSearchParams.checkin;
  const checkout = resolvedSearchParams.checkout;
  const hotelInfo = await getHotelById(id,checkin,checkout);

  

  return (
    <>
        <Summary hotelInfo ={hotelInfo} />
        <Gallery gallery = {hotelInfo?.gallery} />
      <Overview overview={hotelInfo?.overview } />
    </>
  )
}

export default HotelDetailsPage