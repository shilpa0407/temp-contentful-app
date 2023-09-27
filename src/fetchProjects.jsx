import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
    space: 'mrw44k3a0vda',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'QrX2yDsS3MLK_Pv3yY1_QTYFVVEZMY094nvzjHzcDIk',
  });

   export const useFetchProjects = () =>{
    const [loading , setLoading] = useState(true)
    const [projects , setProjects] = useState([])
 
 const getData = async() =>{
    try{
      const response = await client.getEntries({content_type:"projetcs"});
      const projects = response.items.map((item) =>{
        const {title , url , image} = item.fields;
        const id = item.sys.id;
        const img = image?. fields?.file?.url;
        return {title , url , id , img} ; 
      });
      setLoading(false);
      setProjects(projects);
    }catch (error){
        console.log(error);
        setProjects(projects);
       
    }
  }

    useEffect(()=>{
      getData();
        },[])
        return {loading, projects};

 
};





 
 