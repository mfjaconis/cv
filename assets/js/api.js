
 async function fetchProfileData() {

    const url = "https://raw.githubusercontent.com/mfjaconis/cv/main/data/profile.json?token=GHSAT0AAAAAACFG3ZAJDA3F3JMPNX5YQE4QZFW5MDQ";

    const fetching = await fetch(url)
    
    return await fetching.json()
 }