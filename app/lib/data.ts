import Revenue from "@/lib/models/revenue";
import dbConnect from "@/lib/dbConnect";
export async function fetchRevenue() {
    const conn = await dbConnect();
    console.log(conn);
    
    try {
      // Artificially delay a response for demo purposes.
      // Don't do this in production :)
  
      console.log('Fetching revenue data...');
      await new Promise((resolve) => setTimeout(resolve, 3000));
      
        await Revenue.create({month: "Jan", revenue: 2000});    
      const data = await Revenue.find({});
      console.log('Data fetch completed after 4 seconds.');
      console.log(data);
      
  
      return data;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
    }
  }
