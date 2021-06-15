import HTTPService from "./HttpService";

class CommonService extends HTTPService {
  async getBannersList() {
    const { data, status } = await this.$axios.get("/banners", {
      validateStatus: () => true,
    });
    if (status >= 400) {
      throw new Error(data);
    }
    return data;
  }
}
export default CommonService