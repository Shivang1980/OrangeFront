import PocketBase from "pocketbase";

const url = 'https://stellar.pockethost.io/'
const pb = new PocketBase(url)




async function login(username: string, password: string) {
    return await pb.collection('users').authWithPassword(username, password)
}

export default login


export const fetchTasks = async () => {
   
       const records= await pb.collection('Tasks').getFullList({sort: '-created'});
       return records;
    
   
};