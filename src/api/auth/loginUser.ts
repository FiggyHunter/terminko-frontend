import axios from "axios";

export const loginUser = async (data) => {
  console.log(data);
  try {
    const response = await axios.post(
      "https://cv-builder-api.skim.ba/api/auth/login",
      data
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
