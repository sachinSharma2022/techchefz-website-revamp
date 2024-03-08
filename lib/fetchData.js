export async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data?.data[0]?.attributes;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getDataDynamic(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data?.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
