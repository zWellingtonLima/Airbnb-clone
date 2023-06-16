import prisma from '@/app/libs/prismadb'

interface IParams {
  listingId?: string;
}

export default async function getListingByIs(
  params: IParams
) {
  try {
    const { listingId } = params

    const listing = await prisma.listing.findUnique({
      where: {
        
      }
    })
  } catch (error) {
    
  }
}