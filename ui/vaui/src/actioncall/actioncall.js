class ActionCall{
    post(url, data, response){
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body : data
        }).then(
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

export default ActionCall();