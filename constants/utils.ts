export const calculateUploadProbability = () => {
  const uploadTime = (Math.floor(Math.random() * (6 - 5 + 1)) + 5) * 1000;

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.random());
    }, uploadTime);
  });
};
