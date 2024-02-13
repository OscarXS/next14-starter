const mongoose.connect('mongodb://127.0.0.1:27017/test').
  catch(error => handleError(error));

// Or:
try {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
} catch (error) {
  handleError(error);
}