LoadSync();
function Load(){
    fetch("http://localhost:3000/posts").then(
        function(data){
            return data.json();
        }
    ).then(
        function(data){
            console.log(data);
        }
     )
}
async function LoadSync(){
    let res = await fetch("http://localhost:3000/posts");
    let data = await res.json();
    console.log(data);
}

