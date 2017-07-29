import axios from 'axios'

const yelp_url = 'https://api.yelp.com/v3/businesses/search'
axios.defaults.baseURL = yelp_url

var config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Authorization': 'bearer gdrsso4F906v3Ruga2nslfMGe20d0A7cRqarZ_qNcrnv_2nsEIKcnAQ0cXb_uv4xR_l23yCJzwEIibr4_LXGVNvC8NFuMRtHeKZ-0L1nTkm2ArgEuLn2PCKq65Z7WXYx'
  }
}

//?location=new york city&term=food&limit=1/

export const searchAdapter = {
  fetchYelpSearchResults: query => {
    return axios.get('?location=new york city&term=food&limit=1', config)
      .then(response => {
        debugger
        return response.data
      })
      .catch(error => error)
  }
}
