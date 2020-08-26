class ActionCall{
    post(url, data, response){
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body : data
        }).then(res => res.json())
        .then(
            (result) => {
                response(result);
            },
            (error) => {
                response(error)
            }
        )
    }
    get(url, response){

    }
}

export default new ActionCall();