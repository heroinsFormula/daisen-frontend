import axios from 'axios';

export const fileService = {
  async getFiles() {
    // const accessToken = localStorage.getItem('access_token');
    const response = await axios.get('files-api/get-files/', {
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`
    //   }
    });
    return response.data;
  },
  async postFile(payload) {
    const response = await axios.post('files-api/post-file/', payload);
    return response.data;
  },
  async deleteFile(id) {
    const response = await axios.delete(`files-api/delete-file/${id}/`);
    return response.data;
  },
  async renameFile(id, newFileName) {
    const response = await axios.patch(`files-api/rename-file/${id}/`, {newFileName: newFileName});
    return response.data;
  }
};
