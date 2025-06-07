return new Promise((resolve, reject) => {
    // Do some async task (e.g., read file, API call)
    if (success) resolve(result); // Success
    else reject(error);          // Failure
  });