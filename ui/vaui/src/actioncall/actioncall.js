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
                var responseBuilder = {}
                responseBuilder["result"] = result;
                responseBuilder["isSuccess"] = true;
                response(responseBuilder);
            },
            (error) => {
                var responseBuilder = {}
                responseBuilder["result"] = error;
                responseBuilder["isSuccess"] = false;
                response(responseBuilder);
            }
        )
    }
    get(url, response){

    }
}

export default new ActionCall();