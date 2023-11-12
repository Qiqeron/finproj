this.isLoad = true;
                fetch("https://dog.ceo/api/breeds/image/random")
                    .then(response =>  response.json())
                    .then(data => {
                        this.imgDog = data.message
                        this.isLoad = false;
                    })
                    .catch(error => {
                        console.error(error);
                    })