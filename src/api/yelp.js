import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 4of7ThlMW9NSui391ZEr-Sxt-csLtkTzFkpub_q1kQtMPA6J2VYMMWwjc8DKJaDGEexo68EbXnj-pkw5-kO51AhgyUkj0fLCn7_Rs8VoVn3Y7s92r34dhypBV28PYHYx",
  },
});
