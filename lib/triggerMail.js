export async function triggerMail(obj) {
    try {
      const response = await fetch("http://localhost:4562/api/sentMail", { 
        method: "POST", 
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json",
          }
    });
      const data=await response.json()
      console.log("Success",data)
    } catch (error) {
      console.log(error);
      return null;
    }
  }