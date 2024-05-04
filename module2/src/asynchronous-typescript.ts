{
    // promise
    const createPromise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data: string = "There is data"
            if (data) {
                resolve(data)
            }
            else {
                reject("There is no data")
            }
        })
    }

    // calling createPromise function
    const showData = async (): Promise<string> => {
        const data: string = await createPromise();
        console.log(data);
        return data;
    }

    showData();





















}