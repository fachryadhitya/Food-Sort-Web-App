const apiKey =
  "5qPO0zDhOdYvUq2b5OFAzvce8nc65fJoup8v4KClu3nFy_TtO6Sw2e2zosOAbDrL41cM2H56zjkdbIHT5L3WAoTNqon7pXXEJA6oNK2zGKofXt9XFRj_HtDbZUSpXnYx";
const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
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
              reviewCount: business.review_count,
            };
          });
        }
      });
  },
};

// 07accb8f4d6db7509204d52ee6b99d5c

export default Yelp;
