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
async put(url, data) {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-type': 'aplication/json'
        },
        body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;

    }

    // Make an http DELETE Request
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'aplication/json'
            },
        })
        const resData = await 'Resorse Deleted...';
        return resData;
        }
 }


