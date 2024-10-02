const apiSuccess = ({
  req,
  res,
  data,
  message = 'Success',
  status = {
    code: 200,
    success: true
  }
}) => {
  console.log({
    message,
    method: req?.method,
    route: req?.url
  });
  return res.status(status.code || 200).json({ message, status, data });
};

const apiFail = ({
  req,
  res,
  error,
  message = 'Error Occured',
  status = {
    code: 400,
    success: false
  }
}) => {
  console.log(error);
  return res.status(status.code || 400).json({
    message,
    status: {
      code: status.code || 400,
      success: status.success || false
    },
    error
  });
};

export { apiSuccess, apiFail };
