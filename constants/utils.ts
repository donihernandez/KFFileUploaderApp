export const calculateUploadProbability = () => {
  let successProbability = 0;
  const uploadTime = Math.floor(Math.random() * (6 - 5 + 1)) + 6;

  setTimeout(() => {
    successProbability = Math.random();
  }, uploadTime);

  return successProbability;
};
