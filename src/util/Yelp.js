const apiKey = '62Unfbj1tLaLr2el7Q0myqpBFCkE3dZbLnDMguG97Zi3GWfKuGQLthINpnaGRUy3SEJrkjhth7sLaG5hLBaIb7XPVbMnd2FVV6Qs_kqJYdbquY0LQg3TjC86vvGuXXYx'

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => response.json()
        ).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        adress: business.location.adress1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,

                    }
                })
            }
        })
    }
}

export default Yelp;