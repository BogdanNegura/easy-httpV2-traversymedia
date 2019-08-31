/**
 * EasyHTTP Library
 * Library for making HTTP Requests
 * 
 * @version 2.0.0
 * @author Bogdan Negura
 * @license MIT
 **/

 class EasyHTTP {
    //  Make an HTTP GET Request
    async get(url) {
      const response = await fetch(url);
      
      const resData = await response.json();
      return resData;
    }

    // Make an HTTP POST Request
    async post(url, data) {

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'aplication/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
  
    }

    //  Make an HTTP PUT Request
put(url, data) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'aplication/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
        });
    }

    // Make an http DELETE Request
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'aplication/json'
                },
            })
            .then(res => res.json())
            .then(() => resolve('Resource Deleted..'))
            .catch(err => reject(err));
            });
        }
 }


