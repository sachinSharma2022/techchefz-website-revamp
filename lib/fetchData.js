export async function getData(url) {
    try {
      const response = await fetch(url, { cache: "no-store" });
      const data=await response.json()
      return data?.data[0]?.attributes;
    } catch (error) {
      console.log(error);
      return null;
    }
  }