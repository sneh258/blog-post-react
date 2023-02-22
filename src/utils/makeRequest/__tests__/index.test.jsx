import {
  BACKEND_URL,
  GET_BLOG_DATA,
  UPDATE_BLOG_DATA,
} from "../../../constants/apiEndPoints";
import makeRequest from "../index";
import axios from "axios";

jest.mock("axios");

describe("makeRequest", () => {
  const mockData = [
    {
      id: 1,
      date: "2023-02-01T14:46:22.001Z",
      reading_time: "2 mins",
      title: "The future of abstract art and the culture is a bright one",
      description:
        "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your readers for more. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas laoreet nibh euismod vestibulum.",
      claps: 14,
      liked: false,
      image: "https://i.ibb.co/LNxt44v/abstract.png",
    },
  ];
  it("should make api call when only api endpoint is passed", async () => {
    const mockAxiosData = axios.mockResolvedValue({ data: mockData });
    expect(mockAxiosData).not.toBeCalled();
    const response = await makeRequest(GET_BLOG_DATA);
    expect(mockAxiosData).toHaveBeenCalledTimes(1);
    expect(mockAxiosData).toHaveBeenCalledWith({
      baseURL: BACKEND_URL,
      url: "blog-posts",
      method: "get",
    });
    expect(response).toEqual(mockData);
  });
  it("should make api call when both api endpoint and body is passed", async () => {
    const mockAxiosData = axios.mockResolvedValue({
      data: { data: { claps: 1 } },
    });
    expect(mockAxiosData).not.toBeCalled();
    const response = await makeRequest(UPDATE_BLOG_DATA(1), {
      data: {
        claps: 1,
      },
    });
    expect(mockAxiosData).toHaveBeenCalledTimes(1);
    expect(mockAxiosData).toHaveBeenCalledWith({
      baseURL: BACKEND_URL,
      url: "blog-posts/1",
      method: "put",
      data: {
        claps: 1,
      },
    });
      expect(response).toEqual({
          data: {
            claps:1
        }
    });
  });
});
