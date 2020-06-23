const apiKey = 's5NgaZObIX_8Eg0XVkrlHvfBsSdvHejv828uOHFP_tcA-8CNccwFwYdevXaB931AQyoN6PWl-qFGWLzpjwbOTn0Ry0FNGT_sLvlt71sQ8EJ3xJoMxjiBpLFYOLLxXnYx';
const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                });
            }
        });
    }
};

export default Yelp;
